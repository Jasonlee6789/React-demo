import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default function AppMenu() {
  const [activeItem, setActiveItem] = useState("home");

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }

  return (
    <Segment inverted color="teal">
      <Menu stackable inverted pointing secondary color="teal">
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
