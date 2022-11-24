//import picture from '../../assets/picture.png'
import '../../styles/Host.css'

function Host({name, picture}) {
  return (
    <div className="host">
      <p className="hostname">{name}</p>
			<img src={picture} alt="profil" className="hostimg"/>
    </div>
  )
};

export default Host;