import vectorBigRigth from '../../assets/vectorBigRigth.png'
import vectorBigLeft from '../../assets/vectorBigLeft.png'
import background from '../../assets/background.png'
import '../../styles/Carrousel.css'
//import {test} from '../../datas/test'

function Carrousel() {
  return (
    <div className="carrousel">
			<img src={background} alt="aperçu logement" className="carrouselimg "/>
			<img src={vectorBigRigth} alt="fleche suivant" className="carrouselvector1"/>
			<img src={vectorBigLeft} alt="fleche retour" className="carrouselvector2"/>
			<p className="carrouselpage">1/4</p>
    </div>
  )
};

export default Carrousel;