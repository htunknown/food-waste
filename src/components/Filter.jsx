import React, { useState } from "react";

function Filter() {
  const [selectedOption, setSelectedOption] = useState("BestSelection");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <ul className="list-group">
        {/* Radio buttons */}
        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="radio"
            name="listGroupRadio"
            value="BestSelection"
            id="firstRadio"
            checked={selectedOption === "BestSelection"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="firstRadio">
            Best Selection
          </label>
        </li>

        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="radio"
            name="listGroupRadio"
            value="Alphabetic"
            id="secondRadio"
            checked={selectedOption === "Alphabetic"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="secondRadio">
            Alphabetically
          </label>
        </li>

        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="radio"
            name="listGroupRadio"
            value="mostPopular"
            id="thirdRadio"
            checked={selectedOption === "mostPopular"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="thirdRadio">
            Most Popular
          </label>
        </li>

        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="radio"
            name="listGroupRadio"
            value="cheapest"
            id="fourthRadio"
            checked={selectedOption === "cheapest"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="fourthRadio">
            Cheapest
          </label>
        </li>

        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="radio"
            name="listGroupRadio"
            value="closest"
            id="fifthRadio"
            checked={selectedOption === "closest"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="fifthRadio">
            Closest
          </label>
        </li>

        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="radio"
            name="listGroupRadio"
            value="mostDiscounted"
            id="sixthRadio"
            checked={selectedOption === "mostDiscounted"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="sixthRadio">
            Most Discounted
          </label>
        </li>

        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="radio"
            name="listGroupRadio"
            value="soonEnds"
            id="seventhRadio"
            checked={selectedOption === "soonEnds"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="seventhRadio">
            Soon Ends
          </label>
        </li>
      </ul>


      {/* Checkboxes */}
    <br />
      <h5>Cuisine</h5>
      <ul className="list-group mt-3">
        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="firstCheckboxStretched"
          />
          <label className="form-check-label stretched-link" htmlFor="firstCheckboxStretched">
            Burger
          </label>
        </li>

        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="secondCheckboxStretched"
          />
          <label className="form-check-label stretched-link" htmlFor="secondCheckboxStretched">
            Pizza
          </label>
        </li>

        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="thirdCheckboxStretched"
          />
          <label className="form-check-label stretched-link" htmlFor="thirdCheckboxStretched">
            Doner
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
