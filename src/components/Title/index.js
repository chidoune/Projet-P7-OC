import '../../styles/Title.css'
 
function Title({title, location}) {
  return (
    <div className="title">
      <h1 className="titleh1">{title} Cozy Loft on the canal Martin</h1>
      <p className="titletxt">{location} Paris, Ile de France</p>
    </div>
  )
};

export default Title;