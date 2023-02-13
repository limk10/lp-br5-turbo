import { Box, Image, Text } from "@chakra-ui/react";

const MethodStepsSection: React.FC = () => {
  return (
    <>
      <Box
        bg="black"
        w="100vw"
        py={{ base: 14, lg: 20 }}
        position="relative"
        bgImg="./assets/images/bg-methodsstepssection.png"
        bgSize="cover"
        bgPosition="center"
      >
        <Text mb={10} textAlign="center" variant="title2">
          Nossa metodologia em 5 passos:
        </Text>

        <Box px={[5, 20]}>
          <Image
            display={{ base: "none", lg: "inline" }}
            src="./assets/images/methodssteps-desktop.png"
          />
          <Image
            display={{ base: "inline", lg: "none" }}
            src="./assets/images/methodssteps-mobile.png"
          />
        </Box>
      </Box>
    </>
  );
};

export default MethodStepsSection;
