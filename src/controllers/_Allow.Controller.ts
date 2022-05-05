import { Server } from "@hapi/hapi";

exports.plugin = {
    name: '_Allow.Controller',
    once: true,
    register: (server: { app: { AllowController: any } }, _option: Server) => {

        type T = string | boolean | number | bigint | symbol | null | undefined | Server | any;
        server.app.AllowController = class AllowController {
            private _request: T;
            protected _params: T;
            protected _query: T;
            protected _payload: T;
            protected _h: T;
            protected _decodedToken: T;
            protected _authName: T;
            constructor(request: T, _helper: T) {
                this._request = request || {};
                this._params = this._request.params;
                this._query = this._request.query;
                this._payload = this._request.payload;
                (request.auth.credentials) ? this._decodedToken = request.auth.credentials.decodedToken : this._decodedToken = null;
                (request.auth.credentials) ? this._authName = request.auth.credentials.authName : this._authName = null;
                this._h = _helper;
            }
        }
    }
}
