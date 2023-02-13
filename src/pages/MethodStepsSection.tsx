import { Box, Text } from "@chakra-ui/react";

const MethodStepsSection: React.FC = () => {
  return (
    <>
      <Box
        bg="black"
        w="100vw"
        py={{ base: 14, lg: 20 }}
        position="relative"
        bgImg="./assets/images/bg-MethodStepsSection.png"
        bgSize="cover"
        bgPosition="center"
      >
        <Text mb={20} textAlign="center" variant="title2">
          Nossa metodologia em 5 passos:
        </Text>
      </Box>
    </>
  );
};

export default MethodStepsSection;
