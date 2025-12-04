import 'bootstrap/dist/css/bootstrap.css'
import { useState , useEffect} from 'react'

function App() {
  const [curRate, setCurRate] = useState()
  const [tempRate, setTempRate] = useState()
  const [rateHistory, setHistory] = useState([])

  useEffect(() => {
    const rateHistory = localStorage.getItem('History')
    const ratePrev = localStorage.getItem('lastRate')

    if(ratePrev) setCurRate(praseInt(ratePrev) || 0) 
    if(rateHistory){
      setHistory(JSON.parse(rateHistory))
    }    
  },[])

  useEffect(()=>{

  },[])

  return (

    <div className="container mt-4">
      <h2>Widget oceniania gwiazdkami (advanced) </h2>
      <div className="row justify-content-center">  
        <div className="col-md-8">
        
          <div className="card mb-4">
	          <div className="card-header">
	            <h5 className="card-title mb-8">Instrukcje użytkownika</h5>
	          </div>
		        <div className="card-body">
              <ul>
                <li><strong>Mysz: </strong>Najedź na gwiazdkę aby zobaczyć podgląd, kliknij aby ustawić ocenę</li>
                <li><strong>Klawiatura: </strong>Użyj strzałek ← → aby zmienić ocenę, Enter aby potwierdzić, Escape aby wyczyścić</li>
                <li><strong>Przycisk: </strong>Użyj "Wyczyść ocenę" aby zresetować ocenę do 0</li>
                <li><strong>Dostępność: </strong>Widget jest w pełni dostępny dla czytników ekranu</li>
              </ul>
		        </div>
          </div>

          <div className="card mb-4">
	          <div className="card-header">
	            <h5 className="card-title mb-8">Oceń produkt</h5>
	          </div>
    
		        <div className="card-body text-center">
              <div className="star-rating-widget mb-3">
                {[1,2,3,4,5].map(()=>{ return(
                  <button type="button" className="btn btn-link">test</button>
                )})}
              </div>
                <span className="badge bg-primary mb-2"><h4><strong>Ocena:</strong></h4></span>
                <p className="text-muted">brak oceny</p>
                <button type="button" className="btn btn-warning mb-2">Wyczyść ocenę</button>
                <p className="text-info">podglad: </p>
		        </div>
          </div>

          <div className="card mb-4">
	          <div className="card-header">
	            <h5 className="card-title mb-8">Statystyki ocen</h5>
	          </div>
    
		        <div className="card-body">
    
		        </div>
          </div>
{/*
text-primary
text-info
text-success
text-warning
*/}
          <div className="card mb-4">
	          <div className="card-header">
	            <h5 className="card-title mb-8">Obsługa klawiatury</h5>
	          </div>
    
		        <div className="card-body">
                   <div className="row">

                <div className="col-md-6">

                  <h6>Nawigacja:</h6>

                  <ul className="list-unstyled">

                    <li><kbd>←</kbd> Zmniejsz ocenę</li>

                    <li><kbd>→</kbd> Zwiększ ocenę</li>

                  </ul>

                </div>

                <div className="col-md-6">

                  <h6>Akcje:</h6>

                  <ul className="list-unstyled">

                    <li><kbd>Enter</kbd> Potwierdź ocenę</li>

                    <li><kbd>Escape</kbd> Wyczyść ocenę</li>

                  </ul>

                </div>

              </div>

              <div className="mt-3">

                <small className="text-muted">

                  <strong>Wskazówka:</strong> Kliknij na widget aby aktywować tryb klawiatury, 

                  następnie użyj strzałek do nawigacji.

                </small>

              </div>

            </div>
          </div>

        </div>



          <div className="card">
	          <div className="card-header">
	            <h5 className="card-title mb-8">Informacje o logowaniu</h5>
	          </div>
    
		        <div className="card-body">
                  <p className="mb-0">

            <strong>Konsola przeglądarki:</strong> Wszystkie zmiany oceny są logowane w formacie 

            <code className="ml-1">"Ocena: N"</code> gdzie N to wartość od 0 do 5.

            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.

          </p>
		        </div>
          </div>
      </div>
    </div>

  )
}

export default App
