<article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Reflexão</div>
                        <img src="images/editorial-fomo-cansaco.png" alt="Arte representando cansaço e FOMO nos rolês" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Todo mundo cansado</h3>
                        <p class="app-card-description">FOMO, likes e cansaço: um rolê sem filtro no ar.</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Editorial">📝</span>
                                <span>Editorial</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>5 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.9 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">4.9</span>
                            </div>
                            <a href="https://www.instagram.com/p/DLavpxbv4BT/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ver achadinho</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- Newsletter Section -->
        <section class="app-newsletter-section" role="region" aria-labelledby="newsletter-title">
            <div class="app-newsletter-content">
                <h2 class="app-section-title" id="newsletter-title">Não perca o melhor da Revista ROLÊ</h2>
                <p>Assine a newsletter e receba semanalmente os melhores textos, entrevistas e achadinhos da cena cultural.</p>
                <form class="app-newsletter-form" id="newsletter-form" novalidate>
                    <label for="newsletter-email" class="sr-only">Endereço de e-mail</label>
                    <input type="email" 
                           id="newsletter-email"
                           name="email"
                           class="app-newsletter-input" 
                           placeholder="Seu melhor e-mail" 
                           required 
                           autocomplete="email"
                           aria-describedby="newsletter-disclaimer">
                    <button type="submit" class="app-btn-newsletter" aria-describedby="newsletter-status">
                        <span class="btn-text">Assinar</span>
                        <span class="btn-loading" aria-hidden="true">Enviando...</span>
                    </button>
                </form>
                <p class="newsletter-disclaimer" id="newsletter-disclaimer">
                    <small>Ao assinar, você concorda com nossa <a href="politica.html" rel="noopener">Política de Privacidade</a>.</small>
                </p>
                <div id="newsletter-status" class="sr-only" aria-live="polite" aria-atomic="true"></div>
            </div>
        </section>

        <!-- Footer Ad -->
        <div class="app-ad-container" role="complementary" aria-label="Publicidade">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-2898945215492580"
                 data-ad-slot="1234567890"
                 data-ad-format="horizontal"
                 data-full-width-responsive="true"></ins>
        </div>

        <!-- Footer -->
        <footer class="app-footer" role="contentinfo">
            <div class="app-footer-links">
                © 2025 ROLÊ ENTRETENIMENTO ·
                <a href="politica.html" rel="noopener">Política de Privacidade</a> ·
                <a href="termos-usuario.html" rel="noopener">Termos do Rolezeiro</a> ·
                <a href="termos-organizador.html" rel="noopener">Termos do Organizador</a> ·
                <a href="politica-spam.html" rel="noopener">Política Antispam</a>
            </div>
            <div class="app-social-icons">
                <a href="https://instagram.com/role.ent" target="_blank" rel="noopener noreferrer" aria-label="Seguir ROLÊ no Instagram">
                    <img src="images/instagram.svg" alt="" width="24" height="24" loading="lazy" />
                </a>
                <a href="https://tiktok.com/@role.ent" target="_blank" rel="noopener noreferrer" aria-label="Seguir ROLÊ no TikTok">
                    <img src="images/tiktok.svg" alt="" width="24" height="24" loading="lazy" />
                </a>
                <a href="https://wa.me/5551980704353" target="_blank" rel="noopener noreferrer" aria-label="Falar com ROLÊ no WhatsApp">
                    <img src="images/whatsapp.svg" alt="" width="24" height="24" loading="lazy" />
                </a>
            </div>
        </footer>

        <!-- Bottom Navigation -->
        <nav class="app-bottom-nav" role="navigation" aria-label="Navegação principal">
            <a href="index.html" class="app-nav-item" aria-label="Página inicial" rel="home">
                <svg class="app-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span class="app-nav-label">Home</span>
            </a>
            <a href="vitrine-cultural.html" class="app-nav-item" aria-label="Vitrine cultural">
                <svg class="app-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span class="app-nav-label">Buscar</span>
            </a>
            <a href="revista.html" class="app-nav-item active" aria-label="Revista ROLÊ" aria-current="page">
                <svg class="app-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                <span class="app-nav-label">Revista</span>
            </a>
            <a href="descontos.html" class="app-nav-item" aria-label="Descontos">
                <svg class="app-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
                <span class="app-nav-label">Descontos</span>
            </a>
            <a href="contato.html" class="app-nav-item" aria-label="Contato">
                <svg class="app-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span class="app-nav-label">Contato</span>
            </a>
        </nav>
    </div>

    <!-- Optimized JavaScript with performance monitoring -->
    <script>
        // Optimized JavaScript with performance monitoring
        (function() {
            'use strict';

            // Performance monitoring
            const perfStart = performance.now();
            
            // Optimize for Core Web Vitals
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                        console.log('FID:', entry.processingStart - entry.startTime);
                    }
                }
            });
            
            try {
                observer.observe({entryTypes: ['largest-contentful-paint', 'first-input']});
            } catch (e) {
                // Fallback for older browsers
            }

            // Use requestIdleCallback for non-critical tasks
            const scheduleTask = window.requestIdleCallback || function(cb) { 
                return setTimeout(cb, 1); 
            };

            // Debounce function for performance
            function debounce(func, wait) {
                let timeout;
                return function executedFunction(...args) {
                    const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            }

            // Security: Input sanitization (unchanged)
            function sanitizeInput(str) {
                const div = document.createElement('div');
                div.textContent = str;
                return div.innerHTML;
            }

            // Security: Rate limiting (unchanged)
            const rateLimiter = {
                attempts: new Map(),
                isAllowed: function(key, maxAttempts = 5, windowMs = 300000) {
                    const now = Date.now();
                    const attempts = this.attempts.get(key) || [];
                    const validAttempts = attempts.filter(time => now - time < windowMs);
                    
                    if (validAttempts.length >= maxAttempts) {
                        return false;
                    }
                    
                    validAttempts.push(now);
                    this.attempts.set(key, validAttempts);
                    return true;
                }
            };

            // Efficient event delegation
            function delegateEvent(parent, eventType, selector, handler) {
                parent.addEventListener(eventType, function(e) {
                    const target = e.target.closest(selector);
                    if (target) {
                        handler.call(target, e);
                    }
                }, { passive: true });
            }

            // DOM Ready with performance optimization
            function onDOMReady(callback) {
                if (document.readyState !== 'loading') {
                    scheduleTask(callback);
                } else {
                    document.addEventListener('DOMContentLoaded', callback, { once: true });
                }
            }

            // Critical functionality first
            onDOMReady(function() {
                const perfDOMReady = performance.now();
                console.log(`DOM Ready: ${(perfDOMReady - perfStart).toFixed(2)}ms`);

                // Mobile menu (critical for UX)
                initializeMobileMenu();
                
                // Theme toggle (affects visual stability)
                initializeThemeToggle();
                
                // Newsletter form (high interaction element)
                initializeNewsletterForm();
                
                // Smooth scroll for hero CTA
                initializeHeroButton();

                // Defer non-critical functionality
                scheduleTask(() => {
                    initializeStatsAnimation();
                    initializeCardAnimations();
                    initializeNavigationStates();
                    initializeTouchSupport();
                    
                    console.log(`All JS loaded: ${(performance.now() - perfStart).toFixed(2)}ms`);
                });
            });

            function initializeMobileMenu() {
                const menuToggle = document.querySelector('.menu-toggle');
                const menuClose = document.querySelector('.menu-close');
                const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

                if (!menuToggle || !mobileMenuOverlay) return;

                function openMenu() {
                    mobileMenuOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    menuToggle.setAttribute('aria-expanded', 'true');
                    
                    const firstFocusable = mobileMenuOverlay.querySelector('button, a');
                    firstFocusable?.focus();
                }

                function closeMenu() {
                    mobileMenuOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.focus();
                }

                menuToggle.addEventListener('click', openMenu, { passive: true });
                menuClose?.addEventListener('click', closeMenu, { passive: true });
                
                mobileMenuOverlay.addEventListener('click', function(e) {
                    if (e.target === mobileMenuOverlay) closeMenu();
                }, { passive: true });

                mobileMenuOverlay.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') closeMenu();
                });
            }

            function initializeThemeToggle() {
                const themeToggle = document.querySelector('.theme-toggle-app');
                const root = document.documentElement;

                if (!themeToggle) return;

                // Apply saved theme immediately to prevent flash
                const savedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (savedTheme) {
                    root.setAttribute('data-theme', savedTheme);
                } else if (!systemPrefersDark) {
                    root.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                }

                themeToggle.addEventListener('click', function() {
                    const currentTheme = root.getAttribute('data-theme');
                    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                    
                    root.setAttribute('data-theme', newTheme);
                    localStorage.setItem('theme', newTheme);
                    
                    showToast(`Tema ${newTheme === 'light' ? 'claro' : 'escuro'} ativado`, 'info');
                }, { passive: true });
            }

            function initializeNewsletterForm() {
                const newsletterForm = document.getElementById('newsletter-form');
                if (!newsletterForm) return;

                const emailInput = newsletterForm.querySelector('input[type="email"]');
                const submitBtn = newsletterForm.querySelector('button[type="submit"]');
                const btnText = submitBtn?.querySelector('.btn-text');
                const btnLoading = submitBtn?.querySelector('.btn-loading');
                const statusElement = document.getElementById('newsletter-status');

                // Debounced email validation
                const validateEmail = debounce(function() {
                    const email = this.value.trim();
                    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                    
                    this.setCustomValidity(isValid || !email ? '' : 'Por favor, insira um e-mail válido');
                    this.setAttribute('aria-invalid', isValid || !email ? 'false' : 'true');
                }, 300);

                emailInput?.addEventListener('input', validateEmail);

                newsletterForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    
                    const email = sanitizeInput(emailInput?.value.trim() || '');
                    
                    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                        showStatus('Por favor, insira um e-mail válido.', 'error');
                        emailInput?.focus();
                        return;
                    }

                    const clientIP = 'user-' + (navigator.userAgent + navigator.language).hashCode();
                    if (!rateLimiter.isAllowed(clientIP)) {
                        showStatus('Muitas tentativas. Tente novamente em alguns minutos.', 'error');
                        return;
                    }
                    
                    setLoadingState(true);
                    
                    try {
                        const controller = new AbortController();
                        const timeoutId = setTimeout(() => controller.abort(), 8000);
                        
                        const response = await fetch('https://script.google.com/macros/s/AKfycbx0JqMhtw7RBl7XLqaq6uW4BuxsO6rL68njeMJG_OqJpo4NVbE--9cPyt_AYJLxhJ8/exec', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: new URLSearchParams({ 
                                email: email,
                                timestamp: Date.now(),
                                source: 'revista'
                            }),
                            signal: controller.signal
                        });
                        
                        clearTimeout(timeoutId);
                        
                        if (response.ok) {
                            showStatus(`Sucesso! ${email} foi cadastrado na nossa newsletter.`, 'success');
                            this.reset();
                            emailInput?.setAttribute('aria-invalid', 'false');
                        } else {
                            throw new Error(`HTTP ${response.status}`);
                        }
                    } catch (error) {
                        if (error.name === 'AbortError') {
                            showStatus('Tempo esgotado. Verifique sua conexão.', 'error');
                        } else {
                            showStatus('Erro ao cadastrar. Tente novamente.', 'error');
                        }
                    } finally {
                        setLoadingState(false);
                    }
                });

                function setLoadingState(loading) {
                    if (submitBtn && btnText && btnLoading) {
                        submitBtn.disabled = loading;
                        btnText.style.display = loading ? 'none' : 'inline';
                        btnLoading.style.display = loading ? 'inline' : 'none';
                        submitBtn.setAttribute('aria-busy', loading.toString());
                    }
                }

                function showStatus(message, type) {
                    if (statusElement) {
                        statusElement.textContent = message;
                        statusElement.className = `status-${type}`;
                        statusElement.setAttribute('aria-live', 'assertive');
                    }
                    showToast(message, type);
                }
            }

            function initializeHeroButton() {
                const heroButton = document.querySelector('.app-btn-hero');
                if (!heroButton) return;

                heroButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.getElementById('editorial');
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, { passive: false });
            }

            function initializeStatsAnimation() {
                const observerOptions = {
                    threshold: 0.5,
                    rootMargin: '0px 0px -100px 0px'
                };

                const statsObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                            entry.target.classList.add('counted');
                            animateNumber(entry.target);
                        }
                    });
                }, observerOptions);

                const statNumbers = document.querySelectorAll('.app-stat-number');
                statNumbers.forEach(stat => statsObserver.observe(stat));

                function animateNumber(element) {
                    const target = parseFloat(element.getAttribute('data-target'));
                    let current = 0;
                    const isDecimal = target % 1 !== 0;
                    const increment = isDecimal ? target / 30 : Math.ceil(target / 30);
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        
                        element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
                    }, 50);
                }
            }

            function initializeCardAnimations() {
                const fadeObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    });
                }, { threshold: 0.1 });

                const fadeElements = document.querySelectorAll('.app-recommendation-card, .app-stat-item');
                fadeElements.forEach((element, index) => {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(30px)';
                    element.style.transition = `all 0.6s ease ${index * 0.05}s`;
                    fadeObserver.observe(element);
                });
            }

            function initializeNavigationStates() {
                const navItems = document.querySelectorAll('.app-nav-item');
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                
                navItems.forEach(item => {
                    const href = item.getAttribute('href');
                    if (href === currentPage || (currentPage === 'revista.html' && href === 'revista.html')) {
                        item.classList.add('active');
                        item.setAttribute('aria-current', 'page');
                    }
                });
            }

            function initializeTouchSupport() {
                let startX = 0;
                const scrollContainers = document.querySelectorAll('.app-cards-scroll');
                
                scrollContainers.forEach(scrollContainer => {
                    scrollContainer.addEventListener('touchstart', function(e) {
                        startX = e.touches[0].clientX;
                    }, { passive: true });

                    scrollContainer.addEventListener('touchend', function(e) {
                        const endX = e.changedTouches[0].clientX;
                        const diff = startX - endX;
                        
                        if (Math.abs(diff) > 50) {
                            const scrollAmount = Math.min(300, this.clientWidth * 0.8);
                            this.scrollBy({ 
                                left: diff > 0 ? scrollAmount : -scrollAmount, 
                                behavior: 'smooth' 
                            });
                        }
                    }, { passive: true });
                });
            }

            // Utility functions
            function showToast(message, type = 'info') {
                const existingToast = document.querySelector('.toast');
                if (existingToast) existingToast.remove();

                const toast = document.createElement('div');
                toast.className = `toast ${type}`;
                toast.textContent = message;
                toast.setAttribute('role', 'status');
                toast.setAttribute('aria-live', 'polite');
                
                document.body.appendChild(toast);
                
                requestAnimationFrame(() => {
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                        setTimeout(() => toast.remove(), 300);
                    }, 3000);
                });
            }

            // String hash function for rate limiting
            String.prototype.hashCode = function() {
                let hash = 0;
                for (let i = 0; i < this.length; i++) {
                    const char = this.charCodeAt(i);
                    hash = ((hash << 5) - hash) + char;
                    hash = hash & hash;
                }
                return Math.abs(hash);
            };

            // Initialize Google Ads after page is fully loaded
            window.addEventListener('load', () => {
                scheduleTask(() => {
                    if (window.adsbygoogle) {
                        try {
                            (window.adsbygoogle = window.adsbygoogle || []).push({});
                        } catch (error) {
                            console.warn('AdSense error:', error);
                        }
                    }
                });
            });

        })();
    </script>

    <!-- Non-critical resource loading optimized -->
    <script>
        // Load Google Fonts with font-display: swap
        window.addEventListener('load', function() {
            const fontLink = document.createElement('link');
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
            fontLink.rel = 'stylesheet';
            fontLink.media = 'print';
            fontLink.onload = function() { 
                this.media = 'all';
                document.documentElement.classList.add('fonts-loaded');
            };
            document.head.appendChild(fontLink);
            
            // Preload next likely pages
            const nextPages = ['/vitrine-cultural.html', '/descontos.html'];
            nextPages.forEach(page => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = page;
                document.head.appendChild(link);
            });
        });
    </script>

    <!-- Service Worker for ROLÊ (Progressive Web App) -->
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                        console.log('[ROLÊ] Service Worker registrado com sucesso:', registration.scope);
                        
                        // Verificar por atualizações
                        registration.addEventListener('updatefound', function() {
                            const newWorker = registration.installing;
                            newWorker.addEventListener('statechange', function() {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    // Nova versão disponível
                                    if (confirm('Nova versão disponível! Deseja atualizar?')) {
                                        newWorker.postMessage({ type: 'SKIP_WAITING' });
                                        window.location.reload();
                                    }
                                }
                            });
                        });
                    })
                    .catch(function(error) {
                        console.warn('[ROLÊ] Service Worker não pôde ser registrado:', error);
                    });
                
                // Listener para atualizações do SW
                navigator.serviceWorker.addEventListener('controllerchange', function() {
                    window.location.reload();
                });
            });
        }
    </script>
