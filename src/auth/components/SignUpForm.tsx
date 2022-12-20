import Layout from "src/components/layout";
import { useZorm } from "react-zorm";
import { userSchema, UserSchema } from "../../user/schemas/userSchema";
import { z } from "zod";
import useAxios from "axios-hooks";
import {toast} from "react-toastify";
import { useRouter } from "next/router";

const texts = {

  submitSuccess: 'Conta criada com Sucesso',
  submitFailure: 'Houve um erro ao criar sua conta'

}

const signupSchema = userSchema
  .extend({
    confirmPassword: z.string().min(0),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas são diferentes",
    path: ["confirmPassword"],
  });

export function SignUpForm() {
  const router =useRouter();
  const [{data, loading}, execute] = useAxios<UserSchema, UserSchema>(
    {
      url: "/api/signup",
      method: "POST",
    },
    {
      manual: true,
    }
  );

  const { ref, fields, errors, validation } = useZorm("signup", signupSchema, {
    async onValidSubmit(event) {
      event.preventDefault();
     const { data } = await execute({
        data: event.data,
      });
      if (data.user){
        toast(texts.submitSuccess),
        router.push("/")
      }else{
        toast(texts.submitFailure);

      }
    },
  });

  const disabled = validation?.success === false || loading;

  return (
    <Layout pageTitle="Cadastro de usuário">
      <form noValidate className="signup-form" ref={ref}>
        <h1>Criar conta</h1>
        <input
          type="text"
          placeholder="Nome"
          className={`signup-field ${errors.name("error")}`}
          name={fields.name()}
          disabled={loading}
        />
        {errors.name((error) => (
          <ErrorMessage message={error.message} />
        ))}
        <input
          type="text"
          placeholder="Sobrenome"
          className={`signup-field ${errors.surname("error")}`}
          name={fields.surname()}
          disabled={loading}
        />
        {errors.surname((error) => (
          <ErrorMessage message={error.message} />
        ))}
        <input
          type="email"
          placeholder="Email"
          className={`signup-field ${errors.email("error")}`}
          name={fields.email()}
          disabled={loading}
        />
        {errors.email((error) => (
          <ErrorMessage message={error.message} />
        ))}
        <input
          type="password"
          placeholder="Senha"
          className={`signup-field ${errors.password("error")}`}
          name={fields.password()}
          disabled={loading}
        />
        {errors.password((error) => (
          <ErrorMessage message={error.message} />
        ))}
        <input
          type="password"
          placeholder="Confirmar Senha"
          className={`signup-field ${errors.confirmPassword("error")}`}
          name={fields.confirmPassword()}
          disabled={loading}
        />
        {errors.confirmPassword((error) => (
          <ErrorMessage message={error.message} />
        ))}
        <button disabled={disabled} type="submit" className="signup-submit">
          Criar conta
        </button>

        <style jsx>
          {`
            .signup-field {
              width: 100%;
              display: block;
              margin-top: 8px;
              padding: 8px 16px;
              border-radius: 4px;
              border: solid 1px #2139e0;
              box-sizing: border-box;
            }
            .signup-submit {
              width: 100%;
              background-color: transparent;
              border-radius: 8px;
              border: solid 1 px #2139e0;
              color: #2139e0;
              padding: 8px 16px;
              box-sizing: border-box;
              text-transform: uppercase;
              margin-top: 6px;
            }

            .signup-submit:hover {
              background-color: rgba(0, 0, 0, 0.2);
            }

            .signup-form {
              max-width: 600px;
              border-radius: 4px;
              border: solid 1px #ccc;
              margin: auto;
              margin-top: 64px;
              padding: 16px;
            }

            .signup-submit:disabled {
              background-color: rgba(0, 0, 0, 0.4);
              color: #ccc;
              border-color: #ccc;
            }
            .signup-field:disabled{
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
