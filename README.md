# Projeto Newsee Fiap Blog

TODO
- [ ] Author name field
- [ ] Delete refresh list
- [ ] Toasts

**Índice**

- [Projeto Newsee Fiap Blog](#projeto-newsee-fiap-blog)
  - [Arquitetura da Aplicação](#arquitetura-da-aplicação)
    - [/app](#app)
    - [/components](#components)
    - [/interfaces](#interfaces)
    - [/lib](#lib)
    - [/modules](#modules)
  - [Instalação e configuração](#instalação-e-configuração)
    - [Instalação de dependências](#instalação-de-dependências)
    - [Configurar variáveis de ambiente](#configurar-variáveis-de-ambiente)
    - [Inicialização do projeto](#inicialização-do-projeto)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
    - [Framework](#framework)
    - [Autenticação](#autenticação)
    - [API](#api)
    - [UI](#ui)
  - [Autores](#autores)

## Arquitetura da Aplicação

### /app
Este diretório contém a aplicação Next.js, que é responsável por renderizar o frontend da aplicação.

- **(auth)** - contém as rotas de autenticação
- **(general)** - contém as rotas gerais (após autenticação)

### /components
Este diretório contém os componentes reutilizáveis da aplicação.

- **ui** - contém os componentes de interface (gerados utilizando shadcn/ui)

### /interfaces
Este diretório é responsável por realizar a comunicação do frontend com ferramentas externas, por enquanto, apenas com a nossa API.

- **auth** - funções de autenticação

### /lib
Este diretório contém funções utilitárias que poderiam ser reutilizadas em outros projetos.

### /modules
Este diretório contém as funções que são responsáveis por realizar as chamadas à API.

- **auth** - funções de autenticação (configuração do next-auth)

## Instalação e configuração

### Instalação de dependências

```bash
yarn
```

### Configurar variáveis de ambiente

Seguir exemplo demonstrado em `.env.example`, criando um arquivo `.env` na raiz do projeto

### Inicialização do projeto

```bash
yarn dev
```

## Tecnologias utilizadas

### Framework
Para o desenvolvimento do frontend, utilizamos o framework [Next.js](https://nextjs.org/), que é baseado em [React](https://reactjs.org/).

### Autenticação
Para a autenticação, utilizamos o [next-auth](https://next-auth.js.org/), que fornece uma solução pronta para autenticação em aplicações Next.js.

### API
A API utilizada utilizamos a [Newsee Fastify API](https://github.com/andrebeolchi/newsee-fastify-api), que é responsável por fornecer os dados para o frontend.

Utilizamos o [axios](https://axios-http.com/) para realizar as requests.

### UI
Para a estilização do frontend, utilizamos [Tailwind CSS](https://tailwindcss.com/) e [shadcn/ui](https://ui.shadcn.com/), que fornece componentes prontos para serem utilizados.

## Autores

<img src="https://avatars.githubusercontent.com/u/61586777" width="16" height="16"> [André Beolchi](https://github.com/andrebeolchi) (RM 359648)
<br><img src="https://avatars.githubusercontent.com/u/34667580" width="16" height="16"> [Fellipe Corominas](https://github.com/LeFelps) (RM 359677)

