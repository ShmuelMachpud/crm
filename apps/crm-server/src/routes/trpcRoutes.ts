import {router, publicProcedure, adminProcedure} from '../trpc'
import {z} from 'zod'
import * as usersServices from '../services/usersServices'

export const appRouter = router({
    allUsers: publicProcedure.query(usersServices.getAllUsers),
    allUsersa: adminProcedure.query(usersServices.getAllUsers),

    login: publicProcedure.input(z.object({
        email: z.string(),
        password: z.string()
    }))
    .mutation((req) => usersServices.login(req)),
})