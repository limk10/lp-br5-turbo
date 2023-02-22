import { Box, Button, Fade, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const FeelAwsnerCardsSection: React.FC = () => {
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
        bgImage="./assets/images/bg-awsnercardsection.png"
        bgSize="cover"
        bgPosition="center"
        w="100vw"
        h="100vh"
        pos="relative"
        id="feel-awsner"
        pt={{ base: 14, lg: 0 }}
      >
        <Fade in={isOpen}>
          <Image
            pos="absolute"
            bottom={0}
            left={0}
            zIndex={0}
            w={["185px", "300px", "340px", "470px"]}
            src="./assets/images/marcelo-pires-2.png"
            // display={["none", "inline"]}
          />
        </Fade>

        <Fade in={isOpen}>
          <Image
            pos="absolute"
            bottom={0}
            right={0}
            w={["220px", "350px", "390px", "560px"]}
            src="./assets/images/alessandro-nogueira-2.png"
            // display={["none", "inline"]}
          />
        </Fade>

        <Flex h="100%" alignItems="center" justifyContent="center">
          <Box
            w={["90%", "80%", "70%", "60%", "40%"]}
            textAlign="center"
            zIndex={9}
          >
            <VStack mb={10}>
              {/* <Text variant="description2">
                Se identificou com estas questões e quer mudar de vida?
              </Text> */}

              <VStack mt={4}>
                <Text variant="description3">
                  Faça como 92% dos <b>Empresários Bem Sucedidos</b>, tenha
                  <b> Outras Fontes de Renda</b> e venha fazer parte deste Grupo
                  Seleto
                </Text>
              </VStack>
            </VStack>

            <Image
              zIndex={999}
              style={{ margin: "0 auto" }}
              w={{ base: "35vw", lg: "25vw", xl: "15vw" }}
              src="./assets/images/logo-1.svg"
            />

            <Box mt={20}>
              <Button onClick={() => (window.location.href = "#contact-us")}>
                QUERO ACELERAR MINHA RENDA
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FeelAwsnerCardsSection;
