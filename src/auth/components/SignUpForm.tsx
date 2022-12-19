import Layout from "src/components/layout";


export function SignUpForm(){

    return (
        <Layout pageTitle="Cadastro de usuário">
    <form noValidate className="signup-form">
   
        <h1>Criar conta</h1> 
<input type="text" placeholder = "Nome" className="signup-field"/>
<input type="text" placeholder = "Sobrenome" className="signup-field"/>
<input type="email" placeholder = "Email" className="signup-field"/>
<input type="password" placeholder = "Senha" className="signup-field"/>
<input type="password" placeholder = "Confirmar Senha" className="signup-field"/>

<button type="submit" className="signup-submit">Criar conta</button>

<style jsx>{`
    .signup-field{
        width: 100%;
        display:block;
        margin-bottom: 8px;
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
     `}


</style>
    </form>
    </Layout>
    );
}
