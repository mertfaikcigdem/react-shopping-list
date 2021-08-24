import React from "react";
import "./HomeContent.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeContent() {
  return (
    <Carousel className="main">
      <Carousel.Item>
        <img
          className=" w-100"
          src="https://static.kent.ac.uk/nexus/ems/1529.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Electronics</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src="https://cdn.randys-jewelry.com/wp-content/uploads/2018/05/collections-1024x683.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Jewelery</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src="https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?k=6&m=887360960&s=612x612&w=0&h=E6deaCnCx1tXsSlWrDoaUQDrdg9tdk1CZlfR-AEZGwg="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Men Clothing</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100"
          src="https://thumbs.dreamstime.com/b/set-stylish-black-women-s-clothing-fashion-accessories-style-blue-wooden-background-flat-lay-top-view-127815233.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Women Clothing</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeContent;
