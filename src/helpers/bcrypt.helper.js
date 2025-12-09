import bcrypt from "bcryptjs";

const saltRounds = 10


export const  hashPassword = (plainPassword)=>
{
    return new Promise((resolve, reject)=>{
        try {
            resolve(bcrypt.hashSync(plainPassword, saltRounds))
        } catch (error) {
            reject(error)
        }
    })
}

export const comparePassword = (plainPassword, hashedPassFromDB)=>{
    return bcrypt.compareSync(plainPassword, hashedPassFromDB)
}