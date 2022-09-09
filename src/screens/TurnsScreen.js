import React from "react";
import { Table } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

export default function TurnsScreen() {
  const turns = useOutletContext().turns;
  let index = 0;
  return (
    <div>
      {turns.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Feladat id</th>
              <th>Fókusz idő</th>
              <th>Szünet</th>
              <th>Végzés</th>
            </tr>
          </thead>
          <tbody>
            {turns.map((turnsArr) =>
              turnsArr.map((turn) => {
                index++;
                return (
                  <tr key={turn.id}>
                    <td>{index}</td>
                    <td>{turn.id}</td>
                    <td>{turn.taskId}</td>
                    <td>{turn.focusTime}</td>
                    <td>{turn.shift}</td>
                    <td>{turn.finishAt ? turn.finishAt : "Nincs befejezve"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      ) : (
        <div className={"alert alert-info"} role={"alert"}>
          Nincs meghatározva még kör
        </div>
      )}
    </div>
  );
}
