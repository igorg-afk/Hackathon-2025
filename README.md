# 🤖 Analista Virtual - Interface de Chat

Este projeto é uma interface web profissional (Frontend) conectada a um servidor proxy (Backend) para interagir com a API de automação do Flow.

O objetivo é fornecer um ambiente visual limpo, responsivo e capaz de renderizar respostas complexas (tabelas, listas e formatação Markdown) de forma amigável.

## ✨ Funcionalidades

* **Interface Profissional:** Design em tons de azul (Blue Royal), bordas arredondadas e tipografia moderna (Inter).
* **Renderização de Markdown:** Transforma respostas da IA que contêm `**negrito**`, tabelas e listas em HTML visualmente agradável.
* **Backend Proxy:** Um servidor Node.js intermediário para resolver problemas de CORS e proteger a comunicação com a API.
* **Tratamento de Erros:** Lógica para extrair mensagens de estruturas JSON aninhadas (artifacts).

## 🛠️ Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
* **Backend:** Node.js, Express.
* **Bibliotecas:**
    * `marked`: Para converter Markdown em HTML no navegador.
    * `cors`: Para permitir requisições entre o front e o back.
    * `node-fetch`: Para realizar chamadas HTTP no Node.js.

## 📂 Estrutura do Projeto

Certifique-se de que suas pastas estejam organizadas desta forma:

```text
meu-projeto/
│
├── public/
│   └── index.html      # O código do site (Frontend)
│
├── server.js           # O servidor (Backend)
├── package.json        # Lista de dependências
└── README.md           # Este arquivo
