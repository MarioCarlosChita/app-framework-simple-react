import React from "react";
import { App, View, Panel, Navbar, Block } from "framework7-react";
import ROUTER from "./routers";

const f7params = {
  id: "io.framework7.testapp", // App bundle ID
  name: "Framework7", // App name
  theme: "auto", // Automatic theme detection
  routes: ROUTER
};

export default () => {
  return (
    <App {...f7params}>
      <Panel left cover dark>
        <Navbar title="Left Panel" />
        <Block>Left panel content</Block>
      </Panel>

      <Panel right reveal>
        <Navbar title="Right Panel" />
        <Block>Right panel content</Block>
      </Panel>

      <View main />
    </App>
  );
};