</body>
</html>text">4.9</span>
                            </div>
                            <a href="#" class="app-card-link">Ler completo</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Lenda</div>
                        <img src="images/editorial-rolezao.png" alt="Imagem nostálgica de uma festa marcante" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Todo mundo já foi num rolê bom</h3>
                        <p class="app-card-description">Rolêzão: quando vira lenda, não só festa.</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Editorial">📝</span>
                                <span>Editorial</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>4 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="5 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">5.0</span>
                            </div>
                            <a href="https://www.instagram.com/p/DLlKtmDvjnV/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ler completo</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- Ad Container -->
        <div class="app-ad-container" role="complementary" aria-label="Publicidade">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-2898945215492580"
                 data-ad-slot="1234567890"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        </div>

        <!-- POSFÁCIO -->
        <div class="app-section-header">
            <h2 class="app-section-title">POSFÁCIO</h2>
            <a href="#" class="app-see-all" aria-label="Ver todos os posfácios">Ver todos</a>
        </div>

        <div class="app-recommendations">
            <div class="app-cards-scroll">
                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Manifesto</div>
                        <img src="images/posfacio-arte-nao-e-favor.png" alt="Frase arte não é favor em fundo gráfico" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Arte não é favor</h3>
                        <p class="app-card-description">Curte o rolê? Então fortalece quem faz a cena!</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Posfácio">✍️</span>
                                <span>Posfácio</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>3 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.9 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">4.9</span>
                            </div>
                            <a href="https://www.instagram.com/p/DKUvi7ftej4/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ler completo</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Política</div>
                        <img src="images/posfacio-corpo-danca.png" alt="Imagem de corpo dançando em cena política" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Subir no palco é um ato político</h3>
                        <p class="app-card-description">O palco também é trincheira. Vem entender por quê.</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Posfácio">✍️</span>
                                <span>Posfácio</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>4 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.7 estrelas">⭐⭐⭐⭐</div>
                                <span class="rating-text">4.7</span>
                            </div>
                            <a href="https://www.instagram.com/p/DKpNipHuHxT/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ler completo</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Música</div>
                        <img src="images/posfacio-som-autoral.png" alt="Imagem crítica ao cover e valorização do som autoral" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">O FIM DO COVER: QUEREMOS SOM AUTORAL</h3>
                        <p class="app-card-description">Mesmas músicas em todo rolê? Hora de mudar o som.</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Posfácio">✍️</span>
                                <span>Posfácio</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>5 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.8 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">4.8</span>
                            </div>
                            <a href="https://www.instagram.com/p/DK76By9Pa6v/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ler completo</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Resistência</div>
                        <img src="images/posfacio-palco-politico.png" alt="Dança como forma de resistência política" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">O que teu corpo diz quando dança?</h3>
                        <p class="app-card-description">Se tem dança, tem revolução no corpo.</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Posfácio">✍️</span>
                                <span>Posfácio</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>6 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.9 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">4.9</span>
                            </div>
                            <a href="https://www.instagram.com/p/DLKu8KKO_xh/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ler completo</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Orgulho</div>
                        <img src="images/posfacio-orgulho-rebeliao.png" alt="Orgulho LGBTQIAP+ como rebelião cultural" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Não foi por convite. Foi por rebelião.</h3>
                        <p class="app-card-description">Orgulho é rebelião: leia o novo Posfácio do ROLÊ!</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Posfácio">✍️</span>
                                <span>Posfácio</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>4 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="5 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">5.0</span>
                            </div>
                            <a href="https://www.instagram.com/p/DLdGOdOvozf/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ler completo</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- DICAS DO ROLÊ -->
        <div class="app-section-header">
            <h2 class="app-section-title">DICAS DO ROLÊ</h2>
            <a href="#" class="app-see-all" aria-label="Ver todas as dicas">Ver todas</a>
        </div>

        <div class="app-recommendations">
            <div class="app-cards-scroll">
                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Segurança</div>
                        <img src="images/dica-celular-no-role.png" alt="Dica para levar o celular no rolê com segurança" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Celular no rolê: como levar com segurança</h3>
                        <p class="app-card-description">Celular no rolê: leve com estilo e segurança!</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Dica">💡</span>
                                <span>Dica</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>2 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.8 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">4.8</span>
                            </div>
                            <a href="https://www.instagram.com/p/DKcwM01vOHG/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ver dica</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Glossário</div>
                        <img src="images/dica-dicionario-rolezeiro.png" alt="Dicionário visual com gírias da cena" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Dicionário rolezeiro</h3>
                        <p class="app-card-description">Gírias que só quem é da cena entende. Vem aprender!</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Dica">💡</span>
                                <span>Dica</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>3 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.7 estrelas">⭐⭐⭐⭐</div>
                                <span class="rating-text">4.7</span>
                            </div>
                            <a href="#" class="app-card-link">Ler completo</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Lifestyle</div>
                        <img src="images/dica-role-no-meio-da-semana.png" alt="Arte incentivando rolês em dias úteis" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Rolê no meio da semana? Tá doido?</h3>
                        <p class="app-card-description">Rolê no meio da semana? Vem ver por que sim!</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Dica">💡</span>
                                <span>Dica</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>3 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.9 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">4.9</span>
                            </div>
                            <a href="https://www.instagram.com/p/DLAXK7hOqyI/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ver dica</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Economia</div>
                        <img src="images/dica-ta-caro.png" alt="Arte crítica sobre preços altos nos rolês" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Tá caro? Tá mesmo.</h3>
                        <p class="app-card-description">Por que o rolê tá caro? Descubra e valorize a cena.</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Dica">💡</span>
                                <span>Dica</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>4 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.5 estrelas">⭐⭐⭐⭐</div>
                                <span class="rating-text">4.5</span>
                            </div>
                            <a href="https://www.instagram.com/p/DLaMMB2uFzF/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ver dica</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- FALA, ROLÊ -->
        <div class="app-section-header">
            <h2 class="app-section-title">FALA, ROLÊ</h2>
            <a href="#" class="app-see-all" aria-label="Ver todas as entrevistas">Ver todas</a>
        </div>

        <div class="app-recommendations">
            <div class="app-cards-scroll">
                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Entrevista</div>
                        <img src="images/fala-quem-faz-a-cena.png" alt="Chamada para conhecer artistas da cena cultural" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Você conhece quem faz a cena?</h3>
                        <p class="app-card-description">Quem faz o rolê ferver? Descubra no FALA, ROLÊ!</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Entrevista">🎤</span>
                                <span>Entrevista</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>8 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.9 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">4.9</span>
                            </div>
                            <a href="https://www.instagram.com/p/DKnSfFevJOO/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ver entrevista</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Artista</div>
                        <img src="images/fala-jon-soares.png" alt="Retrato do artista Jon Soares" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Jon Soares</h3>
                        <p class="app-card-description">Jon Soares no Fala, ROLÊ: som que conta histórias.</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Entrevista">🎤</span>
                                <span>Entrevista</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>12 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="5 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">5.0</span>
                            </div>
                            <a href="https://www.instagram.com/p/DLV11mSv0Wl/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ver entrevista</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- ROLÊ.BPM -->
        <div class="app-section-header">
            <h2 class="app-section-title">ROLÊ.BPM</h2>
            <a href="#" class="app-see-all" aria-label="Ver todos os artigos de música">Ver todos</a>
        </div>

        <div class="app-recommendations">
            <div class="app-cards-scroll">
                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Techno</div>
                        <img src="images/bpm-techno-resistencia.png" alt="Arte sobre o techno como resistência" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Quem tem medo do techno?</h3>
                        <p class="app-card-description">Techno é resistência: você sabe de onde veio?</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="BPM">🎵</span>
                                <span>BPM</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>6 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.8 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">4.8</span>
                            </div>
                            <a href="https://www.instagram.com/p/DLFzcKQOfzP/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ver artigo</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Funk</div>
                        <img src="images/bpm-funk-e-cultura.png" alt="Funk retratado como cultura e identidade" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">FUNK É CULTURA, SIM.</h3>
                        <p class="app-card-description">Do asfalto pro topo, sem pedir licença. Funk é cultura!</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="BPM">🎵</span>
                                <span>BPM</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>7 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="5 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">5.0</span>
                            </div>
                            <a href="https://www.instagram.com/p/DLV11mSv0Wl/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ver artigo</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- ACHADINHOS -->
        <div class="app-section-header">
            <h2 class="app-section-title">ACHADINHOS</h2>
            <a href="#" class="app-see-all" aria-label="Ver todos os achadinhos">Ver todos</a>
        </div>

        <div class="app-recommendations">
            <div class="app-cards-scroll">
                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Underground</div>
                        <img src="images/achadinho-floripa-segredos.png" alt="Segredos dos rolês underground em Florianópolis" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Qual é o segredo dos rolês de Floripa?</h3>
                        <p class="app-card-description">Achadinhos de Floripa que o Google não mostra!</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Achadinho">🔍</span>
                                <span>Achadinho</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>3 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.9 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Security Headers -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://pagead2.googlesyndication.com https://script.google.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://script.google.com https://pagead2.googlesyndication.com; object-src 'none'; base-uri 'self'; form-action 'self' https://script.google.com;">
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta http-equiv="X-Frame-Options" content="DENY">
    <meta http-equiv="X-XSS-Protection" content="1; mode=block">
    <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
    <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), payment=()">
    
    <!-- Resource Hints Otimizados -->
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossorigin>
    <link rel="preconnect" href="https://script.google.com" crossorigin>
    
    <!-- Preload Critical Resources -->
    <link rel="preload" href="images/logo-role.png" as="image" type="image/png" crossorigin>
    <link rel="preload" href="estilo.css" as="style">
    <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" as="font" type="font/woff2" crossorigin>
    
    <!-- DNS Prefetch -->
    <link rel="dns-prefetch" href="//instagram.com">
    <link rel="dns-prefetch" href="//tiktok.com">
    <link rel="dns-prefetch" href="//wa.me">
    
    <!-- SEO Meta Tags -->
    <meta name="keywords" content="revista, editorial, cultura, música, arte, entretenimento, rolê">
    <meta name="description" content="Revista ROLÊ: Editorial, críticas, poesia e provocações da cena cultural brasileira">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="author" content="ROLÊ Entretenimento">
    <link rel="canonical" href="https://roleentretenimento.com/revista.html">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Revista ROLÊ - Editorial e Cultura Independente">
    <meta property="og:description" content="Textos que refletem a cena noturna, com críticas, poesia e provocações do ROLÊ">
    <meta property="og:image" content="https://roleentretenimento.com/images/editorial-madrugada.png">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://roleentretenimento.com/revista.html">
    <meta property="og:site_name" content="ROLÊ Entretenimento">
    <meta property="og:locale" content="pt_BR">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Revista ROLÊ - Editorial e Cultura Independente">
    <meta name="twitter:description" content="Textos que refletem a cena noturna, com críticas, poesia e provocações do ROLÊ">
    <meta name="twitter:image" content="https://roleentretenimento.com/images/editorial-madrugada.png">
    
    <!-- Cache Control -->
    <meta http-equiv="Cache-Control" content="public, max-age=3600, stale-while-revalidate=86400">
    <meta http-equiv="Pragma" content="cache">
    
    <!-- Critical Theme Script -->
    <script>
        // Prevent FOUC and apply theme immediately
        (function() {
            'use strict';
            const theme = localStorage.getItem('theme');
            if (theme === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        })();
    </script>
    
    <!-- Optimized Google Ads Loading -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2898945215492580" crossorigin="anonymous"></script>
    <script>
        // Initialize ads after critical content loads
        window.addEventListener('load', function() {
            setTimeout(function() {
                try {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                } catch(e) {
                    console.warn('AdSense loading delayed');
                }
            }, 1000);
        });
    </script>
    
    <title>Revista ROLÊ | Editorial e Cultura Independente</title>
    <link rel="icon" href="images/favicon.png" type="image/png" sizes="32x32" />
    <link rel="apple-touch-icon" href="images/favicon.png" sizes="180x180" />
    
    <!-- Critical CSS Inline - Otimizado para PageSpeed -->
    <style>
        /* Critical above-the-fold styles - Minified */
        :root {
            --bg-primary: #0D0D0D;
            --bg-secondary: #1A1A1A;
            --bg-card: #1F1F1F;
            --text-primary: #FFFFFF;
            --text-secondary: #A0A0A0;
            --text-muted: #6B7280;
            --accent-purple: #8B5CF6;
            --accent-pink: #EC4899;
            --border-color: #2A2A2A;
            --gradient-primary: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
            --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            --transition-normal: 0.3s ease;
            --font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
        }
        
        :root[data-theme="light"] {
            --bg-primary: #FFFFFF;
            --bg-secondary: #F8F9FA;
            --bg-card: #FFFFFF;
            --text-primary: #1F2937;
            --text-secondary: #6B7280;
            --border-color: #E5E7EB;
        }
        
        *,::before,::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html {
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
        }
        
        body {
            font-family: var(--font-family);
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            font-size: 16px;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            will-change: auto;
        }
        
        .app-container {
            width: 100%;
            background: var(--bg-primary);
            min-height: 100vh;
            position: relative;
            contain: layout style paint;
        }
        
        .app-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: rgba(13, 13, 13, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
            contain: layout style paint;
        }
        
        :root[data-theme="light"] .app-header {
            background: rgba(255, 255, 255, 0.95);
        }
        
        .app-header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 60px 20px 20px 20px;
        }
        
        @media (min-width: 769px) {
            .app-header-content {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px 40px;
            }
        }
        
        .app-logo-img {
            height: 40px;
            width: auto;
            max-width: 120px;
            object-fit: contain;
            content-visibility: auto;
        }
        
        @media (min-width: 769px) {
            .app-logo-img {
                height: 50px;
                max-width: 150px;
            }
        }
        
        /* Hero section critical styles */
        .app-hero-section {
            text-align: center;
            padding: 24px 20px;
            margin-bottom: 16px;
            contain: layout style paint;
        }
        
        @media (min-width: 769px) {
            .app-hero-section {
                max-width: 1200px;
                margin: 0 auto 32px auto;
                padding: 40px 40px 32px 40px;
            }
        }
        
        .app-hero-title {
            font-weight: 700;
            margin-bottom: 16px;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
            font-size: clamp(1.75rem, 5vw, 2.25rem);
            contain: layout;
        }
        
        @media (min-width: 769px) {
            .app-hero-title {
                font-size: clamp(2.5rem, 4vw, 4rem);
                margin-bottom: 24px;
            }
        }
        
        .app-hero-description {
            line-height: 1.5;
            margin-bottom: 24px;
            color: var(--text-secondary);
            font-size: 1rem;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
        }
        
        @media (min-width: 769px) {
            .app-hero-description {
                font-size: 1.25rem;
                max-width: 600px;
                margin-bottom: 32px;
            }
        }
        
        .app-btn-hero {
            background: var(--gradient-primary);
            color: white;
            padding: 14px 28px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            display: inline-block;
            border: none;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            min-height: 44px;
            line-height: 1;
            will-change: transform;
        }
        
        @media (min-width: 769px) {
            .app-btn-hero {
                padding: 16px 32px;
                font-size: 1rem;
            }
        }
        
        /* Loading optimization */
        img {
            height: auto;
            max-width: 100%;
        }
        
        /* Prevent layout shifts */
        .app-stat-item {
            min-height: 100px;
        }
        
        .app-recommendation-card {
            min-height: 300px;
        }
        
        /* Performance optimizations */
        .app-cards-scroll {
            will-change: scroll-position;
        }
        
        /* Hide non-critical content initially */
        .app-newsletter-section,
        .app-footer,
        .app-bottom-nav {
            content-visibility: auto;
            contain-intrinsic-size: 200px;
        }
        
        /* Skeleton loading */
        .skeleton {
            background: linear-gradient(90deg, var(--bg-card) 25%, var(--border-color) 50%, var(--bg-card) 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
    </style>
    
    <!-- Optimized CSS Loading with Media Queries -->
    <link rel="preload" href="estilo.css" as="style" onload="this.onload=null;this.rel='stylesheet';this.media='all'">
    <noscript><link rel="stylesheet" href="estilo.css"></noscript>
    
    <!-- Lazy Load Fonts -->
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"></noscript>
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Revista ROLÊ",
        "alternateName": "ROLÊ Entretenimento",
        "url": "https://roleentretenimento.com/revista.html",
        "description": "Editorial, críticas, poesia e provocações da cena cultural brasileira",
        "publisher": {
            "@type": "Organization",
            "name": "ROLÊ Entretenimento",
            "logo": "https://roleentretenimento.com/images/logo-role.png"
        },
        "mainEntity": {
            "@type": "Magazine",
            "name": "Revista ROLÊ",
            "issn": "",
            "genre": ["Cultura", "Arte", "Música", "Entretenimento"]
        }
    }
    </script>
    
    <noscript>
        <div class="no-js-message">
            Para uma melhor experiência, ative o JavaScript no seu navegador.
        </div>
    </noscript>
</head>

<body>
    <div class="app-container">
        <!-- Header -->
        <header class="app-header">
            <div class="app-header-content">
                <a href="index.html" class="app-logo-container" rel="home" aria-label="Ir para página inicial">
                    <img src="images/logo-role.png" alt="ROLÊ Entretenimento" class="app-logo-img" width="120" height="40" loading="eager" />
                </a>
                <div class="app-header-actions">
                    <!-- Desktop Menu (apenas desktop) -->
                    <nav class="desktop-menu" role="navigation" aria-label="Menu principal">
                        <a href="index.html" rel="home">Home</a>
                        <a href="revista.html" class="active" aria-current="page">Revista</a>
                        <a href="vitrine-cultural.html">Vitrine Cultural</a>
                        <a href="descontos.html">Descontos</a>
                        <a href="contato.html">Contato</a>
                        <a href="quem-somos.html">Quem Somos</a>
                    </nav>

                    <!-- Mobile Menu Button (apenas mobile) -->
                    <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobileMenuOverlay">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    
                    <!-- Theme Toggle -->
                    <button class="theme-toggle-app" aria-label="Alternar tema claro/escuro">
                        <img src="images/theme-toggle.gif" alt="" width="24" height="24" loading="lazy" />
                    </button>
                </div>
            </div>
        </header>

        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay" id="mobileMenuOverlay" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
            <nav class="mobile-menu" role="navigation">
                <div class="mobile-menu-header">
                    <img src="images/logo-role.png" alt="ROLÊ" class="mobile-menu-logo" width="100" height="32" loading="lazy" />
                    <button class="menu-close" aria-label="Fechar menu">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul class="mobile-menu-list" id="mobile-menu-title">
                    <li><a href="index.html" class="mobile-menu-link" rel="home">🏠 Página Inicial</a></li>
                    <li><a href="revista.html" class="mobile-menu-link active" aria-current="page">📰 Revista ROLÊ</a></li>
                    <li><a href="vitrine-cultural.html" class="mobile-menu-link">🎨 Vitrine Cultural</a></li>
                    <li><a href="descontos.html" class="mobile-menu-link">💰 Descontos</a></li>
                    <li><a href="contato.html" class="mobile-menu-link">📞 Contato</a></li>
                    <li><a href="quem-somos.html" class="mobile-menu-link">ℹ️ Quem Somos</a></li>
                </ul>
                <div class="mobile-menu-footer">
                    <div class="mobile-menu-social">
                        <a href="https://instagram.com/role.ent" target="_blank" rel="noopener noreferrer" aria-label="Seguir no Instagram">
                            <img src="images/instagram.svg" alt="Instagram" width="20" height="20" loading="lazy" />
                        </a>
                        <a href="https://tiktok.com/@role.ent" target="_blank" rel="noopener noreferrer" aria-label="Seguir no TikTok">
                            <img src="images/tiktok.svg" alt="TikTok" width="20" height="20" loading="lazy" />
                        </a>
                        <a href="https://wa.me/5551980704353" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
                            <img src="images/whatsapp.svg" alt="WhatsApp" width="20" height="20" loading="lazy" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Hero Section -->
        <section class="app-hero-section">
            <h1 class="app-hero-title">REVISTA ROLÊ</h1>
            <p class="app-hero-description">
                Textos que refletem a cena noturna, com críticas, poesia e provocações do ROLÊ
            </p>
            <div class="app-hero-cta">
                <a href="#editorial" class="app-btn-hero">Descubra nossos textos</a>
            </div>
        </section>

        <!-- Stats Section -->
        <div class="app-section-header">
            <h2 class="app-section-title">REVISTA EM NÚMEROS</h2>
        </div>
        <div class="app-stats-grid">
            <div class="app-stat-item">
                <span class="app-stat-number" data-target="25">0</span>
                <span class="app-stat-label">Artigos publicados</span>
            </div>
            <div class="app-stat-item">
                <span class="app-stat-number" data-target="1.5">0</span>
                <span class="app-stat-label">Milhões de leitores</span>
            </div>
            <div class="app-stat-item">
                <span class="app-stat-number" data-target="6">0</span>
                <span class="app-stat-label">Seções ativas</span>
            </div>
            <div class="app-stat-item">
                <span class="app-stat-number" data-target="15">0</span>
                <span class="app-stat-label">Entrevistas realizadas</span>
            </div>
        </div>

        <!-- EDITORIAL -->
        <div class="app-section-header" id="editorial">
            <h2 class="app-section-title">EDITORIAL</h2>
            <a href="#" class="app-see-all" aria-label="Ver todos os editoriais">Ver todos</a>
        </div>

        <div class="app-recommendations">
            <div class="app-cards-scroll">
                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Destaque</div>
                        <img src="images/editorial-madrugada.png" alt="Ilustração sobre a perda da madrugada nas cidades" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">As cidades já foram noturnas</h3>
                        <p class="app-card-description">Sua cidade perdeu a madrugada? Descubra quem resiste na cena noturna brasileira!</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Editorial">📝</span>
                                <span>Editorial</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>5 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="5 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">5.0</span>
                            </div>
                            <a href="editorial/as-cidades-ja-foram-noturnas.html" class="app-card-link" rel="bookmark">Ler completo</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Popular</div>
                        <img src="images/editorial-dj-autor.png" alt="Arte de DJ como autor da pista" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">DJs são novos autores</h3>
                        <p class="app-card-description">Quem escreve tua noite é o DJ. Já agradeceu hoje?</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Editorial">📝</span>
                                <span>Editorial</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>4 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.9 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">4.9</span>
                            </div>
                            <a href="editorial/ja-agradeceu-o-dj-que-escreveu-a-historia-da-tua-noite.html" class="app-card-link" rel="bookmark">Ler completo</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Novo</div>
                        <img src="images/editorial-teatros-vazios.png" alt="Arte com cadeiras vazias representando o teatro" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Por que os teatros estão vazios</h3>
                        <p class="app-card-description">Teatro na era do feed: presença ou performance?</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Editorial">📝</span>
                                <span>Editorial</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>6 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.6 estrelas">⭐⭐⭐⭐</div>
                                <span class="rating-text">4.6</span>
                            </div>
                            <a href="https://www.instagram.com/p/DK0JECQvjlS/" target="_blank" rel="noopener noreferrer" class="app-card-link">Ver dica</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Tendência</div>
                        <img src="images/editorial-look-fala.png" alt="Ilustração de look expressivo como identidade" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">E se teu look falasse por ti?</h3>
                        <p class="app-card-description">Estética é política: o look também fala!</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Editorial">📝</span>
                                <span>Editorial</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>3 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.8 estrelas">⭐⭐⭐⭐⭐</div>
                                <span class="rating-text">4.8</span>
                            </div>
                            <a href="#" class="app-card-link">Ler completo</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div class="app-card-badge">Debate</div>
                        <img src="images/editorial-te-chamam-de-atracao.png" alt="Imagem de artista como destaque da festa" loading="lazy" width="280" height="140" decoding="async" />
                    </div>
                    <div class="app-card-content">
                        <h3 class="app-card-title">Te chamam de atração...</h3>
                        <p class="app-card-description">Quem faz a noite vibrar também precisa viver dela.</p>
                        <div class="app-card-info">
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Editorial">📝</span>
                                <span>Editorial</span>
                            </div>
                            <div class="app-card-info-item">
                                <span role="img" aria-label="Tempo de leitura">⏱️</span>
                                <span>7 min</span>
                            </div>
                        </div>
                        <div class="app-card-footer">
                            <div class="app-card-rating">
                                <div class="stars" aria-label="4.6 estrelas">⭐⭐⭐⭐</div>
                                <span class="rating-text">4.6</span>
                            </div>
                            <a href="#" class="app-card-link">Ler completo</a>
                        </div>
                    </div>
                </article>

                <article class="app-recommendation-card">
                    <div class="app-card-image">
                        <div
