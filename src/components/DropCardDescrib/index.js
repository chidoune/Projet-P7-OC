import vector from '../../assets/vector.png'
import '../../styles/DropCardDescrib.css'

function DropCardDescrib({ description }) {
return (
	<div className="dropdown1">
		<div className="dropdownfirst1">
			<p className="dropdowntitle1">Description</p>
			<img src={vector} alt="fleche" className="dropdownimg1"/>
		</div>
		<div className="dropdownsecond1">
			<p className="dropdowntxt1">{description} Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.</p>
		</div>
	</div>
)
};

export default DropCardDescrib;