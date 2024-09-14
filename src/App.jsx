import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Main from './components/Main'
import Header from './components/Header'
export default function App() {
    const [city , setCity] = useState()
    const [contry , setContry] = useState()
    const [data , setData] = useState(null)
    function getCity() {
        setCity(geoplugin_city())
    }
    function getContry() {
      setContry(geoplugin_countryName())
    }
    useEffect(()=>{
      getCity()
      getContry()
      async function getPrayrTimes() {
        const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${contry}`)
        const data = await response.json()
        setData(data)
        console.log(data)
      }
      getPrayrTimes()
    },[])
  return (
  
    <div className='container'>
      
{ data ?  <Header data={data} city={city}></Header> : 
 <div class="loader"></div>
}  
{ data &&  <Main data={data} ></Main>}  
  </div>
  )
}
