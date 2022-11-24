import {logementList} from '../../datas/logements'
import {useParams} from 'react-router-dom'
import {useState} from 'react'
import vectorBigRigth from '../../assets/vectorBigRigth.png'
import vectorBigLeft from '../../assets/vectorBigLeft.png'
import '../../styles/Carrousel.css'


function Carrousel({pictures}) {
  const { id } = useParams()
  const logement = logementList.filter((x) => x.id === id)[0]
  console.log(logement.pictures)

  const [current, setCurrent] = useState(0)
  const length = logement.pictures.length
  console.log(length)

  const prevPicture = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)}

  const nextPicture = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)}

    console.log(current)

  return (
    <div className="carrousel">
			{logement.pictures.map((picture, index) => { return (
        <div>
          {index === current && (<img src={picture} alt="aperçu logement" className="carrouselimg "/>)}
        </div>
      )
       })}
       {length === 1 ? (
        <div></div>
       ) : (
        <div>
          <img onClick={nextPicture} src={vectorBigRigth} alt="fleche suivant" className="carrouselvector1"/>
			    <img onClick={prevPicture} src={vectorBigLeft} alt="fleche retour" className="carrouselvector2"/>
        </div>
       )}
			<p className="carrouselpage">{current+1}/{length}</p>
    </div>
  )
};

export default Carrousel;