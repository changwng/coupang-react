import React from "react";

import { storiesOf } from "@storybook/react";
import Header from "../src/components/header/header";
import { GlobalStyle } from "../src/global-style";

storiesOf("header component", module).add("with header", () => {
  return (
      <Header />
  );
});
