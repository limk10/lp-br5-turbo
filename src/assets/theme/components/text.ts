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

function variantTitle2() {
  return {
    color: "primary.600",
    fontSize: [30, 60],
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

function variantDescription3() {
  return {
    color: "primary.600",
    fontSize: [35, 45],
    fontWeight: 300,
  };
}

const variants = {
  title: variantTitle,
  title2: variantTitle2,
  description: variantDescription,
  description2: variantDescription2,
  description3: variantDescription3,
};

const buttonConfig = { baseStyle, variants };

export default buttonConfig;
