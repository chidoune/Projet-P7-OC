import { useState } from 'react'
import vector from '../../assets/vectorBigLeft.png'
import '../../styles/DropAbout.css'

function DropAbout({ title, content }) {
const [isOpen, setIsOpen] = useState(false)
return isOpen ? (
	<div className="dropdown">
		<div className="dropdownfirst">
			<p className="dropdowntitle">{title}</p>
			<img onClick={() => setIsOpen(false)} src={vector} alt="fleche" className="dropdown-img-false"/>
		</div>
		<div className="dropdownsecond">
			<p className="dropdowntxt">{content}</p>
		</div>
	</div>
) : (
	<div className="dropdown">
		<div className="dropdownfirst">
			<p className="dropdowntitle">{title}</p>
			<img onClick={() => setIsOpen(true)} src={vector} alt="fleche" className="dropdown-img-true"/>
		</div>
	</div>
)
};

export default DropAbout;
