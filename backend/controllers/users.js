import { db } from "../db.js"
import { comparePassword } from "../services/hashing.js"



export const getUser = (req, res) => {
    const { username, password } = req.body;
    // console.log(req.body)
    const myQuery = `SELECT name, pwd FROM sistema.users 
    WHERE name = '${username}'`
    db.query(myQuery, async (err, data, fields) => {
        if(err) {
            return res.status(404).json(err);
        }
         console.log(data[0].pwd)

        // check password
        let pwdOk =  await comparePassword(password, data[0].pwd)


        let info = []

        if(pwdOk)
            info.push({msg: 'Ok'})

        return res.status(200).json(info);
    })
};

export const getUsername = (req, res) => {
    const { username } = req.body;
    const myQuery = `SELECT name FROM sistema.users WHERE name = '${username}';`;


    
    db.query(myQuery, (err, data) => {
        if(err) {
            return res.status(404).json(err);
        }
        return res.status(200).json(data);
    })
}