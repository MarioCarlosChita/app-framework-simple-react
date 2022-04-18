import React from "react";
import { Block, Navbar, Page, Panel } from "framework7-react";

export default () => {
  return (
    <Page>
      <Panel left cover dark>
        <Navbar title="Left Panel" />
        <Block>Left panel content</Block>
      </Panel>

      <Panel right reveal>
        <Navbar title="Right Panel" />
        <Block>Right panel content</Block>
      </Panel>
    </Page>
  );
};
