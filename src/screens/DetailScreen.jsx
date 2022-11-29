import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const DetailScreen = () => {
  const [data, setData] = useState({})
  const {id} = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  },[])

  return (
    <div className='main-screen'>
      <h1>Detail</h1>
      <h2>{data.name}</h2>
    </div>
  )
}

export default DetailScreen