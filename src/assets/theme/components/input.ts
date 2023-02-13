function variantPrimary() {
  return {
    bg: "white",
    fontSize: [24, 28],
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

const buttonConfig = { variants, sizes, defaultProps };

export default buttonConfig;
