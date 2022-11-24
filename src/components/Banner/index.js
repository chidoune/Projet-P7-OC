import '../../styles/Banner.css'
 
function Banner({paysage, texte}) {
  return (
    <div className="banner">
      <img src={paysage} alt="paysage" className="bannerimg"/>
      <div className="bannertxt">{texte}</div>
    </div>
  )
};

export default Banner;