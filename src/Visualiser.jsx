import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import Navbar from "./navbar.jsx";
import "./Visualiser.css";

const validTypes = ["Array", "Stack", "Queue", "Tree", "Graph", "Linked-List"];

function Visualiser() {
  const { id } = useParams();

  if (!validTypes.includes(id)) 
  {
    return <NotFound />;
  } 
  else 
  {
    return (
      <>
      <Navbar />
      <div>
        <h3 className="visualisation-title">{id} Visualisation</h3>
      </div>
      </>
    );
  }
}

export default Visualiser;