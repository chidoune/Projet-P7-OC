import { useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel/index'
import Title from '../../components/Title/index'
import TagAll from '../../components/TagAll/index'
import DropAbout from '../../components/DropAbout/index'
import Host from '../../components/Host/index'
import Rate from '../../components/Rate/index'
import Footer from '../../components/Footer/index'
import {logementList} from '../../datas/logements'
import '../../styles/Container-info.css'


function Logement() {
const { id } = useParams()
  console.log(id)
  const logement = logementList.filter((x) => x.id === id)[0]
  console.log('voici le logement:',logement)
  console.log('voici id du logement:',logement.id)

return (
    <div>
      <Carrousel pictures={logement.pictures} />
        <div className="container-info">
          <div>
            <Title title={logement.title} location={logement.location} />
            <TagAll tags={logement.tags} />
          </div>  
          <div>
            <Host name={logement.host.name} picture={logement.host.picture} />
            <Rate />
          </div> 
        </div>
        <div className="container-info-drop">
          <DropAbout title="Description" content={logement.description} />
          <DropAbout title="Equipements" content={logement.equipments.map((x, index) => <li> {x} </li> )} />
        </div>
      <Footer />
    </div>
)
};

export default Logement;

//if (!id) return (error) 
//else return (div)