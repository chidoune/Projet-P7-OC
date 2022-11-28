import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../styles/Card.css'

function Card ({ title, cover, id }) {
    return (
    <Link to={`/logement/${id}`} className="card">
        <img src={cover} alt="aperçu logement" className="cardcover"/>
				<div className="cardtitle">{title}</div>
    </Link>
  )
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
}
 
export default Card;