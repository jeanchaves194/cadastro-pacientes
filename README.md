# Cadastro de Pacientes (Vue.js + Node.js + SQLite)

Este projeto é um MVP para cadastro de pacientes, 
com frontend simples feito com Vue.js via CDN e 
backend em Node.js usando SQLite como banco de dados.

---

## 📦 Requisitos

- Node.js (v18 ou superior)
- npm
- SQLite (já incluído via pacote)
- Git
- `serve` para rodar o frontend

---

## 🚀 Instalação

### Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/cadastro-pacientes.git
cd cadastro-pacientes
```

---

### 🔧 Backend (Node.js + SQLite)

1. Acesse a pasta `backend`:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node index.js
```

📍 O backend estará disponível em:  
`http://localhost:3000`

---

### 🌐 Frontend (Vue.js via CDN)

1. Em outro terminal, acesse a pasta `frontend`:

```bash
cd frontend
```

2. Rode com o pacote `serve` (instale se necessário):

```bash
npm install -g serve
serve -l 8080
```

📍 O frontend estará disponível em:  
`http://localhost:8080`

---

## ✅ Funcionalidades

- Cadastrar pacientes (POST)
- Listar pacientes (GET)
- Editar dados (PUT)
- Excluir pacientes (DELETE)
- Buscar por nome (Filtro em tempo real)

---

## 📂 Estrutura do Projeto

```
cadastro-pacientes/
├── backend/       → Node.js + Express + SQLite
│   ├── index.js
│   ├── package.json
│   ├── pacientes.db
├── frontend/      → HTML + Vue.js via CDN
│   └── index.html
└── README.md
```

---


Feito por [Jean Chaves](https://github.com/jeanchaves194) 👨‍💻 