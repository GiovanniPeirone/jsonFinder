import Express, {Request, Response} from "express";

import find from '../constrollers/find'

const router = Express.Router()

router.use('/api', find)

export default router;