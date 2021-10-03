import React, { useState } from "react";

const plats = ["pc", "xbox", "ps"];

const PlatformButton = ({ plat, setPlat, checked }) => (
  <>
    {/* <input
      type="checkbox"
      id={plat}
      className="btn-check"
      autoComplete="off"
      checked={checked}
      onChange={() => setPlat(plat)}
    /> */}

    <label class="btn btn-success m-1 p-2" htmlFor={plat}>
      {plat}
    </label>
  </>
);

const PlatformSelector = ({ plat, setPlat }) => (
  <div className="btn-group">
    <select name="platforms" id="platforms" multiple>
      {Object.values(plats).map((value) => (
        //   <PlatformButton
        //     key={value}
        //     plat={value}
        //     setPlat={setPlat}
        //     checked={value === plat}
        //   />
        <option value={value}>{value}</option>
      ))}
    </select>
  </div>
);

const PlatformList = () => {
  const [plat, setPlat] = useState([]);
  const [selected, setSelected] = useState([]);
  //   const termCourses = Object.values(courses).filter(
  //     (course) => term === getCourseTerm(course)
  //   );

  return (
    <>
      <PlatformSelector plat={plat} setPlat={setPlat} />
      {/* <div className="plat-list">
        {plats.map((p) => (
          <li>{p}</li>
        ))}
      </div> */}
    </>
  );
};

export default PlatformList;
