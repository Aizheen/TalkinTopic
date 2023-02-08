import React from 'react'



export default function BtnTemasFriendly({filterFamily}) {
  return (
    <>
    <button className='btn-temas-friendly' onClick={filterFamily} >Buscar temas</button>
   {/*  <button className='btn' onClick={filterFamily} >Friendly</button> */}
    </>
  )
}
