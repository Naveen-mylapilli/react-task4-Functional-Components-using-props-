import React from 'react'

function RichMan(props) {
  return (
    
    <div className="richManDiv">
        <img src={props.imgURL}alt="" ></img>
        <h2>{props.name}</h2>
        <h2>World Rank:{props.WorldRank}</h2>
        <h2>Net Wort:{props.NetWort}</h2>
      </div>
  )
}

export default RichMan
