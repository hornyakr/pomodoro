import React from "react";
import { Card, Table } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

export default function ProfileScreen() {
  const { email, password, lastName, firstName } = useOutletContext().user;

  return (
    <div>
      <Card.Title>
        <h3>
          {lastName} {firstName}
        </h3>
      </Card.Title>
      <Table striped="columns">
        <tbody>
          <tr>
            <td>
              <b>Email cím:</b>
            </td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>
              <b>Jelszó:</b>
            </td>
            <td>{password}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
