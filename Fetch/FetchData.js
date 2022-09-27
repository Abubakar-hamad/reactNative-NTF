import React, { useEffect, useState } from 'react'
import axios from "axios"






const UseFetch = (url) => {
    const [data , setData] = useState('') 
    const [isLoading , setIsLoading] = useState(false)
    const [isError , setIsError] = useState(false)
  
  
    useEffect(()=>{
      const fetchData = async()=>{
          setIsLoading(true)
          try {
              const res = await axios.get(`http://192.168.43.99:5000/${url}`)
  
              setData(res.data)
          } catch (error) {
              setIsError(error)
              console.log(error)
          }
          setIsLoading(false)
      }
      fetchData()
  
  
    } ,[url])
  
    const reFetchData = ()=>{
      setIsLoading(true)
      try {
          const res =  axios.get(`http://192.168.43.99:5000/${url}/`)
          setData(res.data)
      } catch (error) {
          setIsError(error)
          console.log(error);
      }
  
      setIsLoading(false)
    }
    return {data  , isLoading , isError , reFetchData}
  }



  
  export default UseFetch
