import {
  Box,
  color,
  Divider,
  Flex,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Box
      bg={colorChange ? "rgb(0 ,0, 0, 0.8)" : "transparent"}
      position="fixed"
      w="100vw"
      zIndex={1000}
      px={20}
      py={3}
    >
      <Flex justify={{ base: "center", lg: "space-between" }}>
        <HStack display={{ base: "none", lg: "flex" }}>
          <Link href="#feel-awsner">HOME</Link>
          <Divider h={5} orientation="vertical" />
          <Link href="#company-presentation">QUEM SOMOS</Link>
          <Divider h={5} orientation="vertical" />
          <Link href="#contact-us">ACELERE SUA RENDA</Link>
        </HStack>
        <Image
          w={["80px", "100px", "120px"]}
          src="./assets/images/logo-1.svg"
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
