import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Root.css';
import Header from './compoments/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InverstCoin from './compoments/InverstCoin';
import InverstCoinAgain from './compoments/InverstCoinAgain';
import Bussinessman from './compoments/Bussinessman';
import SldierCrad from './compoments/SldierCrad';
import Partnership from './compoments/Partnership';
import Footer from './compoments/Footer';
import Feedbackpage from './compoments/Feedbackpage';
import Cardcoin from './compoments/Cardcoin';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Preloder from './compoments/Preloder';
import BackToTop from './compoments/BackToTop';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();


    const preloader = document.getElementById('preloader')
    setTimeout(() => {
      preloader.classList.add('d-none')
      preloader.classList.add('pointer-event-none')
      document.body.classList.remove('overflow-hidden')
    }, 2500)
    document.body.classList.add('overflow-hidden')

  }, []);
  return (
    <>
      <Preloder />
      <Header />
      <InverstCoin />
      <InverstCoinAgain />
      <Bussinessman />
      <Partnership />
      <SldierCrad />
      <Cardcoin />
      <Feedbackpage />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
