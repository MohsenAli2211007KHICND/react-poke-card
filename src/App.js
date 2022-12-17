import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { PokeApiHook } from './hooks/PokeMenHook';
import { ChildPoke } from './components/ChildPokemon';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const hookApi = PokeApiHook();
  const [pokemenUrl, setPokemenUrl] = useState('')

  async function urlsfetchHandler(e) {
    const childlinkResponse = await fetch(e.target.id);
    const childLinkresult = await childlinkResponse.json();
    setPokemenUrl(childLinkresult);
  }

  return (

    <div className="App container-fluid">
      <div className='row text-center'>
        <div className='list-div col-3 mt-4 '>
          <div class="accordion accordion-flush" id="accordionFlush">
            <div class="accordion-item">
              <h2 class="accordion-header text-center" id="flush-headingOne">
                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse" aria-expanded="false" aria-controls="flush-collapse">
                 <h4> PokeMon</h4>
                </button>
              </h2>
              <div id="flush-collapse" class="accordion-collapse collapse show" aria-labelledby="flush-heading" data-bs-parent="#accordionFlush">
                <div class="accordion-body">
                  {hookApi.map((element, i) => {
                    return <h3 onClick={urlsfetchHandler} id={element.url} key={i}>{element.name}</h3>
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='child-div offset-1 col-8'>
          {pokemenUrl !== '' ? <ChildPoke pokemenUrl={pokemenUrl} /> : ''}
        </div>
      </div>
    </div>
  );
}

export default App;
