import express from 'express';
import { expressApp } from './express-app';
const {PORT} = require('./config')





const Startserver = async() => {
    const app = express()

    await expressApp(app)

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    }).on('error', (err)=> {
        console.log(err)
        process.exit(1)

    })
}

Startserver()

