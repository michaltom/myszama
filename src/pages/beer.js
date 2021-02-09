import React, { useState } from "react"

const Beer = () => {
  const [beer, setBeer] = useState()

  const handleBeer = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(response => response.json())
      .then(result => {
        setBeer(JSON.stringify(result))
      })
      .catch(err => console.log(err))
  }

  //const beerParse = JSON.parse(beer)
  return (
    <>
      <button onClick={handleBeer}>random beer</button>
      <div>random beer : {beer}</div>
    </>
  )
}

export default Beer
