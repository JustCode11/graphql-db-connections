# Data source connections with Apollo Server and GraphQL

## Description

A little overview how you can connect three data sources (MongoDB, MySQL, PostgreSQL) with Apollo Server. Everyone
of the examples uses the same two tables. One table "Author" with a "name" column that can have multiple comments and a table
"Comment" with a "content" column that has a single author. So a one-to-many relation. For the mysql example i used the 
Sequelize ORM and for the postgresql example i used Prisma ORM.

## ER-Diagram

![ER-Diagram](/images/tableEdit.png)
