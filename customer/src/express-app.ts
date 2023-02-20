import  express, {application} from "express";
import logger from 'morgan'
import cors from "cors";

export const expressApp = async(app: express.Application) => {

    // express middleware
    app.use(express.json())
    app.use(cors())
    app.use(logger('dev'))


    //api
    //customer(app)

}
