import paysage from '../../assets/paysage.png'
import '../../styles/Banner.css'
 
function BannerHome() {
  return (
    <div className="banner">
      <img src={paysage} alt="paysage mer" className="bannerimg"/>
      <p className="bannertxt">Chez vous, partout et ailleurs</p>
    </div>
  )
};

export default BannerHome;