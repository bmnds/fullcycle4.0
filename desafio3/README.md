# Desafio 3 da Maratona FullCycle 4.0 com Nest.js

### Configurando o Nest.js
```bash
$ npm i -g @nestjs/cli
$ nest new desafio3 #ao final, escolha yarn e aguarde a instalação das dependências
$ yarn start:dev #iniciará a aplicação na porta 3000 e os scripts serão recompilados automaticamente após salvar
```

### Configurando o SQLite
```bash
$ yarn add sqlite3 typeorm typeorm-seeding @nestjs/typeorm
$ yarn add @types/node @types/faker -D
```

Altere o arquivo `package.json` para adicionar os scripts:
```json
{
  ...
  "scripts": {
    ...
    "typeorm": "ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js",
    "seed:config": "ts-node ./node_modules/typeorm-seeding/dist/cli.js config",
    "seed:run": "ts-node ./node_modules/typeorm-seeding/dist/cli.js seed",
  },
}
```

### Gere todas as classes necessárias
```bash
$ nest generate module category
$ nest generate controller category
$ nest generate service category
$ yarn typeorm entity:create -n Category
```

### Preparando a aplicação para execução
```bash
$ yarn install
$ yarn typeorm migration:generate --name Category
$ yarn seed:config
```

### Tecnologias Utilizadas
* Nest.js
* Typescript
* TypeORM
* SQLite