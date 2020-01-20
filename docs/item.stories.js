import React from "react";

import { storiesOf } from "@storybook/react";
import Items from "../src/components/items/items";

storiesOf("item component", module).add("with item", () => <Items />);
