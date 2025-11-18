document.addEventListener('DOMContentLoaded', () => {
    // 1. Função para adicionar decoração (corações e Kuromi)
    const decorContainer = document.querySelector('.background-decor');
    const decorItems = ['❤️', '🖤', '💜', 'Kuromi'];
    
    function createDecor() {
        // Escolhe um item de decoração (coração ou Kuromi)
        const itemIndex = Math.floor(Math.random() * decorItems.length);
        const decor = document.createElement('span');
        decor.textContent = decorItems[itemIndex];
        
        // Define a classe CSS correta
        decor.className = itemIndex < 3 ? 'decor-item' : 'decor-kuromi';
        
        // Posicionamento aleatório e animação
        decor.style.left = `${Math.random() * 100}vw`;
        decor.style.top = `${100 + Math.random() * 50}vh`; // Começa abaixo da tela
        decor.style.animationDuration = `${10 + Math.random() * 10}s`;
        decor.style.animationDelay = `-${Math.random() * 10}s`; // Para iniciar em posições diferentes
        
        decorContainer.appendChild(decor);

        // Remove após a animação para limpar o DOM
        setTimeout(() => {
            decor.remove();
        }, 30000);
    }

    // Adiciona uma nova decoração a cada 500ms
    setInterval(createDecor, 500);

    // Adiciona algumas decorações iniciais para preencher o fundo
    for (let i = 0; i < 30; i++) {
        createDecor();
    }


    // 2. Funcionalidade de persistência/edição da mensagem
    const messageText = document.getElementById('messageText');
    const saveInfo = document.getElementById('saveInfo');
    const localStorageKey = 'anniversaryMessage';

    // Carrega a mensagem salva ao iniciar
    const savedMessage = localStorage.getItem(localStorageKey);
    if (savedMessage) {
        messageText.innerHTML = savedMessage;
    }

    // Define a função de salvar (chamada pelo botão no HTML)
    window.saveMessage = function() {
        const currentMessage = messageText.innerHTML;
        localStorage.setItem(localStorageKey, currentMessage);
        
        // Feedback visual
        saveInfo.textContent = '✅ Mensagem salva com sucesso!';
        setTimeout(() => {
            saveInfo.textContent = '';
        }, 3000);
    }

    // Dica para a sua namorada:
    // Se ela abrir a página, editar a mensagem e clicar em "Salvar",
    // a mensagem editada permanecerá lá na próxima vez que ela abrir!
});