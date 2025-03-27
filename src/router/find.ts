import Express, {Request, Response} from "express";

const router = Express.Router()

router.use('', async (req : Request, res : Response) => {
    res.render('index')
})

export default router;