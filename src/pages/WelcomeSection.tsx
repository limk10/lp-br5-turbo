import {
  Box,
  Button,
  Fade,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";

const WelcomeSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);

  return (
    <>
      <Box
        bg="black"
        w="100vw"
        h="100vh"
        maxH={{ base: "750px", lg: "900px" }}
        pos="relative"
      >
        <Image
          pos="absolute"
          margin="auto"
          left={0}
          right={0}
          top="8vh"
          w={["80%", "40%"]}
          src="./assets/images/lion-bg-1.svg"
        />
        <Fade in={isOpen}>
          <Image
            pos="absolute"
            bottom={0}
            left={0}
            w={["210px", "260px", "340px", "480px"]}
            src="./assets/images/marcelo-pires-1.png"
            // display={["none", "inline"]}
          />
        </Fade>
        <Fade in={isOpen}>
          <Image
            pos="absolute"
            bottom={0}
            right={0}
            w={["180px", "230px", "300px", "400px"]}
            src="./assets/images/alessandro-nogueira-1.png"
            // display={["none", "inline"]}
          />
        </Fade>

        <Flex
          h="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box w={["90%", "80%", "70%", "60%", "40%"]} textAlign="center">
            <VStack spacing={8}>
              <Text variant="title">NÓS PODEMOS TE AJUDAR!</Text>

              <VStack mt={4}>
                <Text variant="description">
                  Com nossa plataforma e metodologia, mais de 4.732 vidas foram
                  impactadas e transformadas com Renda Vitalícia!
                </Text>
              </VStack>
            </VStack>
            <Box mt={20}>
              <Button onClick={() => (window.location.href = "#contact-us")}>
                QUERO ACELERAR MINHA RENDA
              </Button>
            </Box>
          </Box>
        </Flex>

        <Box
          pos="absolute"
          left={0}
          right={0}
          bottom={3}
          marginLeft="auto"
          marginRight="auto"
          w={{ base: "95%", lg: "80%" }}
          // display={["none", "inline"]}
        >
          <Flex
            justifyContent="space-between"
            flexDirection={{ base: "column", md: "row" }}
          >
            <HStack justify={{ base: "center", md: "" }} mt={5}>
              <BsInstagram fontSize={28} color="#AB8F39" />
              <Text variant="description3" fontSize={[18, 26]}>
                @marcelo.pires.oficial
              </Text>
            </HStack>
            <HStack justify={{ base: "center", md: "" }} mt={5}>
              <Text variant="description3" fontSize={[18, 26]}>
                @alessandronogueira1
              </Text>
              <BsInstagram fontSize={28} color="#AB8F39" />
            </HStack>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default WelcomeSection;
