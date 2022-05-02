import * as Hapi from '@hapi/hapi';
import { Server } from "@hapi/hapi";

import hapiArrayPathsRouter from "./hapiRegister"
import connectStart from './plugIns/TypeOrmConnection'
import _conFig from './interFace/ConFigs'

export let server: Server;

export const init = async (): Promise<Server> =>{  
    await connectStart(_conFig.dataBase)
    
    server = <Server> new Hapi.Server({
        port: _conFig.port,
        routes:{ cors:_conFig.cors as Object }
    })   
    await server.register(hapiArrayPathsRouter)  
    return server
}

export const start = async (logging:boolean=true): Promise<void> =>{
    if(logging) console.info(`Server runing on port ${_conFig.port}`);
    await server.start();
}
