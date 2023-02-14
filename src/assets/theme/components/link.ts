import { FONT_WEIGHT } from "../foundations/textLayers";

function variantPrimary() {
  return {
    color: "white",
    fontWeight: FONT_WEIGHT.SEMI,
  };
}

const defaultProps = {
  variant: "primary",
};

const variants = {
  primary: variantPrimary,
};

const buttonConfig = { variants, defaultProps };

export default buttonConfig;
