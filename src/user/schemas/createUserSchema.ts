import { userSchema, UserSchema } from "./userSchema";
import * as userRepository from "../../user/userRepository"

const messages = {

    emailExists: ' Esse email ja esta cadastrado.'
}

export const createUserSchema = userSchema.transform (user => ({


    ...user,
    name: user.name.trim(),
    surname: user.surname.trim(),
})).refine( async ({email}) => {

const user = await userRepository.findByEmail(email);

return user === null;
},{

    message: messages.emailExists,
    path:["email"],


});