import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ category, items, isDrink }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          {category === 'Menu'? (
            <CardTitle className="font-weight-bold text-center">
              Full Menu
            </CardTitle>
          ):(
            <CardTitle className="font-weight-bold text-center">
              {category} Menu
            </CardTitle>
          )}
                   
          <CardText className="text-center">
            Below is a list of all the {category.toLowerCase()} we offer. Pick one and enjoy!
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link 
              to={isDrink(item.id) ? `/drinks/${item.id}` : `snacks/${item.id}`} 
              key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
