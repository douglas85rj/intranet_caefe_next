import Layout from "src/components/layout";
import { useZorm } from "react-zorm";
import { userSchema, UserSchema } from "../../user/schemas/userSchema";
import {z} from "zod";
import axios from "axios";
import useAxios from "axios-hooks";




export function SignInForm(){

    const [{},execute] = useAxios  <UserSchema, UserSchema>(
      
        {
        });

    const{ref, fields, errors,validation} = useZorm("signin",userSchema,{
        onValidSubmit(event){
            event.preventDefault();
     

          
        }
    });

    const disabled = validation?.success === false;

    return (
        <Layout pageTitle="Área do colaborador">
    <form noValidate className="signup-form">
   
        <h1>Login</h1> 

<input type="email" placeholder = "Email" className={`signup-field ${errors.email("error")}`} name={fields.email()}/>
{errors.email((error) => (
        <ErrorMessage message={error.message} />
      ))}
<input type="password" placeholder = "Senha" className={`signup-field ${errors.password("error")}`} name={fields.password()}/>
{errors.password((error) => (
        <ErrorMessage message={error.message} />
      ))}

<button disabled={disabled} type="submit" className="signup-submit">Entrar</button>

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
