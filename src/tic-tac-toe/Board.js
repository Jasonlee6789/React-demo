import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Square from "./Square";
import _ from "lodash";

function Board(props) {
  // const row = (id / game.size) >> 0;
  // const col = id % game.size;

  const rows = _.times(props.size, (row) => <Grid.Row>{cols(row)}</Grid.Row>);

  function cols(row) {
    const items = [];

    for (let col = 0; col < props.size; col++) {
      let id = row * props.size + col;

      items.push(
        <Grid.Column width={1}>
          <Square
            value={props.board && props.board[id]}
            onClick={() => props.onClick(id)}
          />
        </Grid.Column>
      );
    }

    return items;
  }
  return (
    <Container style={{ margin: 20 }}>
      <Grid centered>{rows}</Grid>
    </Container>
  );
}

export default Board;
