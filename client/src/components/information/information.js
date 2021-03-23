import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./information.css";

const Info = (wine) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle} className="info">
        info
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="wine">
        <ModalHeader toggle={toggle}>
          <h2>
            <strong className="strong">{wine.wine.wine_name}</strong> "
            {wine.wine.full_name}"
          </h2>
          <h4>
            {wine.wine.year} {wine.wine.region}, {wine.wine.country}{" "}
            <strong className="strong">
              {" "}
              {wine.wine.PPG} | {wine.wine.PPB}
            </strong>
          </h4>
        </ModalHeader>
        <ModalBody>
          <strong className="strong">Style: </strong>
          {wine.wine.carbonation} {wine.wine.color}
          <br />
          <strong className="strong">Varietal: </strong>
          {wine.wine.grape_detail}
          <br />
          <strong className="strong">Notes: </strong>
          {wine.wine.details}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Info;
