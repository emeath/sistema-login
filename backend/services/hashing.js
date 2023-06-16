import bcrypt from "bcrypt";

const saltRounds = 10;
const password = 'admin123'

const createHash = (saltRounds, password) => {

    bcrypt
        .genSalt(saltRounds)
        .then( salt => {
            console.log('Salt is: ' + salt)
            return bcrypt.hash(password, salt)
        })
        .then( hash => {
            console.log('Hash is: ', hash)
        })
        .catch(err => console.error(err.message))

}



export const comparePassword = (pwd, hash) => {

    // const hash = '$2b$10$YOQYFos2cPRqjiX/JsLTBur35OjlR6VGtnpUdLWVvBJSTq1zD1WO2'

    return bcrypt.compare(pwd, hash)
        

}

// comparePassword(password)