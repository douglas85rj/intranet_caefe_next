import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  
  providers: [
    CredentialsProvider({
   
    name: "Credentials",
    
    credentials: {
      username: { label: "Email", type: "text", placeholder: "" },
      password: { label: "Senha", type: "password" }
    },
    async authorize(credentials, req) {
        return null;
     
    },
  })
  ],
};
  
export default NextAuth(authOptions)





  
