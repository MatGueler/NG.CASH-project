# <p align = "center"> NG.CASH </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Mateus Gueler-4dae71?style=flat-square" />
</p>

## :clipboard: Description

Esse projeto foi desenvolvido para simular transações entre usuarios da plataforma ng.cash, de forma simples e rápida.

---

## :computer: Tecnologias utilizadas

### **Front-end**

- Docker
- Node.js (v16.17.0)
- TypeScript
- Prisma
- SQL

### **Back-end**

- Docker
- Node.js (v16.17.0)
- Postgres
- TypeScript
- Prisma
- SQL

---

## 🏁 Rodando a aplicação com Docker

Para rodar o projeto usando docker é necessário executar o comando abaixo:

```
docker-compose up --build
```

Assim, o servidor do back-end e o servidor do navegador estarão disponíveis.

- Fron-end

Para acessar a aplicação no front-end, acesse no navegador a seguinte url:

Link: [http://localhost:80](http://localhost:80)

- Back-end

As requisições já estão sendo realizadas na PORTA 5000

<br/>

---

## 🏁 Rodando a aplicação sem docker

Passo 1 - Verificar as variáveis de ambiente no arquivo /.env na raiz do projeto back-end e mudar as informações de acordo com as suas credenciais.

- Back-end

Para rodar o projeto localmente sem docker é necessário executar os comandos abaixo para inicializar o back-end:

```
npm run build
```

```
npm run start
```

A partir disso, o servidor estará pronto para receber requisições na porta 5000.

- Fron-end

Para inicializar a aplicação no front utilize o comando abaixo para abrir o servidor com o react:

```
npm run start
```

[REPOSITÓRIO FRONT-END](https://github.com/MatGueler/NG.CASH-front)
[REPOSITÓRIO BACK-END](https://github.com/MatGueler/NG.CASH-back)
