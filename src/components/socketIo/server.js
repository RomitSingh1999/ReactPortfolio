import {creatServer} from "http";
import { Server,Socket } from "socket.io";
import { createServer } from "http";





const Serverjs=()=>
{
    const httpServer=createServer();
    const io = new Server(httpServer, {
    // ...
    });

}
export default Serverjs;