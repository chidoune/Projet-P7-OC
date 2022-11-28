import Tag from '../Tag/index'
import '../../styles/TagAll.css'


function TagAll({tags}) {
  return (
    <div className="tagAll">
      	{tags.map((x, index) => (
        	<Tag
            	key={index}
            	tag={x}
          />
     	))}
    </div>
  )
};
   
export default TagAll;