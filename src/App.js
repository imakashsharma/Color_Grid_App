import './App.css';
import { Button, Modal } from "react-bootstrap";

import react, { useState } from "react";
import InputModal from "./Components/Modal";
import Grid from "./Components/Grid";


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Grid />
      <Button variant="primary" onClick={handleShow} style={{marginLeft: '47%'}}>
         Add Color
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Color Grid Maker</Modal.Title>
        </Modal.Header>
        <InputModal />
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default App;

