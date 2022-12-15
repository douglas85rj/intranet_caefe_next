
import Layout from '../src/components/layout'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
       <p>A CAEFE tem o objetivo de compartilhar todos seus projetos e conquistas durante seus 18 anos de empresa. 
        Esse portal foi criado exclusivamente para os seus colaboradores, aqui você se mantém informado sobre tudo. </p>
        <div>
        alt="Imagem simbolizando o trabalho em equipe da CAEFE"
        src="../images/work.jpg"
      </div>
     
    </Layout>
  )
}

export const Head = () =>  "Home Page" ;

export default IndexPage
