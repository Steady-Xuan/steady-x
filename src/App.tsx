import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import MentItem from "./components/Menu/MenuItem/menuitem";
import Menu, { modeType } from "./components/Menu/menu";
import SubMenuItem from "./components/Menu/SubMenuItem/SubMenuItem";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex="0"
        mode={modeType.horizontal}
        defaultOpenSubMenus={["3"]}
      >
        <MentItem>click 01</MentItem>
        <MentItem>click 02</MentItem>
        <MentItem>click 03</MentItem>
        <SubMenuItem title="Sub 01">
          <MentItem>click 01</MentItem>
          <MentItem>click 02</MentItem>
          <MentItem>click 03</MentItem>
        </SubMenuItem>
      </Menu>

      <Button btnType={ButtonType.Default} size={ButtonSize.Small} disabled>
        button
      </Button>
      <Button
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
