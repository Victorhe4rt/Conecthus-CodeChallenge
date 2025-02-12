<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentação para Rodar o Projeto</title>
</head>
<body>
    <h1>Documentação para Rodar o Projeto</h1>

    <h2>Dependências</h2>
    <ul>
        <li><strong>Docker</strong></li>
        <li><strong>Node.js 22</strong></li>
    </ul>

    <h2>1. Subir o Banco de Dados</h2>
    <ol>
        <li>Com o Docker instalado, navegue até o diretório <code>database</code> do projeto.</li>
        <li>Execute o comando para subir o banco de dados:
            <pre><code>docker-compose up -d</code></pre>
            Por padrão, a porta utilizada será a <strong>5432</strong>.
        </li>
        <li>Para verificar se o contêiner está rodando, execute:
            <pre><code>docker ps</code></pre>
            Você deve ver uma linha indicando que o contêiner do PostgreSQL está ativo.
        </li>
    </ol>

    <h2>2. Subir o Back-end</h2>
    <h3>Dependências</h3>
    <ul>
        <li><strong>Node.js 22</strong></li>
    </ul>
    <ol>
        <li>Instale as dependências do projeto:
            <pre><code>npm install</code></pre>
        </li>
        <li>Instale o TypeORM e o driver do PostgreSQL:
            <pre><code>npm install @nestjs/typeorm typeorm pg</code></pre>
        </li>
        <li>Rode o comando para criar as tabelas do banco de dados com dados iniciais:
            <pre><code>npm run create-db</code></pre>
        </li>
        <li>Suba o back-end. A API será exposta na porta <strong>3000</strong>:
            <pre><code>nest start</code></pre>
        </li>
        <li>Se precisar alterar alguma variável de ambiente:
            <ul>
                <li>O host da API pode ser ajustado no arquivo <code>main.ts</code>.</li>
                <li>A connection string pode ser encontrada e ajustada no arquivo <code>app.module.ts</code>.</li>
            </ul>
        </li>
    </ol>

    <h2>3. Subir o Front-end</h2>
    <h3>Dependências</h3>
    <ul>
        <li><strong>Node.js 22</strong></li>
    </ul>
    <ol>
        <li>Instale os pacotes necessários:
            <pre><code>npm install</code></pre>
        </li>
        <li>Suba a aplicação front-end:
            <pre><code>ng serve</code></pre>
        </li>
        <li>Se precisar alterar alguma variável de ambiente:
            <ul>
                <li>A porta do front-end pode ser alterada no arquivo <code>launch.json</code>.</li>
                <li>A URL da API do back-end pode ser ajustada no arquivo <code>src/component/environment/.env</code>.</li>
            </ul>
        </li>
    </ol>
</body>
</html>
