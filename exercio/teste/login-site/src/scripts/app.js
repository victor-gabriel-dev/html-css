// Este arquivo contém a lógica JavaScript para o site de login.

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validateForm(username, password)) {
            authenticateUser(username, password);
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    function validateForm(username, password) {
        return username !== '' && password !== '';
    }

    function authenticateUser(username, password) {
        // Aqui você pode adicionar a lógica para interagir com uma API de autenticação
        console.log('Autenticando usuário:', username);
        // Exemplo de chamada de API
        // fetch('/api/authenticate', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ username, password })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         // Redirecionar ou mostrar mensagem de sucesso
        //     } else {
        //         alert('Usuário ou senha incorretos.');
        //     }
        // })
        // .catch(error => {
        //     console.error('Erro ao autenticar:', error);
        // });
    }
});