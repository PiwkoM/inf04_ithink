import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const[array,setArray] = useState([
  {id:1, title: "Jak rozpocząć pracę z aplikacją?", content:'Aby rozpocząć pracę z aplikacją, wystarczy kliknąć na przycisk "Start" w głównym menu. Następnie możesz przejść przez krótki przewodnik, który pokaże Ci wszystkie dostępne funkcje. Aplikacja jest intuicyjna i łatwa w obsłudze.'},
  {id:2, title: "Czy moje dane są bezpieczne?", content:'Aby rozpocząć pracę z aplikacją, wystarczy kliknąć na przycisk "Start" w głównym menu. Następnie możesz przejść przez krótki przewodnik, który pokaże Ci wszystkie dostępne funkcje. Aplikacja jest intuicyjna i łatwa w obsłudze.'},
  {id:3, title: "Jak mogę skontaktować się z pomocą techniczną?", content:'Aby rozpocząć pracę z aplikacją, wystarczy kliknąć na przycisk "Start" w głównym menu. Następnie możesz przejść przez krótki przewodnik, który pokaże Ci wszystkie dostępne funkcje. Aplikacja jest intuicyjna i łatwa w obsłudze.'}
  ])


  const[activeItem,setActive] = useState(null)

  const HandleClick = (itemID) => {
      setActive(activeItem === itemID ? null : itemID) // self explanatory
  }

  return (
    <>
      <br/>
      <div className="container-sm sb-4">
      {/* i still have no clue what sb-4 is but might aswell put it everywhere lmao */}
      <div className="accordion" id="accordionExample">
      {array.map( item => (
        <div className="card">
          <div className="card-header" id="heading">
            <h5 className="mb-0">  {/* l-22 ditto */}
              <button className="btn btn-link" type="button"
              aria-expanded={activeItem === item.id ? 'true' : 'false'} aria-controls={"collapse"+item.id} onClick={() => HandleClick(item.id)}>
                {/* 
                react functions conflict with bootstraps data-toggle stuff or sth and im not learning this stupid libraries' special attributes
                */}
                {item.title}
              </button>
            </h5>
          </div>    
          {/*i completely forgot about the $ trick in most languages, too bad i'll forget about it later on anyway*/}
          <div id={"collapse"+item.id} className={`collapse ${activeItem === item.id ? "show" : ""}`} data-parent="#accordionExample">
            <div className="card-body">
              {item.content}
            </div>
          </div>
        </div>
      ))}
      </div>

      <br/>
      <div className="card">
        <div className="card-header">
          <h5>Instrukcje</h5>
        </div>
        <div className="card-body">
          <ul>
            <li> Kliknij na pytanie aby otworzyć odpowiedź</li>
            <li> Tylko jedno pytanie może być otwarte jednocześnie</li>
            <li> Kliknięcie ponownie na otwarte pytanie je zamyka</li>
            <li> Otwieranie nowego pytania automatycznie zamyka poprzednie</li>
            <li> Sprawdź konsolę przeglądarki aby zobaczyć logi otwierania/zamykania</li>
            <li> Akordeon używa Bootstrap collapse dla płynnych animacji</li>
          </ul>
        </div>
      </div>
      <br/>
      <div className="card">
        <div className="card-header">
          <h5>Podsumowanie</h5>
        </div>
        <div className="card-body row">
          <div className="col-md-4">
            <h5 className="text-primary">{array.length}</h5>
            <h5 className="text-muted">Pytania</h5>
          </div>
          <div className="col-md-4">
            <h5 className="text-info">{activeItem ? 1 : 0}</h5>
            <h5 className="text-muted">Otwarte</h5>
          </div>
          <div className="col-md-4">
            <h5 className="text-success">{array.length - (activeItem ? 1 : 0)}</h5>
            <h5 className="text-muted">Zamknięte</h5>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default App
