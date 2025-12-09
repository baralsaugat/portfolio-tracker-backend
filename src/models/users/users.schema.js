import mongoose from "mongoose"



export const userSchema = mongoose.Schema ({
    fName:String,
    lName:String,
    dob:{type:Date},
    dateSignedUp:{type:Date, default:Date.now},
    email:{type:String, require:true},
    password:{type:String, require:true},
    refreshJWT:{
        token:{
            type:String, 
            require:true
        },
        addedAt:{
            type:Date,
            require:true,
            default:Date.now()
        }
    }
},
{timestamp:true})

export default mongoose.model('User', userSchema)