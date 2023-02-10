const baseStyle = {
  color: "white",
  zIndex: 999,
};

function variantTitle() {
  return {
    color: "primary.600",
    fontSize: [40, 50, 65, 80],
    fontWeight: "bold",
    lineHeight: 1,
  };
}

function variantDescription() {
  return {
    fontSize: [25, 30],
    fontWeight: 400,
  };
}

function variantDescription2() {
  return {
    fontSize: [20, 25],
    fontWeight: 400,
  };
}

const variants = {
  title: variantTitle,
  description: variantDescription,
  description2: variantDescription2,
};

const buttonConfig = { baseStyle, variants };

export default buttonConfig;
