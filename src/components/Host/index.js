import host from '../../assets/host.png'
import '../../styles/Host.css'

function Host({name}) {
  return (
    <div className="host">
      <p className="hostname">{name}Alexandre Dumas</p>
			<img src={host} alt="profil" className="hostimg"/>
    </div>
  )
};

export default Host;