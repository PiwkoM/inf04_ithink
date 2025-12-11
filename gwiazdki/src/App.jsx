import { useState , useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [curRate, setCurRate] = useState(() => {
    try {
      const current = localStorage.getItem("lastRate")
      console.log("Loaded lastRate from localStorage:", current)
      return current ? JSON.parse(current) : 0
    } catch (e) {
      console.error("Failed to parse lastRate:", e)
      return 0
    }
  })
  const [rateHistory, setHistory] = useState(() => {
    try {
      const hist = localStorage.getItem("History")
      console.log("Loaded History from localStorage:", hist)
      return hist ? JSON.parse(hist) : []
    } catch (e) {
      console.error("Failed to parse History:", e)
      return []
    }
  })
  const [tempRate, setTempRate] = useState(0)



  useEffect(() => {
    localStorage.setItem("lastRate",JSON.stringify(curRate))
  },[curRate])

  useEffect(() => {
    localStorage.setItem("History",JSON.stringify(rateHistory))
  },[rateHistory])

  const handleHover = (i) => {
    setTempRate(i)
  }

  const getStar = (i) =>{
    if(curRate && tempRate !=0){
      return i <= tempRate ? '★' : '☆'
    } else if(curRate && i<=curRate){
      return '★'
    } else {
      return '☆'
    }

  }
  
  const rateName = (intake) =>{
    switch(intake){
      case 1:
        return "Bardzo słaba"
      case 2:
        return "Słaba"
      case 3: 
        return "Przeciętna"
      case 4:
        return "Dobra"
      case 5:
        return "Bardzo dobra"
    }
  }

  const clearRate = () =>{
    setCurRate(0)
    setTempRate(0)
  }

  const clearHistory = () =>{
    setHistory([])
  }

  const handleHistory = (index) => {
    setHistory(prev => [...prev,index])
  }

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
                {[1,2,3,4,5].map((index)=>{ return(
                  <button 
                  style={{ fontSize: '2rem', border: 'none', background: 'none' }}
                  type="button" role="radio"
                  className={`btn btn-link ${( (index <= tempRate || index <=curRate) ? 'text-warning' : 'text-muted')}`}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => { document.getElementById("tet").style.display = "none"; setTempRate(0); }}
                  onClick={() => {setCurRate(index); handleHistory(index);}}>
                    <span className="star-icon">{getStar(index)}</span>
                  </button>
                )})}
              </div>
                <span className="badge bg-primary mb-2"><h4><strong>Ocena: {curRate}</strong></h4></span>
                <p className="text-muted">
                {(curRate!=0 ? rateName(curRate) : "Brak oceny")}
                </p>
                <button type="button" className="btn btn-warning mb-2" onClick={clearRate}>Wyczyść ocenę</button>
                <p className="text-info" id="tet" style={{display: 'none'}}>Podgląd: {rateName(tempRate)}</p>
		        </div>
          </div>
          {rateHistory.length > 0 && (
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Historia ocen</h5>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={clearHistory}
                >
                  Wyczyść historię
                </button>
              </div>
    
		        <div className="card-body">
    
		        </div>
          </div>
          )}


          <div className="card mb-4">
	          <div className="card-header">
	            <h5 className="card-title mb-8">Statystyki ocen</h5>
	          </div>
		        <div className="card-body">
                <p>t</p>
                <p>t</p>
                <p>t</p>
                <p>t</p>
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
