import Layout from "src/components/layout";
import { useZorm } from "react-zorm";
import { userSchema } from "../components/schemas/userSchema";
import {z} from "zod";


const signupSchema = userSchema.extend({
confirmPassword: z.string().min(0),

}).refine(({password,confirmPassword})=> password === confirmPassword,
{
message:'As senhas são diferentes',
path:['confirmPassword'],

}
)

export function SignUpForm(){

    const{ref, fields, errors,validation} = useZorm("signup",signupSchema,{
        onValidSubmit(event){
            event.preventDefault();
            console.log(event.data, undefined, 2);
        }
    });

    const disabled = validation?.success === false;

    return (
        <Layout pageTitle="Cadastro de usuário">
    <form noValidate className="signup-form">
   
        <h1>Criar conta</h1> 
<input type="text" placeholder = "Nome" className={`signup-field ${errors.name("error")}`}  name={fields.name()}/>
{errors.name((error) => (
        <ErrorMessage message={error.message} />
      ))}
<input type="text" placeholder = "Sobrenome" className={`signup-field ${errors.surname("error")}`} name={fields.surname()}/>
{errors.surname((error) => (
        <ErrorMessage message={error.message} />
      ))}
<input type="email" placeholder = "Email" className={`signup-field ${errors.email("error")}`} name={fields.email()}/>
{errors.email((error) => (
        <ErrorMessage message={error.message} />
      ))}
<input type="password" placeholder = "Senha" className={`signup-field ${errors.password("error")}`} name={fields.password()}/>
{errors.password((error) => (
        <ErrorMessage message={error.message} />
      ))}
<input type="password" placeholder = "Confirmar Senha" className={`signup-field ${errors.confirmPassword("error")}`}/>
{errors.confirmPassword((error) => (
        <ErrorMessage message={error.message} />
      ))}
<button disabled={disabled} type="submit" className="signup-submit">Criar conta</button>

<style jsx>{`
    .signup-field{
        width: 100%;
        display:block;
        margin-top: 8px;
        padding: 8px 16px;
        border-radius:4px;
        border:solid 1px #2139E0;
        box-sizing: border-box;
    }
        .signup-submit{
width:100%;
background-color: transparent;
border-radius: 8px;
border: solid 1 px #2139E0;
color:#2139e0;
padding: 8px 16px;
box-sizing: border-box;
text-transform:uppercase;
margin-top: 6px;
    }

    .signup-submit:hover{
        background-color:rgba(0,0,0,0.2);
    }
    
    .signup-form{
max-width: 600px;
border-radius: 4px;
border: solid 1px #ccc;
margin:auto;
margin-top:64px;
padding:16px;
    }

    .signup-submit:disabled{
        background-color:rgba(0,0,0,0.2);
        color: #ccc;
        border-color:#ccc;
    }
     `}


</style>
    </form>
    </Layout>
    );
}

function ErrorMessage({ message }: { message: string }) {
    return (
      <span className="error">
        {message}
        <style jsx>{`
          .error {
            color: #f11212;
            font-size: 10px;
          }
        `}</style>
      </span>
    );
  }
