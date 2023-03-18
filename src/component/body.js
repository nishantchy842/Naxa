import React from 'react'
import { useSelector } from 'react-redux'

const Body = (props) => {
    const users = useSelector(state => state.users)

    return (
        <div style={{display:'grid', height:'auto'}}>
            { 
                users.map((item)=>{
                    return (
                       <div className='layout' id={item.title} key={item.id} style={{
                        display:'flex',
                        height:'100vh',
                        padding:'20px'
                    }}>
                       <div style={{padding:'150px'}}>
                       <img src={item.icon} width={300} alt='/' />
                       </div>
                       <div>
                       <img src={item.photo} width={60} height={60} alt='/' style={{border: '5px solid #1C6EA4'
                    }} />
                       <h2>{item.title}</h2>
                       <p style={{
                        backgroundColor:props.bgcolor,
                        borderRadius: '0px 40px 0px 40px',
                        color:props.color
                    }}>{item.description1}</p>
                       <p style={{
                        backgroundColor:'#95f0ea',
                        borderRadius: '0px 40px 0px 40px',
                        color:props.color
                    }}>{item.description2}</p>
                       </div>
                       </div>
                       
                    )
                })
            }
        </div>
    )
}

export default Body
