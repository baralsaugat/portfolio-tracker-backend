import usersSchema from "./users.schema";

export const createUser = (userObj)=> {
    return usersSchema().save()
};


