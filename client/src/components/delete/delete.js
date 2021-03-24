import React, { useState, useEffect } from "react";
// import Filters from "../../components/filters/filters";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./delete.css";
import API from "../../utils/API";
import Info from "../../components/information/information";
import { Input } from "../../components/Form";
import "./delete.css"

export default function DeleteWineEntry() {
    const [wines, setWines] = useState([]);
    const [fullWineList, setFullWinesList] = useState([]);
    const [formObject, setFormObject] = useState({});


  useEffect(() => {
    delWines();
  }, []);

  // Loads all wines and sets them to wines
  function delWines() {
    API.deleteWine()
      .then((res) => {
        setWines(res.data);
        setFullWinesList(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.wine_name && formObject.year) {
      API.saveWine({
        wine_name: formObject.wine_name,
        year: formObject.year,
        color: formObject.color,
        carbonation: formObject.carbonation,
        grape: formObject.grape,
        grape_detail: formObject.grape_detail,
        full_name: formObject.full_name,
        country: formObject.country,
        region: formObject.region,
        address: formObject.address,
        PPB: formObject.PPB,
        size: formObject.size,
        PPG: formObject.PPG,
        details: formObject.details,
        date: new Date(Date.now()),
      })
        .then(() =>
          setFormObject({
            wine_name: "",
            year: "",
          })
        )
        .then(() => delWines())
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <button
        className="btn"
        onClick={handleFormSubmit}
        type="submit"
      >
          Delete
      </button>
    </div>
  );
};