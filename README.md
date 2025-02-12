# Como Rodar o Projeto

## Dependências

- Docker
- Node.js (versão 22 ou superior)
- Angular CLI (para o frontend)

---

## 1. Subir o Banco de Dados

### Requisitos
- Docker instalado no seu sistema.

### Passos:

1. Navegue até o diretório `database` do projeto.
2. Execute o comando abaixo para subir o banco de dados utilizando o Docker Compose:

    ```bash
    docker-compose up -d
    ```

3. Por padrão, a porta utilizada será a **5432**. Caso queira verificar se o container foi iniciado corretamente, execute:

    ```bash
    docker ps
    ```

4. Caso o banco de dados tenha sido iniciado corretamente, você verá a linha referente ao seu container na lista de containers em execução.

---

## 2. Subir o Backend

### Requisitos
- Node.js versão 22 ou superior.

### Passos:

1. No diretório do backend, instale as dependências do projeto:

    ```bash
    npm install
    ```

2. Em seguida, instale o TypeORM e o PostgreSQL:

    ```bash
    npm install @nestjs/typeorm typeorm pg
    ```

3. Para criar as tabelas no banco de dados e popular com dados iniciais, execute:

    ```bash
    npm run create-db
    ```

4. Agora, para iniciar o backend e subir a API, execute o seguinte comando. A aplicação será iniciada na porta **3000**:

    ```bash
    nest start
    ```

5. Caso precise alterar alguma variável de ambiente, o host da API pode ser ajustado diretamente no arquivo `main.ts`. A **connection string** do banco de dados pode ser configurada no arquivo `app.module.ts`.

---

## 3. Subir o Frontend

### Requisitos
- Node.js versão 22 ou superior.
- Angular CLI (se não tiver, instale com `npm install -g @angular/cli`).

### Passos:

1. No diretório do frontend, instale as dependências do projeto:

    ```bash
    npm install
    ```

2. Após isso, execute o comando abaixo para subir a aplicação Angular:

    ```bash
    ng serve
    ```

3. Caso precise alterar alguma variável de ambiente, você pode configurar a porta do frontend no arquivo `launch.json`.

4. Para configurar a URL da API do backend, edite o arquivo `src/app/environment/.env`. Lá você pode modificar a URL conforme necessário.

---

Com essas etapas, o projeto estará rodando corretamente tanto para o backend quanto para o frontend.
