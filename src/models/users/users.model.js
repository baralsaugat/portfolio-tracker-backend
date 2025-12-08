import userSchema from "./users.schema.js";

export const createUser = (userObj)=> {
    return userSchema(userObj).save()
};


