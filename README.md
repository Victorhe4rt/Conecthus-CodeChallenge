Dependências: Docker

Subir o banco de dados:

Com o Docker instalado no diretório database do projeto, rode o comando:
docker-compose up -d
Por padrão, a porta utilizada será a 5432.
Caso tenha alguma dúvida, execute o comando docker ps. Esta linha deverá ser mostrada.
Subir o back-end:

Dependências: Node 22

Primeiro, rode o comando para instalar as dependências do projeto:

npm install
Segundo, rode o comando para instalar o TypeORM:

npm install @nestjs/typeorm typeorm pg
Terceiro, rode o comando para subir as tabelas do banco já com dados:

npm run create-db
Quarto, rode o comando para subir o back-end. A porta 3000 será usada para subir a API:

nest start
Caso precise alterar alguma variável de ambiente, o host da API pode ser ajustado no arquivo main.ts, e a connection string se encontra no app.module.

Subir o front-end:

Dependências: Node 22

Para subir a aplicação, precisamos instalar os pacotes com o comando:

npm install
Após isso, rode o comando:

ng serve
Caso precise alterar alguma variável de ambiente, a porta do front-end pode ser alterada no arquivo launch.json.

A URL da API do back-end se encontra dentro de src/component/environment/.env. Lá pode ser feita a alteração da URL.
