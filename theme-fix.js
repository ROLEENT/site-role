/* ========== THEME-FIX.JS - APENAS CORREÇÃO DO TEMA ========== */
/* Script minimalista - não modifica estrutura das páginas */

(function() {
    'use strict';
    
    // 1. CARREGAR TEMA AO INICIALIZAR
    function loadTheme() {
        try {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        } catch(e) {
            console.warn('Erro ao carregar tema:', e);
        }
    }
    
    // 2. CORRIGIR TOGGLE DO TEMA (SEM ALTERAR ESTRUTURA)
    function fixThemeToggle() {
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (!themeBtn) return;
        
        // Remover listeners antigos
        const newBtn = themeBtn.cloneNode(true);
        themeBtn.parentNode.replaceChild(newBtn, themeBtn);
        
        // Adicionar listener corrigido
        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            try {
                const html = document.documentElement;
                const currentTheme = html.getAttribute('data-theme');
                
                if (currentTheme === 'light') {
                    // Mudar para escuro
                    html.removeAttribute('data-theme');
                    localStorage.setItem('theme', 'dark');
                } else {
                    // Mudar para claro
                    html.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                }
            } catch(e) {
                console.warn('Erro no toggle do tema:', e);
            }
        });
    }
    
    // 3. INICIALIZAR
    function init() {
        // Carregar tema imediatamente
        loadTheme();
        
        // Aguardar DOM se necessário
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fixThemeToggle);
        } else {
            fixThemeToggle();
        }
    }
    
    // Executar
    init();
    
})();
