import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import Navbar from "./navbar.jsx";
import "./Visualiser.css";
import gsap from "gsap";

const validTypes = ["Stack", "Queue","Linked-List"];

const functions = [
  ["Push", "Pop"],
  ["Enqueue", "Dequeue"],
  ["InsertFirst", "InsertLast", "DeleteFirst", "DeleteLast"],
];
function Visualiser() {
  const { id } = useParams();
  const index = validTypes.indexOf(id);
  const [nodes, setNodes] = useState([]);
  const [nextId, setNextId] = useState(1);

  if (!validTypes.includes(id)) {
    return <NotFound />;
  }
  const handleDeleteLast = () => {
    if (nodes.length === 0) return;
    const lastNode = nodes[nodes.length - 1];
    gsap.to(`#node-${lastNode.id}`, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "back.in(1.7)",
      onComplete: () => {
        const updated = nodes.slice(0, -1).map((n, i) => ({
          ...n,
          x: i * 120 + 60,
        }));
        setNodes(updated);
      },
    });

    gsap.to(`#text-${lastNode.id}`, {
      opacity: 0,
      duration: 0.4,
    });

    if (nodes.length > 1) {
      gsap.to(`#line-${lastNode.id}`, {
        strokeDashoffset: 200,
        duration: 0.6,
      });
    }
  };
  const handleInsertLast = () => {
    const newNode = { id: nextId, x: nodes.length * 120 + 60, y: 100 };
    setNodes([...nodes, newNode]);
    setNextId(nextId + 1);
  };
  const handleInsertFirst = () => {
    const newNode = { id: nextId, x: 60, y: 100 };
    const updated = nodes.map((n) => ({ ...n, x: n.x + 120 }));
    setNodes([newNode, ...updated]);
    setNextId(nextId + 1);
  }
  const handleDeleteFirst = () => {
    if (nodes.length === 0) return;
    const firstNode = nodes[0];

    gsap.to(`#node-${firstNode.id}`, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "back.in(1.7)",
      onComplete: () => {
        const updated = nodes.slice(1).map((n, i) => ({
          ...n,
          x: i * 120 + 60,
        }));
        setNodes(updated);
      },
    });

    gsap.to(`#text-${firstNode.id}`, {
      opacity: 0,
      duration: 0.4,
    });

    if (nodes.length > 1) {
      gsap.to(`#line-${nodes[1].id}`, {
        strokeDashoffset: 200,
        duration: 0.6,
      });
    }
  };
  useEffect(() => {
    if (nodes.length > 0) {
      const lastNode = nodes[nodes.length - 1];
      gsap.fromTo(
        `#node-${lastNode.id}`,
        { scale: 0, opacity: 0, y: -50 },
        { scale: 1, opacity: 1, y: 0, duration: 1, ease: "back.out(1.7)" }
      );
      if (nodes.length > 1) {
        gsap.fromTo(
          `#line-${lastNode.id}`,
          { strokeDasharray: 200, strokeDashoffset: 200 },
          { strokeDashoffset: 0, duration: 1, ease: "power2.out" }
        );
      }
    }
    else{
      setNextId(1);
    }
  }, [nodes]);

  return (
    <>
      <Navbar />
      <div>
        <h3 className="visualisation-title">{id} Visualisation</h3>
      </div>
      <div className="visualisation-area">
        <svg width="800" height="200">
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="black" />
            </marker>
          </defs>

          {nodes.map((node, i) =>
            i > 0 ? (
              <line
                key={`line-${node.id}`}
                id={`line-${node.id}`}
                x1={nodes[i - 1].x}
                y1={nodes[i - 1].y}
                x2={node.x-25}
                y2={node.y}
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />
            ) : null
          )}

          {nodes.map((node) => (
            <circle
              key={node.id}
              id={`node-${node.id}`}
              cx={node.x}
              cy={node.y}
              r="30"
              fill="#3b82f6"
              stroke="black"
            />
          ))}

          {nodes.map((node) => (
            <text
              key={`text-${node.id}`}
              id={`text-${node.id}`}
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="bold"
            >
              {node.id}
            </text>
          ))}
        </svg>
      </div>
      <div className="function-buttons">
        {functions[index].map((func, i) => (
          <button
            key={i}
            onClick={
              (func.toLowerCase().includes("insertlast") || func.toLowerCase().includes("add") || func.toLowerCase().includes("push") || func.toLowerCase().includes("enqueue"))
                ? handleInsertLast
                : (func.toLowerCase().includes("deletefirst")||func.toLowerCase().includes("dequeue"))
                ? handleDeleteFirst
                : (func.toLowerCase().includes("insertfirst") || func.toLowerCase().includes("enqueue"))
                ? handleInsertFirst
                : (func.toLowerCase().includes("deletelast")|| func.toLowerCase().includes("remove") || func.toLowerCase().includes("pop"))
                ? handleDeleteLast
                : undefined
            }
          >
            {func}
          </button>
        ))}
      </div>
    </>
  );
}

export default Visualiser;
