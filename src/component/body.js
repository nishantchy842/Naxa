import React from 'react'
import { useSelector } from 'react-redux'

const Body = (props) => {
    const users = useSelector(state => state.users)

    return (
        <div style={{display:'grid', height:'auto'}}>
            { 
                users.map((item)=>{
                    return (
                       <div id={item.title} key={item.id} style={{display:'flex',height:'80vh'}}>
                       <div>
                       <img src={item.photo} width={500} alt='/' />
                       </div>
                       <div>
                       <img src={item.icon} width={60} height={60} alt='/' style={{border: '5px solid #1C6EA4'
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
