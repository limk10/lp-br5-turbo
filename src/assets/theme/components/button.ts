import { FONT_WEIGHT } from "../foundations/textLayers";

const baseStyle = {};

function variantPrimary() {
  return {
    bg: "linear-gradient(#FDDB5C, #AB8F39)",
    color: "black",
    fontWeight: FONT_WEIGHT.NORMAL,
    fontSize: [18, 23, 25],
    borderRadius: 10,
    borderWidth: 0,
  };
}

const sizes = {
  md: {
    px: 8,
    py: 7,
  },
};

const defaultProps = {
  variant: "primary",
  size: "md",
};

const variants = {
  primary: variantPrimary,
};

const buttonConfig = { baseStyle, variants, sizes, defaultProps };

export default buttonConfig;
