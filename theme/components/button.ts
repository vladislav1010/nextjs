import { mode, transparentize } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";
import deepmerge from "deepmerge";

const baseStyle = {
  _focus: {
    outline: "none",
  },
};

function variantBgBorderless(props: Dict) {
  const { colorScheme: c, theme } = props;

  if (c === "gray") {
    return {
      color: mode(`gray.600`, `whiteAlpha.700`)(props),
      _hover: {
        color: mode(`gray.700`, `whiteAlpha.800`)(props),
      },
      _active: { color: mode(`gray.800`, `whiteAlpha.900`)(props) },
    };
  }

  const color = mode(`${c}.600`, `${c}.200`)(props);
  const darkHoverColor = transparentize(color, 0.12)(theme);
  const darkActiveColor = transparentize(color, 0.24)(theme);

  return {
    color,
    _hover: {
      color: darkHoverColor,
    },
    _active: {
      color: darkActiveColor,
    },
  };
}

function variantBgless(props: Dict) {
  const { colorScheme: c } = props;

  const baseStyle = {
    border: "1px solid",
    ...variantBgBorderless(props),
  };

  if (c === "gray") {
    return deepmerge(baseStyle, {
      borderColor: mode(`gray.200`, `whiteAlpha.300`)(props),
      _hover: {
        borderColor: "currentColor",
      },
      _active: {
        borderColor: "currentColor",
      },
    });
  }

  return { ...baseStyle, borderColor: "currentColor" };
}

const variants = {
  bgBorderless: variantBgBorderless,
  bgless: variantBgless,
};

export default {
  baseStyle,
  variants,
};
