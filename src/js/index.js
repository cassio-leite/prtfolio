
// Inicializa animações com AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Define a duração da animação em milissegundos (1 segundo)
    once: true      // Faz a animação acontecer apenas uma vez (não repete ao rolar novamente)
});

// Função para configurar o comportamento dos links do menu
// Fecha o menu hambúrguer ao clicar em qualquer link do menu
function setupMenuLinks() {
    // Seleciona todos os links dentro da lista de navegação
    const menuLinks = document.querySelectorAll('nav ul li a');

    // Para cada link encontrado...
    menuLinks.forEach(link => {
        // Adiciona um ouvinte de evento de clique
        link.addEventListener('click', () => {
            // Seleciona o input checkbox que controla o menu hambúrguer
            const menuCheckbox = document.getElementById('menu-hamburguer');

            // Verifica se o checkbox existe na página
            if (menuCheckbox) {
                // Desmarca o checkbox para "fechar" o menu
                menuCheckbox.checked = false;
            }
        });
    });
}

// Função para configurar o botão "Carregar mais"
// Mostra os itens ocultos do portfólio ao clicar no botão
function setupLoadMoreButton() {
    // Seleciona o botão com a classe "load-more"
    const loadMoreBtn = document.querySelector(".load-more");

    // Se o botão não for encontrado, a função termina aqui
    if (!loadMoreBtn) return;

    // Adiciona um ouvinte de clique ao botão
    loadMoreBtn.addEventListener("click", () => {
        // Seleciona todos os elementos do portfólio que têm a classe "hidden"
        const hiddenItems = document.querySelectorAll(".portfolio-item.hidden");

        // Para cada item oculto...
        hiddenItems.forEach(item => {
            // Remove a classe "hidden", tornando o item visível
            item.classList.remove("hidden");
        });
    });
}

// Função principal para inicializar todos os comportamentos
function init() {
    // Inicializa os links do menu
    setupMenuLinks();

    // Inicializa o botão "Carregar mais"
    setupLoadMoreButton();
}

// Aguarda o carregamento completo do DOM antes de executar as funções
document.addEventListener("DOMContentLoaded", init);