# Backend da Aplicação Library - KoobJob

# Tecnologias utilizadas
  - Express.js
  - TypeScript
  - TypeORM 
  - MySQL (Hospedado Na plataforma clever-cloud)
  - UUID
  - Cors
  - Git
  - Eslint
  - Prettier

# Estrutura do projeto
  # /src
  - Pasta que contém todos os arquivos, classes e códigos do programa.

  # /database - ormconfig.ts
  - Arquivos de configurações do banco de dados.
    # /migrations
    - Processo de criação/atualização/exclusão de dados da aplicação.

  # /models
  - Camada que controla a ligação com o banco de dados da aplicação.
    # /entities 
    - Objeto que faz referencia a determinado conceito da base de dados da aplicação .

  # /repositories
  - Responsável por separar as operações de criação, alteração, atualização e exclusão de cada entidade.
  
  # /services
  - Contém todos os serviços da aplicação, como por exemplo criação e busca de livros.

  # /controllers 
  - Camada responsável por tratar a interação recebida pelo Frontend e realizar conexão com a camada Model.

  # routes.ts
  - Cria os Endpoints da aplicação.

  # /Dist
  - Arquivos compilados do TypeScript

  # .env
  - Contém as variàveis de ambiente.

  # tsconfig.json
  - Arquivo de configuração do TypeScript

  # eslintrc.json
  - Arquivo de configuração do Eslint

  # Procfile
   - Arquivo de configuração do Heroku