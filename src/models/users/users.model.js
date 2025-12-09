import userSchema from "./users.schema.js";

export const createUser = (userObj)=> {
    return userSchema(userObj).save()
};


export const getAllUser= () => {
    return userSchema.find()

}
 export const getUserByEmail = (email)=>{
    return userSchema.findOne({email})
 }
 
 export const storeRefreshJWT = async(_id, token)=> {
return userSchema.findOneAndUpdate({_id},
    {$set:{"refreshJWT.token":token, "refreshJWT.addedAt":Date.now()}},
    {
        new:true
    }
)
}
