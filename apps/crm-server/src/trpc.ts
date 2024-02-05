import {initTRPC, TRPCError} from '@trpc/server'
import {CreateExpressContextOptions} from '@trpc/server/adapters/express'


export const createContext = async({req, res}:CreateExpressContextOptions) => {

    const getHeader = () => {
        const user = req.headers.authorization
        if(user){
            return user
        }
        return null
    }

    const user = await getHeader()

    return {user}
}

type Context = Awaited<ReturnType<typeof createContext>>;
const t = initTRPC.context<Context>().create()

export const router = t.router;
export const publicProcedure = t.procedure;
export const adminProcedure = publicProcedure.use(async(opts)=>{
    const {ctx} = opts
    if(!ctx.user){
        throw new TRPCError({code: 'UNAUTHORIZED'})
    }
    console.log(`opts: ${opts.ctx.user}`);
    

    return opts.next({
        ctx:{
            user: ctx.user
        }
    })
})