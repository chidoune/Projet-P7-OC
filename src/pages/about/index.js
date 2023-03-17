import paysage2 from '../../assets/paysage2.png'
import Banner from '../../components/Banner/index'
import Footer from '../../components/Footer/index'
import DropAbout from '../../components/DropAbout/index'
import {dropdown} from '../../datas/dropdown'
import '../../styles/DropAbout.css'

function About() {
    return (
      <div>
        <Banner paysage={paysage2} texte = ""/>
        <div className="dropDownAll">
          <DropAbout title = "Fiabilité" content ={dropdown[0].content} />
          <DropAbout title = "Respect" content ={dropdown[1].content} />
          <DropAbout title = "Service" content ={dropdown[2].content} />
          <DropAbout title = "Responsabilité" content ={dropdown[3].content} />
        </div>
        <Footer />
      </div>
    );
}
  
  export default About;