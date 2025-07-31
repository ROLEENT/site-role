// Service Worker para ROLÊ Entretenimento - Versão Otimizada
const CACHE_NAME = 'role-v1.0.1';
const STATIC_CACHE = 'role-static-v1';
const DYNAMIC_CACHE = 'role-dynamic-v1';

// Recursos para cache estático (críticos para funcionamento offline)
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/revista.html',
  '/estilo.css',
  '/js/app.js',
  '/images/logo-role.png',
  '/images/favicon.png',
  '/images/banner-home.png',
  '/images/editorial-madrugada.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
  'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2'
];

// Recursos para cache dinâmico
const CACHE_DYNAMIC_LIMIT = 75;

// URLs que não devem ser cacheadas
const CACHE_BLACKLIST = [
  'https://pagead2.googlesyndication.com',
  'https://googleads.g.doubleclick.net',
  'https://tpc.googlesyndication.com',
  '/sw.js'
];

// ========== INSTALAÇÃO ==========
self.addEventListener('install', (event) => {
  console.log('[ROLÊ SW] Instalando Service Worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[ROLÊ SW] Cacheando assets estáticos');
        return cache.addAll(STATIC_ASSETS.filter(url => {
          // Filtrar URLs que podem falhar
          try {
            new URL(url, self.location);
            return true;
          } catch {
            return url.startsWith('/') || url.startsWith('./');
          }
        }));
      })
      .then(() => {
        console.log('[ROLÊ SW] ✅ Instalação completa');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[ROLÊ SW] ❌ Erro na instalação:', error);
      })
  );
});

// ========== ATIVAÇÃO ==========
self.addEventListener('activate', (event) => {
  console.log('[ROLÊ SW] Ativando Service Worker...');
  
  event.waitUntil(
    Promise.all([
      // Limpar caches antigos
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[ROLÊ SW] 🗑️ Removendo cache antigo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Assumir controle imediatamente
      self.clients.claim()
    ]).then(() => {
      console.log('[ROLÊ SW] ✅ Ativação completa');
    })
  );
});

// ========== INTERCEPTAÇÃO DE REQUESTS ==========
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  
  // Pular requests não HTTP/HTTPS
  if (!event.request.url.startsWith('http')) {
    return;
  }
  
  // Pular URLs na blacklist (ads, analytics, etc.)
  if (CACHE_BLACKLIST.some(blocked => event.request.url.includes(blocked))) {
    return;
  }
  
  // Pular requests POST/PUT/DELETE
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Estratégia baseada no tipo de recurso
  if (isStaticAsset(event.request.url)) {
    event.respondWith(cacheFirst(event.request));
  } else if (event.request.destination === 'document') {
    event.respondWith(networkFirst(event.request));
  } else if (event.request.destination === 'image') {
    event.respondWith(cacheFirst(event.request));
  } else {
    event.respondWith(networkFirst(event.request));
  }
});

// ========== ESTRATÉGIAS DE CACHE ==========

// Cache First: Ideal para assets estáticos
function cacheFirst(request) {
  return caches.match(request)
    .then((cachedResponse) => {
      if (cachedResponse) {
        // Atualizar cache em background se necessário
        updateCacheInBackground(request);
        return cachedResponse;
      }
      
      return fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseClone);
                limitCacheSize(DYNAMIC_CACHE, CACHE_DYNAMIC_LIMIT);
              });
          }
          return networkResponse;
        })
        .catch((error) => {
          console.warn('[ROLÊ SW] Network failed for:', request.url);
          return getOfflineFallback(request);
        });
    });
}

// Network First: Ideal para conteúdo dinâmico
function networkFirst(request) {
  return fetch(request)
    .then((networkResponse) => {
      if (networkResponse && networkResponse.ok) {
        const responseClone = networkResponse.clone();
        caches.open(DYNAMIC_CACHE)
          .then((cache) => {
            cache.put(request, responseClone);
            limitCacheSize(DYNAMIC_CACHE, CACHE_DYNAMIC_LIMIT);
          });
      }
      return networkResponse;
    })
    .catch(() => {
      return caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return getOfflineFallback(request);
        });
    });
}

