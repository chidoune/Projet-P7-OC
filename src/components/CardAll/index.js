import {logementList} from '../../datas/logements'
import Card from '../Card/index'
import '../../styles/CardAll.css'


function CardAll() {
  return (
    <div className="cardAll">
      	{logementList.map((x) => (
        	<Card
            	key={x.id}
            	title={x.title}
            	cover={x.cover}
				id={x.id}
          />
     	))}
    </div>
  )
};
   
export default CardAll;
