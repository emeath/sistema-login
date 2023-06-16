import { db } from "../db.js"

export const getUser = (req, res) => {
    const { username, password } = req.body;
    // console.log(req.body)
    const myQuery = `SELECT * FROM sistema.users 
    WHERE name = '${username}' AND pwd = '${password}'`
    db.query(myQuery, (err, data) => {
        if(err) {
            return res.status(404).json(err);
        }
        // console.log(data)
        return res.status(200).json(data);
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