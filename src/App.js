import React, { useEffect,useState } from 'react'
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { fetchUsers } from './action';
import Header from './component/header';
import Body from './component/body';

function App() {
  // const [info,setInfo]=useState([])
  // useEffect(()=>{
  //   fetch('https://admin.naxa.com.np/api/services').then(res=>res.json().then(data=>setInfo(data)))
  // },[])
 const disptach=useDispatch()
//  const users=useSelector(state=>state.users)  
 useEffect(()=>{
  disptach(fetchUsers())
 },[]) 
  return (
    <div className="App">
     <h1>Naxa</h1>
    <Header color='black' />
    <Body bgcolor='#3A7DBF' color='black' />
    </div>
  );
}

export default App;
