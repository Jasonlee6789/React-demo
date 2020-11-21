import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default function AppMenu() {
  const [activeItem, setActiveItem] = useState("home");

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }

  return (
    <Segment inverted color="blue">
      <Menu stackable inverted pointing secondary color="blue">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />

        <Menu.Item
          name="history"
          active={activeItem === "history"}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  );
}
