import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Contact from './components/searchood/Contact'
import Search from './components/searchood/Search'

export let url ="https://food-zone-bppr.vercel.app/"
const App = () => {
  let [data,setdata]=useState(null)
  let [filter_data ,setfilter_data]=useState(null)
  let [loading,setloading]=useState(false)
  let [error,seterror]=useState(false)
  let [btnfilter,setbtnfilter]=useState("All")
useEffect(()=>{
const fetch_data= async ()=>{
  setloading(true)
  try{
  let response=await fetch(url)
  let resData= await response.json()
  console.log(resData)
  setdata(resData)
  setfilter_data(resData)

  setloading(false)
  }catch (error){
    seterror("Unable to find data")
  } 



}
fetch_data();
},[])

if(loading) return <h1>Loading...</h1>
if(error) return <h1>{error}</h1>

const Search_food=(e)=>{
  const search_value= e.target.value
  console.log(search_value)
  if(search_value===""){
    setfilter_data(null)
  }

  const filter=data?.filter((food)=>food.name.toLowerCase().includes(search_value.toLowerCase()))
  setfilter_data(filter)
 
}

const btns=(type)=>{
    if(type==="All"){
      setbtnfilter("All")
      setfilter_data(data)
      return;
    }
    else{
      const filter=data.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))
    
    setbtnfilter(type)
    setfilter_data(filter)
    }
}

  const filterbtn=[
    {
      name:"All",
      type:"All",
    },
    {
      name:"Breakfast",
      type:"Breakfast"
    },
    {
      name:"Lunch",
      type:"Lunch"
    },
    {
      name:"Dinner",
      type:"Dinner"
    },
    {
      name:"Nothing",
      type:"Nothing"
    }
  ]
 


  return (
   <>
   <Container>
   <TopContainer>
    <div className="image">
      <img src="/logo.svg" alt="" />
    </div>
    <div className="search">
    <input type="text" placeholder='Search food' onChange={Search_food}/>
    </div>
   </TopContainer>

   <FilterContainer>
    {
      filterbtn.map(( value)=>(
        <Button key={value.type} onClick={()=>btns(value.type)}>{value.type}</Button>
      ))
    }
  
   
   </FilterContainer>

   </Container>
   <Search data={filter_data} />
   <Contact></Contact> 

   </>
  )
}

export default App

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f22f2f;
  }
`;
