import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  const [count, setCount] = useState(0)
  var groupOneChecked = true;
  var groupTwoChecked = true;
  var groupThreeChecked = true;
  var imageTable = [
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
  ]
  return (
    <>
      <h2>Kategorie zdjęć</h2>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="check1" onChange={test} checked="true"/>
        <label htmlFor="check1">Kwiaty</label>
        
        <input class="form-check-input" type="checkbox" id="check2" onChange={test} checked="true"/>
        <label htmlFor="check2">Zwierzęta</label>
        
        <input class="form-check-input" type="checkbox" id="check3" onChange={test} checked="true"/>
        <label htmlFor="check3">Samochody</label>
      </div>
      <div>
        {imageTable.filter(_img => _img.category = 1).map(n =>(
          <>
          <img id={n.id} alt={n.alt} src={"assets/"+n.filename}/>
          <button type="button" className=""></button>
          </>
        ))}
      </div>
    </>
  )
}

export default App
