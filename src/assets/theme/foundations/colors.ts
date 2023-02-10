const colors = {
  primary: {
    500: "#AB8F39",
    600: "#D5B853",
    700: "#FDDB5C",
  },
  black: "#000000",
  overlay: "#21212499",
  white: "#FFFFFF",
} as const;

export type Colors = typeof colors;
export default colors;
