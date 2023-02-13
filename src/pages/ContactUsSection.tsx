import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

const ContactUsSection: React.FC = () => {
  return (
    <>
      <Box
        bg="black"
        w="100vw"
        py={{ base: 14, lg: 20 }}
        position="relative"
        bgImg="./assets/images/bg-contactus.png"
        bgSize="cover"
        bgPosition="center"
      >
        <Box>
          <VStack px={{ base: 5, md: 20 }} spacing={10}>
            <Image
              style={{ margin: "0 auto" }}
              w={{ base: "35vw", lg: "25vw", xl: "15vw" }}
              src="./assets/images/logo-1.svg"
            />
            <Text
              variant="description3"
              textAlign="center"
              w={{ base: "90vw", md: "50vw" }}
              mt={5}
              fontSize={[24, 34]}
            >
              Faça como muitos Empresários <b>Bem Sucedidos</b> e tenha{" "}
              <b>Outras Fontes de Renda!</b>
            </Text>

            <Flex
              flexDirection="column"
              w={{ base: "80vw", lg: "50vw", xl: "30vw" }}
            >
              <Box>
                <Text mb="8px" fontSize={[18, 24]}>
                  Nome*
                </Text>
                <Input fontSize={24} h={55} />
              </Box>
              <Box>
                <Text mb="8px" fontSize={[18, 24]}>
                  Seu melhor e-mail*
                </Text>
                <Input fontSize={24} h={55} />
              </Box>
              <Box>
                <Text mb="8px" fontSize={[18, 24]}>
                  Whatsapp com DDD*
                </Text>
                <Input fontSize={24} h={55} />
              </Box>
            </Flex>

            <Center py={10}>
              <Button boxShadow="0px 0px 10px 4px rgba(224,169,53,1)">
                QUERO ACELERAR MINHA RENDA
              </Button>
            </Center>

            <Text variant="description2" textAlign="center">
              “Consagre ao Senhor tudo o que você faz, que seus planos serão bem
              sucedidos“ pv 16:3
            </Text>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default ContactUsSection;
