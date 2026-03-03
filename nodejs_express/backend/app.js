import express from "express"

const app = express(); // create an express app

// parse the json request we are getting from the user
app.use(express.json());

// route import (user login registration, logout)
import userRouter from './src/routes/user.route.js'; //C:\FullStack\nodejs_express\backend\src\routes\user.route.js

// route import (user post create, update, delete)
import postRouter from './src/routes/post.route.js';

// user routes decleration
app.use("/api/v1/users", userRouter);

// post router declaration
app.use("/api/v1/posts", postRouter);

// example route: https://localhost:4000/api/v1/users/register

export default app;