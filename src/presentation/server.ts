import express,  { Router } from 'express'
import { SwaggerDocs as V1SwaggerDocs } from './swagger';

interface Options {
    port: number
    routes: Router
}

export class Server{

    public readonly app = express()
    private serverListener: any
    private readonly port: number
    private readonly routes: Router

    constructor(options: Options){
        const { port, routes } = options
        this.port = port
        this.routes = routes
    }

    async start(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))

        this.app.use(this.routes)

        this.serverListener = this.app.listen(this.port, () =>{
            console.log(`Server is running on port ${this.port}`)
            V1SwaggerDocs.setup(this.app, this.port)
        })
    }

    public close(){
        this.serverListener?.close()
    }
}