// ========== UTILIDADES ==========

// Verificar se é um asset estático
function isStaticAsset(url) {
  return STATIC_ASSETS.some(asset => {
    if (asset.startsWith('http')) {
      return url.includes(asset);
    }
    return url.endsWith(asset) || url.includes(asset);
  });
}

// Atualizar cache em background (stale-while-revalidate)
function updateCacheInBackground(request) {
  fetch(request)
    .then((response) => {
      if (response && response.ok) {
        caches.open(DYNAMIC_CACHE)
          .then((cache) => cache.put(request, response.clone()));
      }
    })
    .catch(() => {
      // Silently fail - usar versão cacheada
    });
}

// Fallback para modo offline
function getOfflineFallback(request) {
  if (request.destination === 'document') {
    return caches.match('/index.html')
      .then(response => response || new Response(
        `<!DOCTYPE html>
        <html><head><title>ROLÊ - Offline</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Inter, sans-serif; padding: 40px 20px; text-align: center; background: #0D0D0D; color: white; }
          .logo { width: 120px; margin: 0 auto 20px; }
          h1 { color: #8B5CF6; margin-bottom: 10px; }
          p { color: #A0A0A0; margin-bottom: 20px; }
          button { background: linear-gradient(135deg, #8B5CF6, #EC4899); color: white; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer; }
        </style></head>
        <body>
          <div class="logo">🎪</div>
          <h1>ROLÊ</h1>
          <p>Você está offline, mas a cultura continua!</p>
          <button onclick="window.location.reload()">Tentar novamente</button>
        </body></html>`,
        { headers: { 'Content-Type': 'text/html' } }
      ));
  }
  
  if (request.destination === 'image') {
    // SVG placeholder para imagens
    return new Response(
      `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#1A1A1A"/>
        <text x="200" y="150" text-anchor="middle" fill="#8B5CF6" font-size="16" font-family="Inter, sans-serif">
          ROLÊ - Imagem offline
        </text>
      </svg>`,
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  }
  
  return new Response('Recurso não disponível offline', {
    status: 503,
    statusText: 'Service Unavailable',
    headers: { 'Content-Type': 'text/plain' }
  });
}

// Limitar tamanho do cache dinâmico
async function limitCacheSize(cacheName, maxItems) {
  try {
    const cache = await caches.open(cacheName);
    const items = await cache.keys();
    
    if (items.length > maxItems) {
      const itemsToDelete = items.slice(0, items.length - maxItems);
      await Promise.all(itemsToDelete.map(item => cache.delete(item)));
      console.log(`[ROLÊ SW] 🗑️ Removidos ${itemsToDelete.length} itens do cache dinâmico`);
    }
  } catch (error) {
    console.error('[ROLÊ SW] Erro ao limitar cache:', error);
  }
}

// ========== PUSH NOTIFICATIONS ==========
self.addEventListener('push', (event) => {
  console.log('[ROLÊ SW] 📬 Push notification recebida');
  
  if (!event.data) return;
  
  try {
    const data = event.data.json();
    const options = {
      body: data.body || 'Novo rolê disponível na sua cidade!',
      icon: '/images/favicon.png',
      badge: '/images/favicon.png',
      image: data.image,
      data: { url: data.url || '/' },
      actions: [
        {
          action: 'view',
          title: '🎪 Ver rolê'
        },
        {
          action: 'dismiss',
          title: '✖️ Dispensar'
        }
      ],
      requireInteraction: false,
      vibrate: [200, 100, 200],
      tag: 'role-notification',
      renotify: true
    };
    
    event.waitUntil(
      self.registration.showNotification(
        data.title || 'ROLÊ 🎪',
        options
      )
    );
  } catch (error) {
    console.error('[ROLÊ SW] Erro ao processar push:', error);
  }
});

// ========== CLICK EM NOTIFICAÇÕES ==========
self.addEventListener('notificationclick', (event) => {
  console.log('[ROLÊ SW] 👆 Notificação clicada');
  
  event.notification.close();
  
  if (event.action === 'dismiss') {
    return; // Apenas fechar
  }
  
  const url = event.notification.data?.url || '/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Focar janela existente se possível
        for (const client of clientList) {
          if (client.url.includes(url) && 'focus' in client) {
            return client.focus();
          }
        }
        
        // Abrir nova janela
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
      .catch((error) => {
        console.error('[ROLÊ SW] Erro ao abrir notificação:', error);
      })
  );
});

