/* ========== FIXES.JS - CORREÇÕES GLOBAIS ========== */
/* Aplicar em todas as páginas */

(function() {
    'use strict';
    
    // 1. CORREÇÃO DO TEMA - INICIALIZAÇÃO
    function initTheme() {
        try {
            const theme = localStorage.getItem('theme');
            if (theme === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        } catch(e) {
            console.warn('Theme loading failed:', e);
        }
    }
    
    // 2. CORREÇÃO DO TOGGLE DO TEMA
    function fixThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle-btn');
        const root = document.documentElement;

        if (themeToggle) {
            // Remove listeners existentes
            themeToggle.replaceWith(themeToggle.cloneNode(true));
            const newToggle = document.getElementById('theme-toggle-btn');
            
            newToggle.addEventListener('click', function(e) {
                e.preventDefault();
                try {
                    const currentTheme = root.getAttribute('data-theme');
                    if (currentTheme === 'light') {
                        root.removeAttribute('data-theme');
                        localStorage.setItem('theme', 'dark');
                    } else {
                        root.setAttribute('data-theme', 'light');
                        localStorage.setItem('theme', 'light');
                    }
                } catch(e) {
                    console.warn('Theme toggle failed:', e);
                }
            });
        }
    }
    
    // 3. BOTTOM NAV - ADICIONAR DESTAQUES E REMOVER CONTATO
    function fixBottomNav() {
        const bottomNav = document.querySelector('.app-bottom-nav');
        if (!bottomNav) return;
        
        // Verificar se já tem destaques
        const destaquesLink = bottomNav.querySelector('a[href="destaques.html"]');
        if (destaquesLink) return; // Já foi corrigido
        
        // Remover contato se existir
        const contatoLink = bottomNav.querySelector('a[href="contato.html"]');
        if (contatoLink) {
            contatoLink.remove();
        }
        
        // Adicionar destaques antes da revista
        const revistaLink = bottomNav.querySelector('a[href="revista.html"]');
        if (revistaLink) {
            const destaquesHtml = `
                <a href="destaques.html" class="app-nav-item" aria-label="Destaques da semana">
                    <svg class="app-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                    <span class="app-nav-label">Destaques</span>
                </a>
            `;
            revistaLink.insertAdjacentHTML('beforebegin', destaquesHtml);
        }
    }
    
    // 4. MARCAR PÁGINA ATIVA NO BOTTOM NAV
    function setActiveBottomNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const bottomNavLinks = document.querySelectorAll('.app-bottom-nav .app-nav-item');
        
        bottomNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage || 
                (currentPage === 'index.html' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }
    
    // INICIALIZAR TUDO
    function applyFixes() {
        initTheme();
        
        // Aguardar DOM carregar
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                fixThemeToggle();
                fixBottomNav();
                setActiveBottomNav();
            });
        } else {
            fixThemeToggle();
            fixBottomNav();
            setActiveBottomNav();
        }
    }
    
    // Aplicar fixes
    applyFixes();
    
    console.log('🎯 Global fixes applied');
})();
