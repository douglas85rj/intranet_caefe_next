import Link from "next/link";
import { Footer } from "./Footer";



// import {
//   container,
//   heading,
//   navLinks,
//   navLinkItem,
//   navLinkText,
//   siteTitle,
// } from "../components/layout.module.css";

const Layout = ({pageTitle, children }:{pageTitle:string; children:any}) => {
  

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
        </ul>

      </nav>
      <main>
      <h1 className="heading">{pageTitle}</h1>
        {children}        
        <Footer />
      </main>
    </div>
  
  );
};

export default Layout;
