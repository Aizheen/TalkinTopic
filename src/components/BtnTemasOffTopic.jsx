import React from 'react'

export default function Btn({handleTema}) {
  return (
    <>
    <button className='btn' onClick={handleTema} >Buscar temas</button>
   {/*  <button className='btn' onClick={filterFamily} >Friendly</button> */}
    </>
  )
}
