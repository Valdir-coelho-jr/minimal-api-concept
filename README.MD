## Conceito de API Minimal - Dados da Fórmula 1

Este projeto foi criado para o curso de formação em Node.js na DIO, ministrado pelo professor [Felipe Aguiar](https://github.com/felipeAguiarCode).

**Objetivo:**

O objetivo deste projeto é demonstrar o conceito de uma API minimal usando o framework Fastify. Este exemplo mostra como construir uma API simples que fornece dados sobre equipes e pilotos da Fórmula 1.

**Funcionalidades:**

* **Endpoints de dados:**
    * `/teams`: Retorna uma lista de todas as equipes da Fórmula 1 com seus nomes e locais.
    * `/drivers`: Retorna uma lista de todos os pilotos da Fórmula 1 com seus nomes e equipes.
    * `/drivers/:id`: Retorna detalhes de um piloto específico com base em seu ID.
* **Gerenciamento de erros:**
    * O endpoint `/drivers/:id` trata IDs de pilotos inválidos e retorna uma resposta 404 Not Found.
* **Configuração de CORS:**
    * A API permite solicitações de qualquer origem (`origin: "*" `).

**Como executar:**

1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório.
3. Execute `npm install` para instalar as dependências.
4. Execute `npm start` para iniciar o servidor.
