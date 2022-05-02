import { Server } from "@hapi/hapi"
import RandomId from "../plugIns/RandomId"
import NoteRepository from "../repository/Note.Repository"

exports.plugin = {
    name: 'Note.Controller',
    once: true,
    register: (server: { app: { AllowController : any , NoteController: any } } , _options: Server) => {

        server.app.NoteController = class NoteController extends server.app.AllowController {
            constructor(request:Server, helper: Server) {
                super(request, helper)
            }

            async getLists():Promise<Object>{
                return await new NoteRepository().allLists(this._query.page,this._query.limit,this._query.tags)
            }

            async getCreate(){
                try {
                    this._payload.id = RandomId.generateid('base36',13)
                    this._payload.createdBy = 'system'
                    new NoteRepository().insert(this._payload).catch((err)=> {return { message : `${err}`}})
                    return { message : 'success!'}
                } catch (error) {
                    console.info(error)
                    return { message : 'error' }
                }
            }

            
        }

    }

}
