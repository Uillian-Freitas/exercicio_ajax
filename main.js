document.addEventListener('DOMContentLoaded', function(){
    async function buscarDadosGithub(){

        try{
            const resposta = await fetch ('https://api.github.com/users/Uillian-Freitas')
            const dados = await resposta.json();

            document.querySelector('.profile-name').innerText = dados.name;
            document.querySelector('.profile-username').innerText = '@' + dados.login;       
            document.querySelector('.profile-avatar').src = dados.avatar_url;

            const itens = document.querySelectorAll('.numbers-item')

            itens[0].innerHTML = `<h4>Repositório</h4>${dados.public_repos}`;
            itens[1].innerHTML = `<h4>seguidores</h4>${dados.followers}`;
            itens[2].innerHTML = `<h4>seguindo</h4>${dados.following}`;

            document.querySelector('.profile-link').href = dados.html_url;

    }
    catch(erro){
        console.error('Erro ao buscar dados', erro);
    }
    }
    buscarDadosGithub();
})