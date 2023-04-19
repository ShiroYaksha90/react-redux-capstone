import './input.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getRegion } from '../../redux/features/countriesSlice'

const Input =()=>{
    const [region,setRegion]=useState('')
    const dispatch =useDispatch()
    useEffect(()=>{
        if(region !== 0){
            dispatch(getRegion(region))
        }
    },[dispatch,region])

    return (
        
        <div className='input-container'>
      <select
          type="text"
          name='region'
          value={region}
          className="select"
          onChange={(e) => setRegion(e.target.value)}
        >
            <option value="">View by Region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
        </select>
        </div>
    )
}

export default Input