import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import foundations from "./foundations";
import components from "./components";

const theme = extendTheme({
  ...foundations,
  styles,
  components,
});

export default theme;
