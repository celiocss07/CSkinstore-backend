

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

# CSkinStore - Back-end

Este é o back-end da aplicação CSkinStore, desenvolvida usando Nest.js, Prisma ORM e MongoDB para listar e filtrar skins de CS. O projeto utiliza Docker para containerizar a aplicação e MongoDB como banco de dados. Além disso, a API está documentada e acessível através do Swagger.

## Tecnologias Utilizadas

- **Nest.js** - Framework para construção de APIs escaláveis em Node.js
- **Prisma ORM** - ORM para manipulação de banco de dados
- **MongoDB** - Banco de dados NoSQL
- **Docker** - Containerização da aplicação
- **Swagger** - Documentação automática da API
- **TypeScript** - Linguagem usada no projeto

---

## Funcionalidades

- Listagem de skins com filtros por nome, categoria, float e preço
- Opções de ordenação por preço e float
- Rota para obter todas as skins cadastradas
- Testes com Jest e Supertest (caso implementado)

---

## Instruções para rodar o projeto

### 1. Rodar com Docker (Recomendado)

Caso você tenha o Docker e o Docker Compose instalados, siga os passos abaixo para rodar a aplicação em containers:

#### **Pré-requisitos**

- Docker >= 20.10
- Docker Compose >= 1.29

#### **Passos**

# Para rodar com MongoDB local (Docker)
 DATABASE_URL="mongodb://mongo:27017/cskinstore"

# Para rodar com MongoDB na nuvem (remoto)
DATABASE_URL="mongodb+srv://celiocss07:jz6QnAVRy0em9Ywt@csskin.yoxvw.mongodb.net/CSskin

No arquivo .env, descomente a linha referente ao banco de dados na nuvem e comente a linha do banco de dados local:

# Iniciar o Docker Compose:

Execute o comando abaixo para construir e iniciar os contêineres:
```bash

docker-compose up --build
```
# Acessar a API:

Após o Docker Compose subir os containers, a API estará acessível em:


http://localhost:3000


# Swagger:

A documentação da API estará disponível em:
```
http://localhost:3000/api
```
Parar o Docker Compose:

Para parar e remover os contêineres, execute:
```
docker-compose down
```


