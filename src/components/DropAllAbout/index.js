import {dropdown} from '../../datas/dropdown'
import DropAbout from '../DropAbout/index'
import '../../styles/DropAllAbout.css'


function DropAllAbout() {
  return (
    <div className="dropDownAll">
      	{dropdown.map((x) => (
        	<DropAbout
            	key={x.id}
            	title={x.title}
            	content={x.content}
          />
     	))}
    </div>
  )
};
   
export default DropAllAbout;