import express from "express"
import router from "./routes/router.js"
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors())

app.use(express.json())
/*
app.use(cors({
    origin: '*', 
    credentials: true,
    methods: ['GET', 'POST']
}))
*/
app.use(router);

app.listen(port, () => {
    console.log("Server listening on port: " + port);
});