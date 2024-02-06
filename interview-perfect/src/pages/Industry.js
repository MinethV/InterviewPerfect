import React from 'react';
import {Link} from "react-router-dom";

export const Industry = () => {
  return (
    <div>
      <h1>Interview Perfect</h1>
      <p>What field are you interested in?</p>
      <form>
        <label>
          <input type="radio" name="field" value="SoftwareEngineering" />
          Software Engineering
        </label>
        <br />
        <label>
          <input type="radio" name="field" value="CivilEngineering" />
          Civil Engineering
        </label>
        <br />
        <label>
          <input type="radio" name="field" value="BusinessManagement" />
          Business Management
        </label>
        <br />
        <label>
          <input type="radio" name="field" value="HRManagement" />
          HR Management
        </label>
        <br />
        <button type="submit">Review</button>
      </form>
    </div>
  );
};




