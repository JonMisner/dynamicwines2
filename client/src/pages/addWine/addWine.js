import React, { useState, useEffect } from "react";
// import Map from "../../components/map/map";
import Filters from "../../components/filters/filters";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Row, Col, Form, Label } from "reactstrap";
import API from "../../utils/API";
import axios from "axios";
import { List, ListItem } from "../../components/List";
import Info from "../../components/information/information";
import "./addWine.css";
import { Input } from "../../components/Form";
// import { Link } from "react-router-dom";


export default function AddWine() {
  const [wines, setWines] = useState([]);
  const [fullWineList, setFullWinesList] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all wines
  useEffect(() => {
    loadWines();
  }, []);

  // Loads all wines and sets them to wines
  function loadWines() {
    API.getWines()
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

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value });
  // }

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
        date: new Date(Date.now())
      })
        .then(() =>
          setFormObject({
            wine_name: "",
            year: "",
          })
        )
        .then(() => loadWines())
        .catch((err) => console.log(err));
    }
  }
  
  return (
    <div className="body">
      <Row className="header componenets">
      <Col lg={8}></Col>
          {wines.length > 0 && (
            <Filters
              fullWineList={fullWineList}
              setWines={setWines}
              wines={wines}
              className="filters"
            />
          )}
      </Row>
      <Jumbotron fluid className="main">
        <Row>
          <Col lg={8}>
            <Jumbotron fluid className="addWine"> 
            <Form>
            <Col className="formCol">
              <Label className="labelColorChange">Winemaker</Label>
              <Input
                onChange={handleInputChange}
                name="wine_name"
                placeholder="Producer Name"
              />
              <Label className="labelColorChange">Label Name</Label>
              <Input
                onChange={handleInputChange}
                name="full_name"
                placeholder="Vineyard or label name"
              />
              <Label className="labelColorChange">Vintage</Label>
              <Input
                onChange={handleInputChange}
                name="year"
                placeholder="Vintage"
              />
              <Label>Color of Wine</Label>
               <Input
                onChange={handleInputChange}
                name="color"
                placeholder="Red, White, or Rose?"
              />
              <Label>Carbonation</Label>
              <Input
                className="inputColorChange"
                onChange={handleInputChange}
                name="carbonation"
                placeholder="Still or Sparkling?"
              />
              <Label>Vatietal on Label</Label>
              <Input
               className="inputColorChange"
                onChange={handleInputChange}
                name="grape"
                placeholder="Varietal or style of blend"
              />
              <Label>All Varietals Included</Label>
              <Input
               className="inputColorChange"
                onChange={handleInputChange}
                name="grape_detail"
                placeholder="List of Varietals"
              />
              </Col>
              <Col className="formCol">
              <Label className="labelColorChange">Country</Label>
              <Input
                onChange={handleInputChange}
                name="country"
                placeholder="Country"
              />
              <Label className="labelColorChange">Region</Label>
              <Input
                onChange={handleInputChange}
                name="region"
                placeholder="Region"
              />
              <Label>Address</Label>
              <Input
                onChange={handleInputChange}
                name="address"
                placeholder="Address of Winery or Vineyard"
              />
              <Label>Glass Pour?</Label>
                <Input
                 className="inputColorChange"
                onChange={handleInputChange}
                name="size"
                placeholder='"Glass" or "Bottle"'
              />
              <Label>Price Per Bottle</Label>
              <Input
               className="inputColorChange"
                onChange={handleInputChange}
                name="PPB"
                placeholder="Price per bottle"
              />
              <Label>Price Per Glass</Label>
              <Input
               className="inputColorChange"
                onChange={handleInputChange}
                name="PPG"
                placeholder="Price per glass (if available)"
              />
              <Label>Tasting Notes</Label>
              <Input
               className="inputColorChange"
                onChange={handleInputChange}
                name="details"
                placeholder="Enter tasting notes here"
              />
               
              <button
						className="btn"
						onClick={handleFormSubmit}
						type="submit"
					>Add Wine</button>
            </Col>
            </Form>
            </Jumbotron>
          </Col>
          <Col lg={4}>
            <Jumbotron fluid className="components">
              {wines.length ? (
                <List>
                  {wines.map((wine) => (
                    <ListItem key={wine._id} wine={wine}>
                    <Row>
                      <Col lg={10}>
                      <strong wine={wine}>
                        {wine.wine_name} "{wine.full_name}"
                      </strong>
                      <div>
                        {wine.year} {wine.grape} {wine.PPG} | {wine.PPB}
                      </div>
                      </Col>
                      <Col lg={2}>
                      <Info className="info" wine={wine}> </Info>
                      </Col>
                      </Row>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Jumbotron>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

