import React from 'react'
import { useSelector } from 'react-redux'

const Body = () => {
    const users = useSelector(state => state.users)

    return (
        <div style={{display:'grid', height:'auto'}}>
            { 
                users.map((item)=>{
                    return (
                       <div id={item.id} key={item.id} style={{display:'flex',height:'80vh'}}>
                       <div>
                       <img src={item.photo} width={500} alt='/' />
                       </div>
                       <div>
                       <img src={item.icon} width={60} height={60} alt='/' />
                       <h2>{item.title}</h2>
                       {item.description1}
                       <p style={{backgroundColor:'#95f0ea'}}>{item.description2}</p>
                       </div>
                       </div>
                       
                    )
                })
            }
        </div>
    )
}

export default Body
