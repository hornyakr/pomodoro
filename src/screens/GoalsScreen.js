import React from "react";
import { Table } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

export default function GoalsScreen() {
  const goals = useOutletContext().goals;

  return (
    <div>
      {goals.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Kérdés</th>
              <th>Kezdés</th>
              <th>Végzés</th>
              <th>Értékelés</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal, index) => (
              <tr key={goal.id}>
                <td>{index + 1}</td>
                <td>{goal.id}</td>
                <td>{goal.question}</td>
                <td>{goal.startAt ? goal.startAt : "Nincs elkezdve"}</td>
                <td>{goal.finishAt ? goal.finishAt : "Nincs befejezve"}</td>
                <td>{goal.rating ? goal.rating : "Nincs értékelve"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className={"alert alert-info"} role={"alert"}>
          Nincs meghatározva még cél
        </div>
      )}
    </div>
  );
}
