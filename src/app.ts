import express from "express";
import routes from "index.routes"
import mongoose from "mongoose"

class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes()
        this.dbConnection()
    }

    public app: any;


    config(): any {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
    }

    routes(): any {
        this.app.use(routes);
    }

    dbConnection(): any {
        mongoose.connect("mongodb://localhost:27017/dev_blog", { useNewUrlParser: true })
    }
}

export default new App().app;