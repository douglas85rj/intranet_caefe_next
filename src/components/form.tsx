import React from "react"

export function Form() {

    return (
    <div className="form-contato">
        <h1>Fale conosco</h1>
        
<form className="conato" method="post" action="https://getform.io/f/97332049-19ab-4e2d-bd51-90d0accb9b30"> 
<div className="row">
<input type="text" name="fullname" id="nome" placeholder="Nome" required className="field" minLength={2} maxLength={36}></input>
</div>
<div className="row">
<input type="email" name="email" id="email" placeholder="email" required className="field"></input>
</div>
<div className="row">
<input type="tel" name="tel" id="tel" placeholder="Telefone (21) 99999-9999" className="field" pattern="\([0-9][0-9]\) 9?([0-9]{4}-[0-9]{4})"></input>
</div>
<div className="row">
<textarea name="mensagem" id="mensagem" required rows={3} className="field" minLength={12} maxLength={256} placeholder="Coloque seu texto com no mínimo 12 e no máximo 256 caracteres."></textarea>
</div>
<button type="submit"  className="submit-button">Enviar</button>
</form>
<style jsx>{`
        .form-contato{
          margin: 12px;
        }
        .contact-form {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
        }
       
        .field {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 12px 18px;
          outline: none;
          box-sizing: border-box;
        }
        .field-container {
          width: 100%;
        }
        .row:not(:first-child) {
          margin-top: 12px;
        }
        .field:focus {
          border-color:#0000ff;
        }
        .submit-button {
          width: 100%;
          background-color:#0000ff;
          padding: 12px 18px;
          color: #fff;
          border: none;
          border-radius: 4px;
          margin-top: 12px;
        }
        .submit-button:hover {
          opacity: 0.8;
          cursor: pointer;
        }
        #mensagem {
          resize: none;
        }
        @media (max-width: 600px) {
          .email-container {
            margin-bottom: 12px;
          }
        }
        @media (min-width: 600px) {
          .row {
            display: flex;
          }
          {/* .email-container {
            margin-right: 12px;
            flex: 3;
          }
          .phone-number-container {
            flex: 2;
          } */}
        }
      `}</style>
</div>

    )
}