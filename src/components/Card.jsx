import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Card(props) {
    const {prayer} = props
  return (
    <div className='card'>
        <h1>{prayer[0]}</h1>
        <p>{prayer[1]}</p>
    </div>
  )
}
