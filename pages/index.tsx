
import Layout from '../src/components/layout'
import { useSession } from 'next-auth/react';

const IndexPage = () => {
  const {data, status} =useSession();
  console.log('session',data, status);
  return (
    <Layout pageTitle="Home Page">
       <p>A CAEFE tem o objetivo de compartilhar todos seus projetos e conquistas durante seus 18 anos de empresa. 
        Esse portal foi criado exclusivamente para os seus colaboradores, aqui você se mantém informado sobre tudo. </p>
       
     
    </Layout>
  )
}

export const Head = () => "Home Page" ;

export default IndexPage
