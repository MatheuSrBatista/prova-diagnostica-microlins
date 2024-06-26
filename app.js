const correctAnswers = ['a', 'a', 'c', 'a', 'b', 'c', 'b', 'a', 'd', 'a', 'd', 'b', 'a', 'd', 'a'];

const form = document.querySelector('form');
const popup = document.getElementById('resultPopup');
const resultText = document.getElementById('resultText');

form.addEventListener('submit', event => {
    event.preventDefault();

    // Contador de pontos do usuário
    let userPoints = 0;

    // Array para armazenar as respostas selecionadas pelo usuário
    const userAnswers = [];

    // Seleciona todos os inputs do tipo radio dentro do formulário
    let inputs = document.querySelectorAll('input[type="radio"]');

    // Itera sobre cada input do tipo radio
    inputs.forEach(input => {
        if (input.checked) {
            userAnswers.push(input.value);
        }
    });

    // Compara as respostas do usuário com as respostas corretas e conta os pontos
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            userPoints++;
        }
    });
    
    // Determina o nível de conhecimento com base nos pontos obtidos
    let knowledgeLevel;
    if (userPoints >= 0 && userPoints <= 5) {
        knowledgeLevel = 'Conhecimento básico';
        document.querySelector('.recomendation').textContent = `Recomendação: Introdução à informática e windows 11`;
    } else if (userPoints >= 6 && userPoints <= 10) {
        knowledgeLevel = 'Conhecimento intermediário';
        document.querySelector('.recomendation').textContent = `Recomendação: Windows 11`;
    } else if (userPoints >= 11 && userPoints < 15) {
        knowledgeLevel = 'Conhecimento avançado';
        document.querySelector('.recomendation').textContent = `Recomendação: Windows 11`;
    }else if (userPoints === 15) {
        document.querySelector('.recomendation').textContent = `Recomendação: Pacote office`;
    }

    let recomendationClass;
switch (knowledgeLevel) {
    case 'Conhecimento básico':
        recomendationClass = 'level-basico';
        break;
    case 'Conhecimento intermediário':
        recomendationClass = 'level-intermediario';
        break;
    case 'Conhecimento avançado':
        recomendationClass = 'level-avancado';
        break;
    case 'Pacote office':
        recomendationClass = 'level-perfeito';
        break;
    default:
        recomendationClass = ''; // Caso padrão, não adiciona classe
}

// Seleciona o elemento .recomendation e adiciona a classe correspondente
const recomendationElement = document.querySelector('.recomendation');
recomendationElement.classList.add(recomendationClass);

    // Monta o texto do resultado
    resultText.textContent = `Você fez ${userPoints} pontos. Nível de conhecimento: ${knowledgeLevel}`;

    // Exibe o popup
    popup.style.display = 'block';
});

// Botão para fechar o popup
const closePopupButton = document.getElementById('closePopup');
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});
