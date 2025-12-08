import mongoose from "mongoose"



export const userSchema = mongoose.Schema ({
    fName:String,
    lName:String
    // dob:{type:Date},
    // dateSignedUp:{type:Date, default:Date.now},
    // email:String,
    // password:String
})

export default mongoose.model('User', userSchema)