import mongoose from "mongoose";
import express from "express";
import session from "express-session";
import cors from "cors";

import UsersController from "./controllers/users-controller.js";
import CommentsController from "./controllers/comments-controller.js";
import WikiArtController from "./controllers/wiki-art-controller.js";
import SessionController from "./controllers/session-controller.js";
import AuthController from "./controllers/auth-controller.js";
import CollectionsController from "./controllers/collection-controller.js";
import TransactionsController from "./controllers/transactions-controller.js";
import ListingsController from "./controllers/listings-controller.js";
import OffersController from "./controllers/offers-controller.js";
const app = express();

const CONNECTION_STRING = (process.env.DB_CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());
app.set('trust proxy', 1);

// https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/
// ^^ explains these variables
app.use(session({

    // I believe this is just to encrypt data
    secret: process.env.SECRET_KEY || "super secret key",

    // according to GFG, setting this to true "forces the session to be saved back to the session store
    // changing this from true (the default) to false can help prevent race situations
    resave: false,

    // according to GFG, this forces a session that is "uninitialized" to be saved to the store
    saveUninitialized: true,
    cookie: { secure: false } // needs HTTPS
}));

UsersController(app);
CommentsController(app);
WikiArtController(app);
SessionController(app);
AuthController(app);
CollectionsController(app);
TransactionsController(app);
ListingsController(app);
OffersController(app);

app.listen(process.env.PORT || 4000);