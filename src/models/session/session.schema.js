import mongoose from "mongoose"



export const sessionSchema = mongoose.Schema ({
    type:
    {type: String, require:true, default:""},
    accessJWT:{
        type: String, require:true
    },
    

})

export default mongoose.model('Session', sessionSchema)