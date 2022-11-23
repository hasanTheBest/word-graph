import React from "react";

const FormInput = () => {
  return (
    <form>
      <div className="form-control">
        <div className="input-group">
          <select className="select select-bordered">
            <option disabled selected>
              Pick Constraints
            </option>
            <option>Means Like</option>
            <option>Sounds Like</option>
            <option>Spelled Like</option>
            <option>Synonyms</option>
            <option>Antonyms</option>
            <option>Antonyms</option>
            <option>Rhymes</option>
            <option>Rhymes approx</option>
            <option>Constant match</option>
          </select>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn">Go</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormInput;
