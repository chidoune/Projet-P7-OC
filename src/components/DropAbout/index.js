import vector from '../../assets/vector.png'
import '../../styles/DropAbout.css'

function DropAbout({ title, content }) {
return (
	<div className="dropdown">
		<div className="dropdownfirst">
			<p className="dropdowntitle">{title}</p>
			<img src={vector} alt="fleche" className="dropdownimg"/>
		</div>
		<div className="dropdownsecond">
			<p className="dropdowntxt">{content}</p>
		</div>
	</div>
)
};

export default DropAbout;