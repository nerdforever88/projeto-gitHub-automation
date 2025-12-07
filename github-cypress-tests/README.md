# Testes Automatizados do GitHub com Cypress

Este projeto contém testes automatizados para o GitHub, desenvolvidos com Cypress, que realizam autenticação, gerenciamento de repositórios e outras funcionalidades da plataforma.

## 🚀 Funcionalidades Testadas

- Login no GitHub
- Navegação no menu do usuário
- Criação de novos repositórios
- Logout da aplicação

## 🛠️ Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Conta no GitHub para execução dos testes

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd github-cypress-tests
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
GITHUB_USERNAME=seu_usuario_github
GITHUB_PASSWORD=sua_senha_github
```

## 🚦 Executando os Testes

Para executar todos os testes em modo interativo:
```bash
npx cypress open
```

Para executar os testes em modo headless:
```bash
npx cypress run
```

## 📁 Estrutura do Projeto

```
github-cypress-tests/
├── cypress/
│   ├── e2e/
│   │   ├── pages/         # Page Objects
│   │   └── github.cy.js   # Casos de teste
│   ├── fixtures/          # Dados de teste
│   ├── screenshots/       # Capturas de tela
│   ├── support/           # Comandos personalizados
│   └── utils/             # Utilitários
├── cypress.config.js      # Configuração do Cypress
└── package.json           # Dependências e scripts
```

## 📝 Dependências Principais

- Cypress ^15.7.1
- cypress-file-upload ^5.0.8
- dotenv ^17.2.3
- @testing-library/cypress ^10.1.0

## ⚠️ Importante

- Mantenha suas credenciais seguras, nunca as compartilhe ou faça commit do arquivo `.env`
- Recomenda-se o uso de um usuário de teste para execução dos testes

## 📄 Licença

Este projeto está sob a licença ISC.
