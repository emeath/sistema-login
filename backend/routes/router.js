import Router from "express"
import { getUser, getUsername } from "../controllers/users.js";

const router = Router()

router.get('/', (req, res) => {
    /*
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    })
    ;*/
    res.send({'message': 'hello world!'});
});

router.post('/auth', getUser);
router.post('/auth_username', getUsername)

export default router;