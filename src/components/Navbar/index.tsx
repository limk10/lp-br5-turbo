import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Box bg="transparent" position="fixed" w="100vw" zIndex={9}>
      <Flex justify={["center", "space-between"]} px={20} py={10}>
        <Text display={["none", "inline"]}>
          HOME | QUEM SOMOS | ACELERE SUA RENDA
        </Text>
        <Image src="./assets/images/logo-1.svg" />
      </Flex>
    </Box>
  );
};

export default Navbar;
