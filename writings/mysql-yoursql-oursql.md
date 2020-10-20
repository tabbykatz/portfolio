---
title: "MySQL, YourSQL, OurSQL"
date: "2020-07-14"
og:
  description: "A technical blog entry for Holberton."
  image: "/YourSQL.jpg"
author:
  twitter: "tabby__katz"
  name: "Tabitha O'Melay"
---

_What the hell is SQL?_

Hey, glad you asked. First of all, SQL stands for Structured Query Language. Second, it isn’t pronounced like that — it doesn’t rhyme with “hell” — or does it? This is a standard argument in some circles, so while it may seem trivial it’s more like Vim vs Emacs. Call it what you want, S — Q — L or Sequel. The official word is:

>The official way to pronounce “MySQL” is “My Ess Que Ell” (not “my sequel”),
	>but we do not mind if you pronounce it as “my sequel” or in some other
	>localized way. -[MySQL docs](https://dev.mysql.com/doc/refman/5.7/en/what-is-mysql.html)

So what is it? According to Wikipedia, SQL "is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)." This means nothing to me. How about you?


In simple terms, SQL is a language used to view or change data in a database. (A database is a system for storing and taking care of data.) The statements - or programs - used in this language are called SQL queries. With these queries we can:

- INSERT data INTO a database,
- DELETE data FROM a database,
- UPDATE data in a database,
- SELECT (extract) data FROM a database.
- And more!


More acronyms will be thrown at you if you get any deeper into this. (Save yourself!)

- DDL: Data Definition Language
- DML: Data Manipulation Language
- DCL: Data Control Language
- TCL: Transaction Control Language (there isn't even a Wikipedia page for this, check out DCL)

By the way, you may feel confused by terms like SQL, MySQL, and so on. The gist is that SQL is the language and there are many different database systems that use the language. MySQL was one of the first open-source database available in the market. The database software itself is called an RDBMS- "Relational Database Management System." Why relational?


It is "relational" because the data contained in each table are related to each other. Tables can also be related to other tables. The relational structure makes it possible to run queries on multiple tables at once. (Relational as in Tabitha: 39. (name, age))


"Relational" describes type of database an RDMBS manages, but the RDBMS also refers to the database program itself. It is the software that executes queries on the data and provides a visual representation. It may also display data in a tables like a spreadsheet, viewable and editable like a Google Sheet.

# But… why?

Another good question. We have a lot of information to move around, whether it's a class roll call or Stack Exchange for lazy programmers. (Thanks, Stack Exchange!) Usually these databases are kept secret from outside eyes, but sometimes you can interact with them:


[Stack Exchange Data Explorer](data.stackexchange.com)<br>
[lerocha/chinook-database](https://github.com/lerocha/chinook-database)


SQL gives us numerous important commands so we can interact with data. Once you know how to use them, they are very powerful tools to manage and modify vast volumes of data. Below is a very simple example of listing databases and the tables inside one of them.

![an example of listing MySQL databases and tables](/tables.png)

I could also add to those tables if I wish, say to indicate votes from my cohort on how to pronounce SQL. I could delete them, add them, and retrieve them in many ways. But using SQL is beyond the scope of this article. Suffice it to say it is a simple language that does what you want it to. (Thanks, SQL!)

# How Do SQL Database Engines Work?

An SQL engine is defined as software that "understands'' SQL commands to access a relational database and manipulate data. An SQL engine can also be referred to as an SQL database engine or an SQL query engine.


When a user interacts with the database, their query is translated into a SQL request for processing. The SQL storage engine writes to and retrieves data from a data warehouse server, often by converting the data to a format such as a JSON file. (Please don't ask me about JSON files. It's just a list, just a list *rocks back and forth*)


To complete the query, the query processor accepts, reads, and executes SQL commands for the data warehouse to forward to it's application server. The application server processes the SQL request and sends it to a web server where the user can access the information from the SQL data tables. (Thanks, SQL!)


An SQL engine processes data in stages. In general, the first stage of SQL processing begins with parsing an SQL statement (query) via a parse call, to prepare for execution. The statement is translated into a data structure that other routines can process, then there are three checks: syntax check, semantic check, and shared pool check. (Thanks, SQL!)


The second stage is query optimization. This optimizes the query and chooses the best algorithms for searching and sifting through data. (Thanks, SQL!) The final stage is to execute the SQL statement by running the query.


That's a lot to digest, I know, but the beautiful thing about SQL is that you don't need to know any of the inner workings. When you write the query or statement you are telling the engine what to do, not how to do it. It figures all that out for you.


Thanks, SQL!
