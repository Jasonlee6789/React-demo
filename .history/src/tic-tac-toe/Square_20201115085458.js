import React from "react";
import { Button, Icon } from "semantic-ui-react";

function Square(props) {
  return (
    <Button color="teal" icon size="huge" onClick={props.onClick}>
      {props.value === "x" ? (
        <Icon name="close" inverted />
      ) : props.value === "o" ? (
        <Icon name="circle outline" inverted />
      ) : (
        <Icon />
      )}
    </Button>
  );
}

export default Square;
