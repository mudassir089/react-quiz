import React from "react";
import Cards from "./Cards";
import reactjs from "../../images/react.jpg";
import javascript from "../../images/javascript.jpg";
import htmlcss from "../../images/html-css.jpg";

function SelectQuiz() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Cards name="React JS" image={reactjs} />
          <Cards name="JAVASCRIPT" image={javascript} />
          <Cards name="HTML & CSS" image={htmlcss} />
        </div>
      </div>
    </>
  );
}

export default SelectQuiz;
