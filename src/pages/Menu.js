import React from 'react'
import {Data} from '../data/data'
import Menuitem from '../components/Menuitem'
import { MenuItem } from '@mui/material'
import "../styles/Menu.css"

function Menu() {
    return (
        <div className="menu">
            <div className="menuTitle">
                <div className="menuList">
                    {Data.map((item,key)=> {
                            return (
                                <Menuitem key={key} 
                                          image={item.image} 
                                          name={item.name} 
                                          price={item.price} />
                            )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu
