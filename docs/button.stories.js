import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
storiesOf("Button component", module).add("with text", () => (
  <Button>with text</Button>
));
