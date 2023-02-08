import React,{ useState } from 'react'
import temas from '../data'
import "../stylesheets/Talkfriendly.css"
import BtnTemasFriendly from './BtnTemasFriendly';
import BtnOffTopic from './BtnOffTopic';

export default function TalkBtn() {

   /*  const allCategories = [...new Set(temas.map(tema => tema.category))] */

    const [Temas, setTemas] = useState([])


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


function handleTema(){
  let randomTemas = Math.floor(Math.random() * temas.length);
  let randomElement = temas[randomTemas]
    setTemas(randomElement)
}


  return (
    <div className="container-friendly">
        <div className='vector-circle-friendly'>
      <BtnOffTopic/>
       <div className="vector-friendly">
      <div className="container-title-friendly">
        <a href='/' className='title-talking-friendly'>TalkingTopic</a>
        <h1 className="title-friendly">¿De qué hablamos?</h1>
        <div class="arrow-friendly"></div>
        <div className="container-btn-friendly">
          <BtnTemasFriendly
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
              <h1 className="title-tema"> Diferentes tópicos ideales para hablar entre familia </h1>
              <p className='title-description'>Si te interesa abarcar todos los tópicos podes probar Off Topic</p>
            </>
          )}
        </div>


        {Temas && Temas.length !== 0 ? (
  <>
  </>
) : (<>

<p className='title-description-offtopic'>Pueden probar para eso la versión <a href='/'>Off Topic</a></p>
</>)}
      </div>
      </div>
      </div>
    </div>
  );
}

