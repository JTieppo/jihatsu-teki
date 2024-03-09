Aqui fica algumas explicações breves sobre a contrução do projeto:
fiquem a vontade pra me perguntar caso precisarem

Para rodar o projeto em sua máquina:
    precisa ter instalado o node.js na máquina, pode encontrar a versão LTS aqui https://nodejs.org/en
    depois abra o terminal na pasta do projeto e da o comando:
    npm install
    npm run dev

    abra o navegador em: 
    http://localhost:3000
    ou
    127.0.0.1:3000

a versão main do git fica na nuvem nesse link:


As páginas do site são criadas pelas pastas que tem dentro da pasta app, as páginas em si são os arquivos page.jsx
dentro delas você vai encontrar uma função com a primeira letra captalizada(obrigatório) que retorna uma tag do html,
basicamente tudo o que iria escrever no <body> vai dentro dessa tag, as funçoes só são capazes de retornar uma tag,
por isso você precisará colocar todo o conteudo dentro de uma tag:

Correto:
    return(
        <div>
            <p>
            </p>

            <p>
            </p>
        </div>
    )

Errado:
    return(
        <div>
            <p>
            </p>
        </div>
        <p>
        </p>
    )
