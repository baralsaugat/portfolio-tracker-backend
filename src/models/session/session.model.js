import sessionSchema from "./session.schema.js";


export const storeAccessJWT = async (newSession )=> {
    return sessionSchema(newSession).save()
}

export const getAccessJWT = async(filter ) => {
    return sessionSchema.findOne(filter)
}