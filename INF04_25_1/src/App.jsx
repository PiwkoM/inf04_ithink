import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function App() {

  useEffect(() => {
    document.getElementById("pictures1").style.display = "flex"
    document.getElementById("pictures2").style.display = "flex"
    document.getElementById("pictures3").style.display = "flex"
    document.getElementById("check1").checked = true
    document.getElementById("check2").checked = true
    document.getElementById("check3").checked = true
  },[])

  const [imageTable,setImageTable] = useState([
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
  ])

  const addCount = (id) => {
    //map thru table, check if clicked img id is the same as one in table, set count to +1 
    // via table mapping, else do nothing with the img 
    setImageTable(imageTable.map(img => 
      img.id === id ? {...img, downloads: img.downloads + 1} : img
    ))
    //apparently adding a function like this: onClick={test()} calls it on render, which makes and doesnt make sense, because
    // onChange behaves fine with the following syntax, but onClick completely bricks itself?
    //and passing it thru an arrow function fixes it...? 
  }

  //js gracing my ass with .replace hallelujah
  const ToggleVisPrototype = (e) => {
    const _dynID = document.getElementById((e.target.id).replace("check","pictures"))
    _dynID.style.display = e.target.checked ? "flex" : "none"
  }

  return (
    <>
      <h2>Kategorie zdjęć</h2>
      <div style={{display: 'flex', flexDirection:'row', gap:'10px'}}>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="check1" onChange={ToggleVisPrototype}/>
          <label htmlFor="check1">Kwiaty</label>
        </div>  
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="check2" onChange={ToggleVisPrototype}/>
          <label htmlFor="check2">Zwierzęta</label>
        </div>
        <div className="form-check form-switch">  
          <input className="form-check-input" type="checkbox" id="check3" onChange={ToggleVisPrototype}/>
          <label htmlFor="check3">Samochody</label>
        </div>
      </div>

      <div style={{gap:'10px'}}  id="pictures1">
        {imageTable.filter(_img => _img.category == 1).map(n =>(
          <>
          <div>
            <img id={n.id} alt={n.alt} src={"/assets/"+n.filename}
            style={{textAlign:'center', borderRadius:'8px'}}/>
            <br/>
            <h3>Pobrań: {n.downloads} <button type="button" className="btn btn-success" onClick={() => addCount(n.id)}>Pobierz</button></h3>
          </div>
          </>
        ))}
      </div>
      <div style={{gap:'10px', flexWrap: 'wrap'}} id="pictures2">
      {imageTable.filter(_img => _img.category == 2).map(n =>(
          <>
          <div>
            <img id={n.id} alt={n.alt} src={"/assets/"+n.filename}
            style={{textAlign:'center', borderRadius:'8px'}}/>
            <br/>
            <h3>Pobrań: {n.downloads} <button type="button" className="btn btn-success" onClick={() => addCount(n.id)}>Pobierz</button></h3>
          </div>
          </>
        ))}
      </div>
      <div style={{gap:'10px'}}   id="pictures3">
      {imageTable.filter(_img => _img.category == 3).map(n =>(
          <>
          <div>
            <img id={n.id} alt={n.alt} src={"/assets/"+n.filename}
            style={{textAlign:'center', borderRadius:'8px'}}/>
            <br/>
            <h3>Pobrań: {n.downloads} <button type="button" className="btn btn-success" onClick={() => addCount(n.id)}>Pobierz</button></h3>
          </div>
          </>
        ))}
      </div>
    </>
  )
}

export default App
