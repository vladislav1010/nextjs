import { Dict } from "@chakra-ui/utils";
import { mode } from "@chakra-ui/theme-tools";

function variantDefault(props: Dict) {
  const { colorScheme: c, theme } = props;

  if (c === "gray") {
    return {
      color: mode("gray.600", "whiteAlpha.700"),
      _hover: { color: mode("gray.800", "whiteAlpha.900") },
    };
  }

  if (c === "blue") {
    return {
      color: mode("blue.600", "blue.400"),
      _hover: { color: mode("blue.700", "blue.500") },
    };
  }

  throw new Error("Unsupported color scheme");
}

const variants = {
  default: variantDefault,
};

const defaultProps = {
  variant: "default",
};

export default {
  defaultProps,
  variants,
};
