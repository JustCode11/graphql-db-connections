# MySQL

## Description

A Apollo GraphQL server connected with MySQL. I also used Sequelize for the ORM.

## Used packages

- apollo-server-core 3.6.2
- apollo-server-express 3.6.2
- express 4.17.2
- graphql 16.3.0
- mysql2 2.3.3
- nodemon 2.0.15
- sequelize 6.14.1
- sequelize-cli 6.4.1
- sqlite3 5.0.2

## Sequelize commands

Initialize project
```
npx sequelize-cli init
```

Configure your settings in the config/config.json file
```
"development": {
    "username": "root",
    "password": "yourPassword",
    "logging": true,
    "database": "mysqltest",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```

Create Models and Migrations
```
npx sequelize-cli model:generate --name Author --attributes name:string
```

```
npx sequelize-cli model:generate --name Comment --attributes content:string
```

Add the necessary associations in the model files
```
Comment.belongsTo(models.Author, { foreignKey: 'authorId' })
```

```
Author.hasMany(models.Comment, { foreignKey: "authorId" })
```

Run migrations
```
npx sequelize-cli db:migrate
```

For more informations check out: https://sequelize.org/master/manual/migrations.html
