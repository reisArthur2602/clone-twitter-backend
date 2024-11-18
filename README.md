<h1 align="center" style="font-weight: bold;"> Clone-Twitter-Backend 🐦</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> • 
 <a href="#started">Primeiros passos</a> • 
  <a href="#user-routes">User Endpoints</a> • 
</p>

<p align="center">
    <b>Desenvolvimento de um clone do X (Twitter)</b>
</p>

<h2 id="technologies">💻 Tecnologias</h2>

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL

<h2 id="started">🚀 Primeiros Passos</h2>

<h3>Pré Requisitos</h3>

- [Node.js](https://nodejs.org/pt)
- [Git](https://git-scm.com/)

<h3>Clone o Projeto</h3>

```bash
git clone https://github.com/reisArthur2602/clone-twitter-backend
```

<h3>Configure as váriaveis .env </h2>

Use o`.env.example` como referência para criar seu arquivo de configuração `.env` com suas credenciais

```yaml
DATABASE_URL=
PORT=
NODE_ENV= "development"
BASE_URL=
JWT_SECRET=
```

<h3>Para iniciar o projeto</h3>

```bash
cd nome-do-projeto
npm install
npx prisma migrate dev
npm run dev
```

<h2 id="user-routes">📍 User Endpoints</h2>

| Rotas                               | Descrição                                                  |
| ----------------------------------- | ---------------------------------------------------------- |
| <kbd>POST /user/auth/register</kbd> | Cadastrar usuario [Detalhes da requisição](#register-user) |
| <kbd>POST /user/auth/login</kbd>    | Fazer login [Detalhes da requisição](#login-user)          |

<h3 id="register-user">POST /user/auth/register</h3>

**REQUEST**

```json
"body": {
	"name":"Arthur",
	"email":"arthur@guest.com",
	"password":"123456"
}
```

**REQUEST**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzbHVnIjoiYXJ0aHVyNjU5ODAiLCJpYXQiOjE3MzE4NjcxOTB9._d_WBdg92AexHliaQbFqGlxofJfz4c52smZ7xGtS_7U",
  "user": {
    "name": "Arthur",
    "slug": "arthur65980",
    "avatar": "http://localhost:8080/default.jpg"
  }
}
```

<h3 id="login-user">POST /user/auth/login</h3>

**REQUEST**

```json
"body": {
	"name":"Arthur",
	"email":"arthur@guest.com",
	"password":"123456"
}
```

**RESPONSE**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzbHVnIjoiYXJ0aHVyNjU5ODAiLCJpYXQiOjE3MzE4NjcxOTB9._d_WBdg92AexHliaQbFqGlxofJfz4c52smZ7xGtS_7U",
  "user": {
    "name": "Arthur",
    "slug": "arthur65980",
    "avatar": "http://localhost:8080/default.jpg"
  }
}
```
