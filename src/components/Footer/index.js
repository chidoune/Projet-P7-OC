import logofooter from '../../assets/logofooter.png'
import '../../styles/Footer.css'
 
function Footer() {
  return (
    <div className="footer">
      <img src={logofooter} alt="logo kasa" className="footerlogo"/>
      <p className="footertxt">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer;