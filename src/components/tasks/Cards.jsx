import React from "react";
import { Link } from "react-router-dom";

function Cards({ name, image }) {
  //   const img1 = require("../../images/react.jpg");
  return (
    <>
      <div style={{ margin: 20 }} className="mt-5">
        <div
          style={{
            borderWidth: 3,
            borderColor: "red",
            width: 400,
            height: 400,
          }}
        >
          <img
            style={{
              borderRadius: 20,
              width: "100%",
              height: "100%",
            }}
            src={image}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center my-2">
            {/* <h3 style={{ fontSize: 40 }} className="card-title">
              {name}
            </h3> */}

            <Link
              to={`/quiz/${name}`}
              style={{
                borderRadius: 10,
                fontSize: 20,
                color: "grey",
                borderWidth: 2,
              }}
              className="btn btn-outline-warning p-4 mt-4"
            >
              {name}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
