import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
export default function Main(props) {
    const { data } = props
    let prayerTimes = data?.data?.timings
    prayerTimes = Object.entries(prayerTimes)
    console.log(prayerTimes)

    return (
    <div className='Main'>
        {prayerTimes.map((prayer,index)=><Card key={index} prayer = {prayer}></Card>)}
    </div>
  )
}
