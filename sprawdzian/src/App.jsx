import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const[array,setArray] = useState([
  {id:1, title: "Jak rozpocząć pracę z aplikacją?", content:'Aby rozpocząć pracę z aplikacją, wystarczy kliknąć na przycisk "Start" w głównym menu. Następnie możesz przejść przez krótki przewodnik, który pokaże Ci wszystkie dostępne funkcje. Aplikacja jest intuicyjna i łatwa w obsłudze.'},
  {id:2, title: "Czy moje dane są bezpieczne?", content:'Aby rozpocząć pracę z aplikacją, wystarczy kliknąć na przycisk "Start" w głównym menu. Następnie możesz przejść przez krótki przewodnik, który pokaże Ci wszystkie dostępne funkcje. Aplikacja jest intuicyjna i łatwa w obsłudze.'},
  {id:3, title: "Jak mogę skontaktować się z pomocą techniczną?", content:'Aby rozpocząć pracę z aplikacją, wystarczy kliknąć na przycisk "Start" w głównym menu. Następnie możesz przejść przez krótki przewodnik, który pokaże Ci wszystkie dostępne funkcje. Aplikacja jest intuicyjna i łatwa w obsłudze.'}
  ])

  return (
    <>
      <br/>
      <div className="container-sm sb-4">

      {array.map( item => (
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="heading">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse"+item.id}
              aria-expanded="false" aria-controls={"collapse"+item.id}>
                {item.title}
              </button>
            </h5>
          </div>
          <div id={"collapse"+item.id} class="collapse" data-parent="#accordionExample">
            <div class="card-body">
              {item.content}
            </div>
          </div>
        </div>
      </div>
      ))}

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

        </div>
      </div>

      </div>
    </>
  )
}

export default App
