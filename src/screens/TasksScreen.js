import React from "react";
import { Table } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

export default function TasksScreen() {
  const tasks = useOutletContext().tasks;
  let index = 0;
  return (
    <div>
      {tasks.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Cél id</th>
              <th>Megnevezés</th>
              <th>Kezdés</th>
              <th>Végzés</th>
              <th>Értékelés</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((taskArr) =>
              taskArr.map((task) => {
                index++;
                return (
                  <tr key={task.id}>
                    <td>{index}</td>
                    <td>{task.id}</td>
                    <td>{task.goalId}</td>
                    <td>{task.description}</td>
                    <td>{task.startAt ? task.startAt : "Nincs elkezdve"}</td>
                    <td>{task.finishAt ? task.finishAt : "Nincs befejezve"}</td>
                    <td>{task.rating ? task.rating : "Nincs értékelve"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      ) : (
        <div className={"alert alert-info"} role={"alert"}>
          Nincs meghatározva még feladat
        </div>
      )}
    </div>
  );
}
