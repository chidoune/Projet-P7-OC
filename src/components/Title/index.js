import '../../styles/Title.css'
 
function Title({title, location}) {
  return (
    <div className="title">
      <h1 className="titleh1">{title}</h1>
      <p className="titletxt">{location}</p>
    </div>
  )
};

export default Title;