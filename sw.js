// Service Worker para ROLÊ Entretenimento
const CACHE_NAME = 'role-v1.0.0';
const STATIC_CACHE = 'role-static-v1';
const DYNAMIC_CACHE = 'role-dynamic-v1';

// Recursos para cache estático
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/estilo.css',
  '/images/logo-role.png',
  '/images/favicon.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
];

// Recursos para cache dinâmico
const CACHE_DYNAMIC_LIMIT = 50;

// ========== INSTALAÇÃO ==========
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Cacheando assets estáticos');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Instalação completa');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Erro na instalação:', error);
      })
  );
});

// ========== ATIVAÇÃO ==========
self.addEventListener('activate', (event) => {
  console.log('[SW] Ativando...');
  
  event.waitUntil(
    Promise.all([
      // Limpar caches antigos
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Removendo cache antigo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Assumir controle imediatamente
      self.clients.claim()
    ])
  );
});

// ========== INTERCEPTAÇÃO DE REQUESTS ==========
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  
  // Pular requests não HTTP/HTTPS
  if (!event.request.url.startsWith('http')) {
    return;
  }
  
  // Estratégia cache-first para assets estáticos
  if (STATIC_ASSETS.some(asset => event.request.url.includes(asset))) {
    event.respondWith(cacheFirst(event.request));
    return;
  }
  
  // Estratégia network-first para páginas HTML
  if (event.request.destination === 'document') {
    event.respondWith(networkFirst(event.request));
    return;
  }
  
  // Estratégia cache-first para imagens
  if (event.request.destination === 'image') {
    event.respondWith(cacheFirst(event.request));
    return;
  }
  
  // Network-first para todo o resto
  event.respondWith(networkFirst(event.request));
});

// ========== ESTRATÉGIAS DE CACHE ==========

// Cache First: Procura no cache primeiro, depois na network
function cacheFirst(request) {
  return caches.match(request)
    .then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      
      return fetch(request)
        .then((networkResponse) => {
          // Cachear a resposta se for bem-sucedida
          if (networkResponse.ok) {
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
          // Fallback para offline
          if (request.destination === 'document') {
            return caches.match('/offline.html');
          }
        });
    });
}

// Network First: Tenta network primeiro, depois cache
function networkFirst(request) {
  return fetch(request)
    .then((networkResponse) => {
      // Cachear apenas respostas bem-sucedidas
      if (networkResponse.ok) {
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
      // Fallback para cache se network falhar
      return caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // Fallback final para página offline
          if (request.destination === 'document') {
            return caches.match('/offline.html');
          }
          
          // Resposta 404 para outros recursos
          return new Response('Recurso não disponível offline', {
            status: 404,
            statusText: 'Not Found'
          });
        });
    });
}

// ========== UTILIDADES ==========

// Limitar tamanho do cache dinâmico
function limitCacheSize(cacheName, maxItems) {
  caches.open(cacheName)
    .then((cache) => {
      cache.keys()
        .then((items) => {
          if (items.length > maxItems) {
            // Remover itens mais antigos
            const itemsToDelete = items.slice(0, items.length - maxItems);
            itemsToDelete.forEach((item) => {
              cache.delete(item);
            });
          }
        });
    });
}

// ========== PUSH NOTIFICATIONS ==========
self.addEventListener('push', (event) => {
  console.log('[SW] Push recebido');
  
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body || 'Novo evento disponível!',
    icon: '/images/icon-192.png',
    badge: '/images/badge-72.png',
    image: data.image,
    data: {
      url: data.url || '/'
    },
    actions: [
      {
        action: 'view',
        title: 'Ver evento',
        icon: '/images/action-view.png'
      },
      {
        action: 'dismiss',
        title: 'Dispensar',
        icon: '/images/action-dismiss.png'
      }
    ],
    requireInteraction: true,
    vibrate: [200, 100, 200]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'ROLÊ', options)
  );
});

// ========== CLICK EM NOTIFICAÇÕES ==========
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notificação clicada');
  
  event.notification.close();
  
  if (event.action === 'view' || !event.action) {
    const url = event.notification.data.url || '/';
    
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then((clientList) => {
          // Verificar se já existe uma janela aberta
          for (const client of clientList) {
            if (client.url.includes(url) && 'focus' in client) {
              return client.focus();
            }
          }
          
          // Abrir nova janela se não existir
          if (clients.openWindow) {
            return clients.openWindow(url);
          }
        })
    );
  }
});

// ========== BACKGROUND SYNC ==========
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'newsletter-signup') {
    event.waitUntil(
      // Processar inscrições pendentes da newsletter
      processNewsletterQueue()
    );
  }
});

// Processar fila de newsletter offline
async function processNewsletterQueue() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const pendingSignups = await cache.match('/newsletter-queue');
    
    if (pendingSignups) {
      const signups = await pendingSignups.json();
      
      for (const signup of signups) {
        try {
          await fetch('/api/newsletter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signup)
          });
        } catch (error) {
          console.error('[SW] Erro ao processar signup:', error);
        }
      }
      
      // Limpar fila após processamento
      await cache.delete('/newsletter-queue');
    }
  } catch (error) {
    console.error('[SW] Erro no background sync:', error);
  }
}

// ========== ATUALIZAÇÕES ==========
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('[SW] Service Worker carregado para ROLÊ Entretenimento 🎪');
