#GranaEmDia 📊

Gerenciamento de finanças pessoais através de uma SPA com integração entre React (front-end) e Node.js + PostgreSQL (back-end).

#📋 Sumário

Sobre o Projeto
Funcionalidades Principais
Tecnologias Utilizadas
Pré-requisitos
Instalação do Back-end
Instalação do Front-end
Configuração do Banco de Dados
Execução do Projeto
Rotas da API
Tela de Demonstração

#💡 Sobre o Projeto

O projeto GranaEmDia permite que os usuários possam gerenciar suas receitas e despesas financeiras através de uma aplicação moderna e intuitiva. Ele oferece recursos como:

Cadastro/Login com autenticação via JWT.
Gerenciamento de contas: Cadastro de contas com saldo inicial.
Dashboard: Visualização gráfica de receitas, despesas e saldo atual com tendências.

#⚙️ Funcionalidades Principais

Cadastro de usuário.
Login seguro com validação e token JWT.
Cadastro e listagem de receitas e despesas.
Dashboard interativo com gráficos.
Tendência financeira com base em receitas e despesas.

#🛠️ Tecnologias Utilizadas

Back-end
Node.js (ambiente de execução)
Express (framework web)
Sequelize (ORM para PostgreSQL)
jsonwebtoken (autenticação JWT)
bcrypt (hash de senhas)
dotenv (variáveis de ambiente)
PostgreSQL (banco de dados relacional)
Front-end
React.js (biblioteca front-end)
React Router (gerenciamento de rotas)
Bootstrap (estilização e componentes)
Recharts (gráficos interativos)

#⚡ Pré-requisitos

Antes de iniciar, você precisará ter as seguintes ferramentas instaladas:

Node.js: Download Node.js
PostgreSQL: Download PostgreSQL
NPM ou Yarn (gerenciador de pacotes Node).

#🔧 Instalação do Back-end

Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/GranaEmDia.git
cd GranaEmDia
Instale as dependências:

bash
Copiar código
cd trabalhofinalpfs
npm install
Configure o arquivo .env:
Crie um arquivo .env na pasta trabalhofinalpfs com as configurações do banco de dados:

env
Copiar código
DB_USER=postgres
DB_PASS=12345678
DB_NAME=granaemdia
DB_HOST=localhost
PORT=3100

JWT_SECRET=sua_chave_secreta
Rode as migrações do banco de dados:

bash
Copiar código
npx sequelize-cli db:migrate
Inicie o servidor:

bash
Copiar código
npm start
O back-end estará rodando em http://localhost:3100.

#🌐 Instalação do Front-end

Vá para a pasta do front-end:

bash
Copiar código
cd granaemdia-front
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor do front-end:

bash
Copiar código
npm start
O front-end estará disponível em http://localhost:3001.

#🗃️ Configuração do Banco de Dados

Abra o pgAdmin (ou outra ferramenta para PostgreSQL).
Crie um novo banco de dados chamado granaemdia.
Execute as migrações do back-end com o comando:
bash
Copiar código
npx sequelize-cli db:migrate
Certifique-se de que o banco contém as tabelas:
Usuario
Conta
Receita
Despesa
Categoria

#🚀 Execução do Projeto

Back-end: Certifique-se de que o servidor está rodando em http://localhost:3100.
Front-end: Inicie o projeto no navegador em http://localhost:3001.

#🛠️ Rotas da API

Autenticação
Método	Rota	Descrição
POST	/api/usuarios/register	Cadastro de usuário
POST	/api/usuarios/login	Login de usuário
Contas
Método	Rota	Descrição
POST	/api/contas	Criação de conta
GET	/api/contas	Listar todas contas
Receitas
Método	Rota	Descrição
POST	/api/receitas	Cadastro de receitas
Despesas
Método	Rota	Descrição
POST	/api/despesas	Cadastro de despesas

#📷 Tela de Demonstração
Login e Registro

Dashboard

#📄 Manual Rápido

Clone o projeto.
Instale as dependências.
Configure o banco de dados no arquivo .env.
Rode o back-end e o front-end.
Teste as APIs usando Postman ou diretamente pelo front-end.
💻 Ambiente de Desenvolvimento
Back-end: http://localhost:3100
Front-end: http://localhost:3001

#🤝 Contribuições

Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões, abra uma issue ou envie um pull request.

#👨‍💻 Autor
Desenvolvido por Gustavo Licht.


#lEMBRAR DAS GAMBIARRAS RELACIONADAS AO BANCO, QUALQUER COISA ALTERAR O NOME DAS COLUNAS DO BANCO, JÁ QUE O ORM FICA ALTERANDO SOZINHO 