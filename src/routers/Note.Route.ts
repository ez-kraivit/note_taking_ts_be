import { Server } from "@hapi/hapi";

import { noteApp, noteQuery } from "../validations/Note.validation"

exports.plugin = {
    name: 'Note.Route',
    once: true,
    register: (server: { route: any, app: any }, _options: Server) => {
        const apiName: string = 'note';

        server.route([
            {
                path: `/api/${apiName}/view`,
                method: ["GET"],
                options: {
                    validate: {
                        query: noteQuery
                    },
                },
                handler: async (request: Server, h: Server) => {
                    return new server.app.NoteController(request, h).getLists()
                }
            },
            {
                path: `/api/${apiName}`,
                method: ["POST"],
                options: {
                    validate: {
                        payload: noteApp
                    },
                },
                handler: async (request: Server, h: Server) => {
                    return new server.app.NoteController(request, h).getCreate()
                }
            }
        ])


    }
}

