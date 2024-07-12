// JS/contato.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nome = document.getElementById('nome');
    const mensagem = document.getElementById('mensagem');
    const email = document.getElementById('email');
    const charCount = document.getElementById('charCount');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        if (nome.value && mensagem.value && email.value) {
            alert('Obrigado pela sua mensagem, ' + nome.value + '! Entraremos em contato em breve.');
            form.reset(); // Reseta o formulário
            charCount.textContent = '0/500';
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    nome.addEventListener('focus', function() {
        nome.style.backgroundColor = '#e0ffe0';
    });

    nome.addEventListener('blur', function() {
        nome.style.backgroundColor = '';
    });

    email.addEventListener('focus', function() {
        email.style.backgroundColor = '#e0ffe0';
    });

    email.addEventListener('blur', function() {
        email.style.backgroundColor = '';
    });

    mensagem.addEventListener('input', function() {
        const maxLength = 500;
        const currentLength = mensagem.value.length;
        charCount.textContent = `${currentLength}/${maxLength}`;
    });
});


// Index

// JS/index.js

document.addEventListener('DOMContentLoaded', function() {
    const welcomeButton = document.getElementById('welcomeButton');
    const imagemPrincipal = document.getElementById('imagemPrincipal');

    welcomeButton.addEventListener('click', function() {
        alert('Bem-vindo ao Larics! Aproveite a nossa vibe e os nossos sabores únicos.');
    });

});

