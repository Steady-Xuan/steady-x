import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import MentItem from "./components/Menu/MenuItem/menuitem";
import Menu, { modeType } from "./components/Menu/menu";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} mode={modeType.vertical}>
        <MentItem index={0}>click 01</MentItem>
        <MentItem index={1}>click 02</MentItem>
        <MentItem index={2}>click 03</MentItem>
      </Menu>

      <Button btnType={ButtonType.Default} size={ButtonSize.Small} disabled>
        button
      </Button>
      <Button
        autoFocus
        btnType={ButtonType.Primary}
        onClick={() => {
          alert(1);
        }}
      >
        button
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        target="_blank"
      >
        baidu
      </Button>
    </div>
  );
}

export default App;
