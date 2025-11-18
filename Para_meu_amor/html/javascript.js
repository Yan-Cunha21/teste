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
document.addEventListener('DOMContentLoaded', () => {
    // ... (Código da Decoração Kuromi/Corações já existente) ...

    // ----------------------------------------------------
    // NOVO: Lógica do Contador Regressivo
    // ----------------------------------------------------
    
    // 1. Defina a data de aniversário da sua namorada (ANO, MÊS-1, DIA)
    // Exemplo: 18 de Novembro de 2026
    const birthdayDate = new Date("November 18, 2026 00:00:00").getTime();
    
    // **IMPORTANTE:**
    // Altere o MÊS, o DIA e o ANO para a data correta.
    // Se o aniversário já tiver passado, mude o ANO para o próximo ano.
    
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        // Cálculo das unidades de tempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Formatação com zero à esquerda
        const formatTime = (t) => String(t).padStart(2, '0');

        // Insere os valores no HTML
        document.getElementById("days").textContent = formatTime(days);
        document.getElementById("hours").textContent = formatTime(hours);
        document.getElementById("minutes").textContent = formatTime(minutes);
        document.getElementById("seconds").textContent = formatTime(seconds);

        // O que acontece no dia do aniversário (distância <= 0)
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = `
                <p>🎉🎂🎈</p>
                <div class="countdown-timer">
                    <span style="font-size: 3em; color: ${getComputedStyle(document.documentElement).getPropertyValue('--primary-color')};">É HOJE!</span>
                </div>
            `;
        }
    }, 1000);
    
    // ... (Código da Persistência da Mensagem já existente) ...
});
// Função para iniciar a música após o primeiro clique do usuário
function enableAudio() {
    const music = document.getElementById('backgroundMusic');
    // Tenta dar play e tirar o mudo (se tiver sido mutado pelo navegador)
    if (music) {
        music.muted = false; // Garante que o volume não está no mudo
        music.play().catch(error => {
            console.log('Autoplay bloqueado, aguardando a próxima interação...');
        });
    }
    // Remove o listener para que a música não tente iniciar repetidamente
    document.body.removeEventListener('click', enableAudio);
}

// Adiciona o listener de clique ao corpo do documento
document.body.addEventListener('click', enableAudio);


document.addEventListener('DOMContentLoaded', () => {
    // ... (restante do seu código JavaScript: decoração, contador, salvar mensagem) ...
});