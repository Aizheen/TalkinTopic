import React,{ useState } from 'react'
import temas from '../data'
import "../stylesheets/TalkOffTopic.css"
import Btn from './BtnTemasOffTopic';
import BtnFriendly from './BtnFriendly';


export default function TalkBtn() {


    let [Temas, setTemas] = useState([])


function filterFamily(){
 
  const filterTemas = temas.filter(tema => tema.category === "family");

  let randomTemas = Math.floor(Math.random() * filterTemas.length);
      let randomElement = filterTemas[randomTemas]
        setTemas(randomElement)
}

function filterTeen(){
  const filterTemas = temas.filter(tema => tema.category === "teen");

  let randomTemas = Math.floor(Math.random() * filterTemas.length);
      let randomElement = filterTemas[randomTemas]
        setTemas(randomElement)
}


function handleTema() {
  let currentIndex = temas.length, temporaryValue, randomIndex;
  
  // Mientras haya elementos por elegir
  while (0 !== currentIndex) {
    // Elegir un elemento restante
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Intercambiarlo con el elemento actual
    temporaryValue = temas[currentIndex];
    temas[currentIndex] = temas[randomIndex];
    temas[randomIndex] = temporaryValue;
  }

  setTemas(temas[0])
}

  return (
    <div className="container">
        <div className='vector-circle'>
      <BtnFriendly/>
       <div className="vector">
      <div className="container-title">
        <a href='/' className='title-talking'>TalkingTopic</a>
        <h1 className="title">¿De qué hablamos?</h1>
        <div class="arrow bounce"></div>
        <div className="container-btn">
          <Btn
            handleTema={handleTema}
            filterFamily={filterFamily}
            filterTeen={filterTeen}
          />
        </div>
        <div className="container-temas">
          {Temas && Temas.length !== 0 ? (

            <>
              <h1 className="title-tema"> {Temas.title} </h1>
              <p className="title-description">{Temas.description} </p>
            </>

          ) : (
            <>
              <h1 className="title-tema"> Diferentes tópicos para debatir entre familia y amigos </h1>
              <p className='title-description'>Puede que los temas no sean para todos los públicos.</p>
            </>
          )}



        </div>

{Temas && Temas.length !== 0 ? (
  <>
  </>
) : (<>

<p className='title-description-friendly'>Pueden probar para eso la versión <a href='#/friendly'>Friendly</a></p>
</>)}
            
      </div>
      </div>
      </div>
    </div>
  );
}
