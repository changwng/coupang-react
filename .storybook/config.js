import { configure } from "@storybook/react";
configure(require.context("../docs", true, /\.stories\.js$/), module);
