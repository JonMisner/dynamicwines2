import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./filters.css";

export default function Filters({ setWines, fullWineList, wines }) {

  const [color, setColor] = useState("Color");
  const [country, setCountry] = useState("Country");
  const [glass, setGlass] = useState("Size");
 

  const handleClick = (event) => {
    const color = event.target.id;
    console.log("colorclicked",fullWineList);
    setWines(() => {
      var filteredWinesColor = fullWineList.filter((wine) => {
        return wine.color === color;
      });
      return filteredWinesColor;
    });
    setColor(event.target.id);
    setCountry("All Countries");
    setGlass("All Sizes");
  };


  const handleClickAll = (event) => {
    console.log("colorall",fullWineList);
    setWines(() => {
      var filteredWinesColorAll = fullWineList.filter((wine) => {
        return ([wine.color === "White"],
            [wine.color === "Rose"],
            [wine.color === "Red"]);
      });
      return filteredWinesColorAll;
    });
    setColor(event.target.id);
    setCountry("All Countries");
    setGlass("All Sizes");
  };

  const handleClickCountry = (event) => {

    const country = event.target.id;
   
    setWines(() => {
      var filteredWinesCountry = fullWineList.filter((wine) => {
        return wine.country === country;
      });
      return filteredWinesCountry;
    });
    setCountry(event.target.id);
    setGlass("All Sizes");
    setColor("All Colors");
  };

  const handleClickCountryAll = (event) => {
    setWines(() => {
      var filteredWinesCountryAll = fullWineList.filter((wine) => {
        return ([wine.country === "Canada"], [wine.country === "France"], [wine.country === "Germany"], [wine.country === "Greece"], [wine.country === "Italy"], [wine.country === "New Zealand"], [wine.country === "Portugal"], [wine.country === "Spain"], [wine.country === "USA"]);
      });
      return filteredWinesCountryAll;
    });
    setCountry(event.target.id);
    setGlass("All Sizes");
    setColor("All Colors");
  };


  const handleClickGlass = (event) => {
    const glass = event.target.id;
    setWines(() => {
      var filteredWinesSize = fullWineList.filter((wine) => {
        return wine.size === glass;
      });
      return filteredWinesSize;
    });
    setGlass(event.target.id);
    setColor("All Colors");
    setCountry("All Countries");
  };

  const handleClickGlassAll = (event) => {
    setWines(() => {
      var filteredWinesSizeAll = fullWineList.filter((wine) => {
        return ([wine.size === "Glass"],
            [wine.size === "Bottle"]);
      });
      return filteredWinesSizeAll;
    });
    setGlass(event.target.id);
    setColor("All Colors");
    setCountry("All Countries");
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenCountry, setDropdownOpenCountry] = useState(false);
  const [dropdownOpenSize, setDropdownOpenSize] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleCountry = () => setDropdownOpenCountry((prevState) => !prevState);
  const toggleSize = () => setDropdownOpenSize((prevState) => !prevState);

  const handleChange = (e) => console.log("e.target.val", e.target.value);
  const handleChangeCountry = (e) =>
    console.log("e.target.val", e.target.value);

  return (
    <>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        onChange={handleChange}
        inline="true"
      >
        <DropdownToggle className="button" caret>
          {color}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="White" onClick={handleClick}>
            White
          </DropdownItem>
          <DropdownItem id="Rose" onClick={handleClick}>
            Rose
          </DropdownItem>
          <DropdownItem id="Red" onClick={handleClick}>
            Red
          </DropdownItem>
          <DropdownItem id="All Colors" onClick={handleClickAll}>
            All
          </DropdownItem>

        </DropdownMenu>
      </Dropdown>

      <Dropdown
        isOpen={dropdownOpenCountry}
        toggle={toggleCountry}
        onChange={handleChangeCountry}
        inline="true"
      >
        <DropdownToggle className="button" caret>
          {country}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="Canada" onClick={handleClickCountry}>
            Canada
          </DropdownItem>
          <DropdownItem id="France" onClick={handleClickCountry}>
            France
          </DropdownItem>
          <DropdownItem id="Germany" onClick={handleClickCountry}>
            Germany
          </DropdownItem>
          <DropdownItem id="Greece" onClick={handleClickCountry}>
            Greece
          </DropdownItem>
          <DropdownItem id="Italy" onClick={handleClickCountry}>
            Italy
          </DropdownItem>
          <DropdownItem id="New Zealand" onClick={handleClickCountry}>
            New Zealand
          </DropdownItem>
          <DropdownItem id="Portugal" onClick={handleClickCountry}>
            Portugal
          </DropdownItem>
          <DropdownItem id="South Africa" onClick={handleClickCountry}>
            South Africa
          </DropdownItem>
          <DropdownItem id="Spain" onClick={handleClickCountry}>
            Spain
          </DropdownItem>
          <DropdownItem id="USA" onClick={handleClickCountry}>
            U.S.A.
          </DropdownItem>
          <DropdownItem id="All Countries" onClick={handleClickCountryAll}>
            All
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown
        isOpen={dropdownOpenSize}
        toggle={toggleSize}
        onChange={handleChange}
        inline="true"
      >
        <DropdownToggle className="button" caret>
          {glass}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="Glass" onClick={handleClickGlass}>
            Glass
          </DropdownItem>
          <DropdownItem id="Bottle" onClick={handleClickGlass}>
            Bottle
          </DropdownItem>
          <DropdownItem id="All Sizes" onClick={handleClickGlassAll}>
            All
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
