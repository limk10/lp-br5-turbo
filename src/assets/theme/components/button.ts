import { FONT_WEIGHT } from "../foundations/textLayers";

const baseStyle = {};

function variantPrimary() {
  return {
    bg: "linear-gradient(#FDDB5C, #AB8F39)",
    color: "black",
    fontWeight: FONT_WEIGHT.SEMI,
    fontSize: [18, 20, 25],
    borderRadius: 10,
    borderWidth: 0,
    boxShadow: "0px 0px 10px 4px rgba(224,169,53,1)",
    _hover: { bg: "#AB8F39", transform: "all 0.5s ease" },
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
