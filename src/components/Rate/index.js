import {logementList} from '../../datas/logements'
import { useParams } from 'react-router-dom'
import starfull from '../../assets/starFull.png'
import starEmpty from '../../assets/starEmpty.png'
import '../../styles/Rate.css'


function Rate() {

  const { id } = useParams()
  const logement = logementList.filter((x) => x.id === id)[0]
  const stars = logement.rating
  console.log('nombre etoiles:',stars)

  const arrayStars = Array(5).fill()
  console.log(arrayStars)

  return (
    <div>
      {arrayStars.map((_, index) => stars >= index + 1 ? 
        (<img className= "rateimg" src = {starfull} alt = "etoile pleine"/>) : (<img className= "rateimg" src = {starEmpty} alt = "etoile vide"/>)
        )}
    </div>
  ) 
};

export default Rate;