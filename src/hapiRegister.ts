import * as Glob from 'glob'
import * as path from 'path'

const hapiArrayPathsController: Array<string> = Glob.sync(`${path.resolve(__dirname, './controllers')}/*.@(js|ts)`)
const hapiArrayPathsRouter: Array<string> = Glob.sync(`${path.resolve(__dirname, './routers')}/*.@(js|ts)`)
Array.prototype.push.apply(hapiArrayPathsController, hapiArrayPathsRouter)

export default hapiArrayPathsController.map((ts: string) => require(`${ts}`))