// ========== BACKGROUND SYNC ==========
self.addEventListener('sync', (event) => {
  console.log('[ROLÊ SW] 🔄 Background sync:', event.tag);
  
  if (event.tag === 'newsletter-signup') {
    event.waitUntil(processNewsletterQueue());
  } else if (event.tag === 'analytics-data') {
    event.waitUntil(processAnalyticsQueue());
  }
});

// Processar fila de newsletter offline
async function processNewsletterQueue() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const queueResponse = await cache.match('/newsletter-queue');
    
    if (queueResponse) {
      const signups = await queueResponse.json();
      console.log(`[ROLÊ SW] Processando ${signups.length} inscrições offline`);
      
      const results = await Promise.allSettled(
        signups.map(signup => 
          fetch('https://script.google.com/macros/s/AKfycbx0JqMhtw7RBl7XLqaq6uW4BuxsO6rL68njeMJG_OqJpo4NVbE--9cPyt_AYJLxhJ8/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(signup)
          })
        )
      );
      
      const successful = results.filter(r => r.status === 'fulfilled').length;
      console.log(`[ROLÊ SW] ✅ ${successful}/${signups.length} inscrições processadas`);
      
      // Limpar fila após processamento
      await cache.delete('/newsletter-queue');
    }
  } catch (error) {
    console.error('[ROLÊ SW] Erro no background sync da newsletter:', error);
  }
}

// Processar dados de analytics offline
async function processAnalyticsQueue() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const queueResponse = await cache.match('/analytics-queue');
    
    if (queueResponse) {
      const events = await queueResponse.json();
      console.log(`[ROLÊ SW] Enviando ${events.length} eventos de analytics`);
      
      // Enviar eventos para Google Analytics ou outro serviço
      await Promise.allSettled(
        events.map(event => 
          fetch('/api/analytics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
          })
        )
      );
      
      await cache.delete('/analytics-queue');
    }
  } catch (error) {
    console.error('[ROLÊ SW] Erro no background sync de analytics:', error);
  }
}

// ========== MENSAGENS DO CLIENT ==========
self.addEventListener('message', (event) => {
  console.log('[ROLÊ SW] 💬 Mensagem recebida:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  } else if (event.data && event.data.type === 'CLEAR_CACHE') {
    clearAllCaches().then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
});

// Limpar todos os caches
async function clearAllCaches() {
  try {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map(name => caches.delete(name)));
    console.log('[ROLÊ SW] 🗑️ Todos os caches foram limpos');
  } catch (error) {
    console.error('[ROLÊ SW] Erro ao limpar caches:', error);
  }
}

// ========== PERFORMANCE MONITORING ==========
self.addEventListener('fetch', (event) => {
  // Monitorar performance de requests críticos
  if (event.request.url.includes('estilo.css') || event.request.url.includes('app.js')) {
    const startTime = performance.now();
    
    event.respondWith(
      cacheFirst(event.request)
        .then((response) => {
          const loadTime = performance.now() - startTime;
          console.log(`[ROLÊ SW] ⚡ ${event.request.url.split('/').pop()} carregado em ${loadTime.toFixed(2)}ms`);
          return response;
        })
    );
  }
});

console.log('[ROLÊ SW] 🎪 Service Worker carregado para ROLÊ Entretenimento v' + CACHE_NAME);
