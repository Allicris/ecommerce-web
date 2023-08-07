# E-Commerce Back end

## Description
This back end database is for an e-commerce site who is looking to use the latest technologies to enhance user experience and compete with other e-commerce companies. It uses Express.js API and Sequelize to get connected with the mySQL database. We are able to seed and run api points through the terminal to get our database running so that the user can interact with it. The user is able to look up categories and products in those categories as well as look up price, quantity and availability. The can also manipulate data in the database by deleting or updating categories, products, product tags and tags, 

## Table of Contents:
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Installation Process](#Installation-Process)
- [Future Development](#Future-Development)
- [Screenshots](#Screenshots)
- [Walkthrough Video](#Walkthrough-Video)
- [Credits](#Credits)

## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Installation Process
1. Make sure that you add a .env file and add the correct credentials 
2. Run npm install on the terminal to install all packages
3. Run the database on mySQL
4. Seed the database on the terminal by running npm run seed
5. Run npm start on the terminal to be able to target your API endpoints

## Future Development
I would like the Category data to be expanded since e-commerce sites usually have a lot of different options when it comes to products. I would also like to see how different products and their tags can be put into a Sale Category.

## Walkthrough Video
https://drive.google.com/file/d/1CNPw5eG4IDesUhiI4rAobfxCJIYNa3-8/view

## Credits
I would like to give credits to Rutgers Full Stack Coding Bootcamp, Rommel and Ringo for providing me with the tools and knowledge to complete this project.
