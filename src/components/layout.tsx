import Link from "next/link";
import { Footer } from "./Footer";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "../layout.module.css";

const Layout = ({ }) => {
  

  return (
    <div className={container}>
      
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link href="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link href="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link href="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        
        
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
