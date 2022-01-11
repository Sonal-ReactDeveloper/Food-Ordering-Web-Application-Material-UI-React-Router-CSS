import React from 'react'
import Aboutpage from "../assets/Aboutpage.jpg";
import "../styles/About.css"

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${Aboutpage})`}}>

            </div>
            <div className="aboutBottom">
                <h1>About US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi cupiditate quaerat autem aspernatur explicabo deserunt sed ducimus repudiandae, voluptate id in vel maiores porro fugiat? Facere facilis vel accusamus sint dicta modi veritatis quidem praesentium sit tempora quod esse non et libero odio asperiores, atque, tenetur enim unde? Praesentium eius, reiciendis doloremque corporis cumque ipsa cupiditate tempora mollitia expedita minima nam eligendi aut explicabo impedit similique maiores? Dicta, similique facilis accusantium optio sapiente quis fugit voluptates eius quos possimus pariatur aperiam accusamus distinctio consequuntur, provident laudantium quam harum illum ipsum quaerat obcaecati sint molestias vel minima. Architecto, optio quibusdam!</p>
            </div>
        </div>
    )
}

export default About
