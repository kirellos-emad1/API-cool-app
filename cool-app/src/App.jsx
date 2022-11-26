import React,{useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'
function App() {
  const [allData, setAllData] =  useState([])
  const [categories, setCategories] =  useState([])

  useEffect(()=>{
    async function getCategory() {
      const res = await fetch('https://api.publicapis.org/categories')
      const data = await res.json()
      setCategories(data.categories)
    }
    getCategory()
  },[])
  useEffect(()=>{
    async function getEntriesData() {
      const res = await fetch('http://localhost:3000/API')
      const entriesData = await res.json()
      let APIData = []
      entriesData.forEach(d=>{
        APIData.push({
          id: nanoid(),
          API: d.API,
          description: d.Description,
          category: d.Category,
          link: d.Link
        })
        setAllData(APIData)
      })
    }
    getEntriesData()
  },[])
  return (
    <div>
      <Navbar allData={allData} />
      <Main allData={allData} categories={categories} />
    </div>
  )
}

export default App
