import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText
  } from "reactstrap";

const CantFind = () => {
    return (

    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold">
            Hmmm. I can't seem to find what you want. Try another page!
            </p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>

    )
}

export default CantFind;