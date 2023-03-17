import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-scroll';
import { fetchUsers } from '../action'

const Header = (props) => {
    const users = useSelector(state => state.users)


    return (
        <div>
            <header style={{ display: 'flex' ,backgroundColor:'#e0bbb8'}}>
                {
                    users.map(item => {
                        return (
                            <div style={{backgroundColor:'#d9d5d4', marginRight:'2px', padding:'10px'}} key={item.id}>
                                <li style={{listStyle:'none', cursor:'pointer',color: props.color}}><Link to={item.title} spy={true} smooth={true} offset={-100} duration={500}>{item.title}</Link></li>
                            </div>
                        )
                    })
                }
            </header>
        </div>
    )
}

export default Header
