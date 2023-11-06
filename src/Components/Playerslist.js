import React from 'react'
import Player from './Player'

function Playerslist({players}) {
  return (
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"50px"}}>

{players.map((el)=><Player el={el}/>)}

    </div>
  )
}

export default Playerslist