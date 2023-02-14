import {
  Box,
  Button,
  Center,
  Fade,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { BsInstagram } from "react-icons/bs";

const MentorsSection: React.FC = () => {
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
        minH="900px"
        pos="relative"
        bgImg="./assets/images/bg-mentorssection.png"
        bgSize="cover"
        bgPosition="center"
        py={{ base: 5, lg: 14 }}
      >
        <>
          <Image
            pos="absolute"
            bottom={{ base: "", md: "20%" }}
            top={{ base: "5%", md: "" }}
            left="0%"
            w={["150px", "200px", "256px", "340px", "420px"]}
            src="./assets/images/marcelo-pires-3.png"
            display={{ base: "none", md: "inline" }}
          />

          <Box
            pos="absolute"
            bottom={{ base: "30%", md: "55%", lg: "19%" }}
            left={{ base: "2%", md: "5%" }}
            display={{ base: "none", xl: "inline" }}
          >
            <Button onClick={() => (window.location.href = "#contact-us")}>
              QUERO ACELERAR MINHA RENDA
            </Button>
          </Box>
        </>

        <Image
          pos="absolute"
          bottom={0}
          right={0}
          w={["180px", "200px", "246px", "300px", "360px"]}
          src="./assets/images/alessandro-nogueira-1.png"
          display={{ base: "none", md: "inline" }}
        />

        <Flex h="100%" justifyContent="center">
          <Box
            w={{
              base: "98%",
              md: "45%",
              lg: "40%",
              xl: "40%",
              "2xl": "50%",
            }}
            zIndex={9}
            textAlign="center"
          >
            <VStack spacing={8}>
              <Text variant="title2">Mentores</Text>

              <VStack mt={4} flexDirection={{ base: "row", md: "column" }}>
                <Image
                  w={["150px", "150px", "256px", "480px"]}
                  src="./assets/images/marcelo-pires-3.png"
                  display={{ base: "inline", md: "none" }}
                />

                <Box textAlign="left">
                  <Text variant="description">Marcelo Pires</Text>
                  <Text
                    variant="description2"
                    textAlign="left"
                    fontWeight={200}
                  >
                    Administrador, Pós-graduado, MBA em Gestão Empresarial FGV,
                    PNL Practitioner com mais de 22 anos de experiência no
                    mercado de seguros
                  </Text>
                  <HStack justify="flex-start" align="center" mt={5}>
                    <BsInstagram fontSize={24} color="#AB8F39" />
                    <Text variant="description3" fontSize={[16, 24]}>
                      @marcelo.pires.oficial
                    </Text>
                  </HStack>
                </Box>
              </VStack>

              <Image w="100%" h="5px" src="./assets/images/divider-1.png" />

              <VStack mt={4} flexDirection={{ base: "row", md: "column" }}>
                <Box textAlign="right">
                  <Text variant="description">Alessandro Nogueira</Text>
                  <Text
                    variant="description2"
                    textAlign="right"
                    fontWeight={200}
                  >
                    Administrador, Pós-graduado, MBA em Gestão Comercial FGV,
                    PNL Practitioner com mais de 14 anos de experiência no
                    mercado financeiro
                  </Text>
                  <HStack justify="flex-end" align="center" mt={5}>
                    <Text variant="description3" fontSize={[16, 24]}>
                      @alessandronogueira1
                    </Text>
                    <BsInstagram fontSize={24} color="#AB8F39" />
                  </HStack>
                </Box>

                <Image
                  pl={5}
                  w={["150px", "150px", "256px", "480px"]}
                  src="./assets/images/alessandro-nogueira-1.png"
                  display={{ base: "inline", md: "none" }}
                />
              </VStack>

              <Center display={{ base: "inline", xl: "none" }} py={20}>
                <Button onClick={() => (window.location.href = "#contact-us")}>
                  QUERO ACELERAR MINHA RENDA
                </Button>
              </Center>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default MentorsSection;
