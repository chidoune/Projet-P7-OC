import paysageabout from '../../assets/paysageabout.png'
import '../../styles/Banner.css'
 
function BannerAbout() {
  return (
    <div className="banner">
			<img src={paysageabout} alt="paysage mer" className="bannerimg"/>
    </div>
  )
};

export default BannerAbout;
