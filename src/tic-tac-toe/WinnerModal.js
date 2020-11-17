import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import WinnerImage from "../images/win.jpg";

function WinnerModal(props) {
  return (
    <Modal
      onClose={() => props.onClose}
      open={props.open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Congratulations</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={WinnerImage} wrapped />
        <Modal.Description>
          <Header>Winner!</Header>
          <p>Congratulations! You have won!</p>
          <p>Do you want to start a new game?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={props.onClose}>
          Nope
        </Button>
        <Button
          content="Yep, bring it on"
          labelPosition="right"
          icon="checkmark"
          onClick={props.onNewGame}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default WinnerModal;
