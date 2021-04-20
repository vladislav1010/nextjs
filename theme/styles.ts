import { mode, Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "gray.800")(props),
      transition: "background-color 0.2s",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      boxSizing: "border-box",
      borderWidth: 0,
      borderStyle: "solid",
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
    [`blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre`]: {
      m: 0,
    },
    button: {
      backgroundColor: "transparent",
      backgroundImage: "none",

      /**
       * Work around a Firefox/IE bug where the transparent `button` background
       * results in a loss of the default `button` focus styles.
       */
      _focus: {
        outline: ["1px dotted", "5px auto -webkit-focus-ring-color"],
      },
    },
    fieldset: {
      m: 0,
      p: 0,
    },
    "ol, ul": {
      listStyle: "none",
      m: 0,
      p: 0,
    },
    /**
     * Ensure horizontal rules are visible by default
     */
    hr: {
      borderTopWidth: "1px",
    },
    img: {
      borderStyle: "solid",
    },

    textarea: {
      resize: "vertical",
    },

    [`input::placeholder,
    textarea::placeholder`]: {
      opacity: 1,
    },

    [`button,
    [role="button"]`]: {
      cursor: "pointer",
    },

    table: {
      borderCollapse: "collapse",
    },

    [`h1,
    h2,
    h3,
    h4,
    h5,
    h6`]: {
      fontSize: "inherit",
      fontWeight: "inherit",
    },

    /**
     * Reset links to optimize for opt-in styling instead of
     * opt-out.
     */

    a: {
      color: "inherit",
      textDecoration: "inherit",
    },

    /**
     * Reset form element properties that are easy to forget to
     * style explicitly so you don't inadvertently introduce
     * styles that deviate from your design system. These styles
     * supplement a partial reset that is already applied by
     * normalize.css.
     */

    [`button,
    input,
    optgroup,
    select,
    textarea`]: {
      padding: 0,
      lineHeight: "inherit",
      color: "inherit",
    },

    /**
     * Make replaced elements `display: block` by default as that's
     * the behavior you want almost all of the time. Inspired by
     * CSS Remedy, with `svg` added as well.
     *
     * https://github.com/mozdevs/cssremedy/issues/14
     */

    [`img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object`]: {
      display: "block",
      verticalAlign: "middle",
    },

    /**
     * Constrain images and videos to the parent width and preserve
     * their intrinsic aspect ratio.
     *
     * https://github.com/mozdevs/cssremedy/issues/14
     */

    "img,video": {
      maxWidth: "100%",
      height: "auto",
    },

    "svg:not(:root)": {
      overflow: "hidden",
    },

    "@media (prefers-reduced-motion: reduce)": {
      "*, *::before, *::after": {
        transition: "none",
      },
    },
  }),
};

export default styles;
