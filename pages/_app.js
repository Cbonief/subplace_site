import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPho,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faHighlighter } from '@fortawesome/free-solid-svg-icons';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <a href="tel:561-852-8390" class="call-floater">
        <FontAwesomeIcon icon={faPhone} size='2x' color='white'/>
      </a>
    </>
  )
}

export default MyApp
  