import Link from "next/link";
import { Footer } from "./Footer";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from "next-auth/react";
import { GrLogout,GrLogin } from "react-icons/gr";

// import {
//   container,
//   heading,
//   navLinks,
//   navLinkItem,
//   navLinkText,
//   siteTitle,
// } from "../components/layout.module.css";

const Layout = ({pageTitle, children }:{pageTitle:string; children:any}) => {
  
  const { data, status } = useSession();
  return (
    <div className="container">
      <header className="siteTile"></header>
  
      
      <nav>
        <ul className="navLinks">
          <li className="navLinkItem">
            <Link href="/" className="navLinkText">
              Home
            </Link>
          </li>
          <li className="navLinkItem">
            <Link href="/about" className="navLinkText">
              About
            </Link>
          </li>
          <li className="navLinkItem">
            <Link href="/blog" className="navLinkText">
              Blog
            </Link>
            
          </li>
          <li className="navLinkItem">
          
            <Link href="/api/auth/signout"
            className="item"
            title="Sair"
            onClick={(event) => {
              event.preventDefault();
              signOut();
            }}
          >
            <GrLogout size="22px" aria-label="Sair" />
          </Link>
       
              
                        
          </li>

          <li className="navLinkItem">
          
          <Link  href="/api/auth/signin" title="Entrar">
         <GrLogin size="22px" aria-label="Entrar" />
       
        </Link>
     
            
                      
        </li>
        </ul>

      </nav>
      <main>
      <h1 className="heading">{pageTitle}</h1>
        {children} 
        <ToastContainer/>       
        <Footer />
      </main>
    </div>
  
  );
};

export default Layout;
