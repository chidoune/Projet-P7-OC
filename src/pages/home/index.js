//import logo from './logo.svg';
//import './App.css';
import paysage1 from '../../assets/paysage1.png'
import Banner from '../../components/Banner/index'
import CardAll from '../../components/CardAll/index'
import Footer from '../../components/Footer/index'

function Home() {
  return (
    <div>
      <Banner paysage={paysage1} texte="Chez vous, partout et ailleurs"/>
      <CardAll />
      <Footer />
    </div>
  )
};

export default Home;