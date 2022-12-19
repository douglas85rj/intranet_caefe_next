import {z} from 'zod'

const messages = {

    min:(field:string, length:number) =>`o campo "${field}" precisa ter pelo menos "${length}"letras.`,
    max:(field:string, length:number) =>`o campo "${field}" deve ter até "${length}"letras.`,
emailInvalid:'O email digitado é inválido',

};
const nameMinLength = 2;
const nameMaxLength = 24;
const name = z.string().min(nameMinLength,{
    message: messages.min('nome',nameMinLength)
}
    ).max(nameMaxLength,{
message:messages.max('nome', nameMaxLength)
    
    });
    const surnameMinLength = 2;
const surnameMaxLength = 48;
const surname = z.string().min(surnameMinLength,{
    message: messages.min('sobrenome',surnameMinLength)
}
    ).max(surnameMaxLength,{
message:messages.max('sobrenome', surnameMaxLength)
    
    });
    const passwordMinLength = 8;
const passwordMaxLength = 64;
const password = z.string().min(passwordMinLength,{
    message: messages.min('senha',passwordMinLength)
}
    ).max(passwordMaxLength,{
message:messages.max('senha', passwordMaxLength)
    
    });
const email = z.string().email({

    message: messages.emailInvalid,
});


export const userSchema = z.object({

    name,
    surname,
    email,
    password,
})