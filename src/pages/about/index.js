import paysage2 from '../../assets/paysage2.png'
import Banner from '../../components/Banner/index'
import Footer from '../../components/Footer/index'
import DropAllAbout from '../../components/DropAllAbout/index'

function About() {
    return (
      <div>
        <Banner paysage={paysage2} texte = ""/>
        <DropAllAbout />
        <Footer />
      </div>
    );
}
  
  export default About;