# lb2

> Vuejs 2 Authentication & Role Based Authorization for your Vue.js ( Vue 2 )


## Build Setup

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

#credential 
Admin username : ADMIN
password : admin

Resident username : A001
password : open@A001

#Description
A small Demo app to show how to perform authentication using Vue2 , Role Based Authentication is also included .
I have tried my best to keep it simple and understanding . Ping me if you didnt understand at any point or if someone has better way to perform authentication using Vue 2

#story
In this app , there are two role 
> Admin
> Resident
Based on roles he will be redirected to the page , there is also a landing page where you dont need authentication or roles to check the page . If you a admin you will not be able to access resident page & vise-versa . 
I have create my owm folder structure , where each component is create and it has all its files and there is a common router file.
Sass is also included , you just have to install sass 

#api 
>There is a api "https://calm-basin-73408.herokuapp.com/api" on post method it returns if the users is authenticated or not along with >the role , i have stored the role in local storage 







