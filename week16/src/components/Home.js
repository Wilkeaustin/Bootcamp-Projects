import React from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const Home = () => {
    return(
        <div className="home">
            
            <Card style={{ width: '100rem' }} variant="flush">
                <h2 className="card card-header border-light">Home</h2>
                {/* <button className="btn btn-primary" type="submit" value='submit'>Submit</button> */}
                <p>Hello, and welcome to Burger Bungalow! Here at the Bungalow we pride ourselves in giving our users a variety of options to expand their burger loving biology. The objective is simple...you, the burger finatic, get to explore our site to find something that makes your mouth water. Not only that but if you have experienced a burger unlike any other, and would like to express that love with the world, you can go to the <b className="">"Create"</b> page, and make your own submission to the site!  </p>
            </Card>
            <body>
                This is the body
            </body>
        </div>
    )
}

export default Home;