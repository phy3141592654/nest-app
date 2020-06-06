import Users from '../models/users.model';

export const createUser = async (input: any) => {
    try {
        var user = new Users({ name: input.name, email: input.email });
        let res = await user.save();
        console.log("User created!");
        return res;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

export const getUser = async (query: any) => {
    try {
        let users = await Users.find(query);
        return users;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

