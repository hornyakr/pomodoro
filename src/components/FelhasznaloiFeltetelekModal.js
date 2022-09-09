import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function FelhasznaloiFeltetelekModal(props) {
  function Accept() {
    props.onHide();
    document.querySelector("#userCondCheck").checked = true;
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Felhasználói feltételek
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          deserunt sint aspernatur impedit accusantium eveniet reiciendis illum
          perferendis repudiandae est eligendi, nihil quae debitis eius
          exercitationem labore dolor omnis quo?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={Accept}>Elfogadom</Button>
      </Modal.Footer>
    </Modal>
  );
}
