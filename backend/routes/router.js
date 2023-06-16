import Router from "express"
import { getUser } from "../controllers/users.js";

const router = Router()

router.get('/', (req, res) => {
    res.send({'message': 'hello world!'});
});

router.post('/auth', getUser);

export default router;