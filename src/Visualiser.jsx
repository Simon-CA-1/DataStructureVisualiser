import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound.jsx";

const validTypes = ["array", "stack", "queue", "tree", "graph", "linked-list"];

function Visualiser() {
  const { id } = useParams();

  if (!validTypes.includes(id)) 
  {
    return <NotFound />;
  } 
  else 
  {
    return (
      <div>
        <h1>{id} Visualisation</h1>
        {/* Add your visualisation component here */}
      </div>
    );
  }
}

export default Visualiser;