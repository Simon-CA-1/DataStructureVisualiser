import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import Navbar from "./navbar.jsx";
import "./Visualiser.css";
const validTypes = ["Array", "Stack", "Queue", "Tree", "Graph", "Linked-List"];
const functions=[["Add","Remove"],["Push","Pop","Peek"],["Enqueue","Dequeue","Peek"],["Insert","Delete","Find"],["AddEdge","RemoveEdge","FindPath"],["InsertFirst","InsertLast","DeleteFirst","DeleteLast"]]
function Visualiser() {
  const { id } = useParams();
  const index=validTypes.indexOf(id);
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
      <div className="visualisation-area">
      </div>
      <div className="function-buttons">
          {functions[index].map((func, i) => (
            <button key={i}>{func}</button>
          ))}
      </div>
      </>
    );
  }
}

export default Visualiser;