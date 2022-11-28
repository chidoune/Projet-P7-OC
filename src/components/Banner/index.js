import '../../styles/Banner.css'
 
function Banner({paysage, texte}) {
  return (
    <div className="banner">
      <div className="banner-background"></div>
      <img src={paysage} alt="paysage" className="bannerimg"/>
      <div className="bannertxt">{texte}</div>
    </div>
  )
};

export default Banner;