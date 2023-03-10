import {
  AspectRatio,
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const ThumbVideoSection: React.FC = () => {
  return (
    <>
      <Box
        bg="gray"
        w="100vw"
        h={{ base: "", lg: "100vh" }}
        minH="800px"
        position="relative"
        bgImage="./assets/images/bg-videothumbsection.png"
        bgSize="cover"
        bgPosition="center"
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={10}
          spacingY={20}
          h="100%"
          alignItems="center"
          px={[10, 20]}
          py={{ base: 20, lg: 0 }}
        >
          <Box>
            <VStack spacing={20}>
              <Image
                zIndex={9}
                w={{ base: "45vw", lg: "35vw", xl: "25vw" }}
                src="./assets/images/logo-1.svg"
              />
              <Image
                zIndex={9}
                w={{ base: "45vw", lg: "35vw", xl: "25vw" }}
                src="./assets/images/acelerando-sua-renda.svg"
              />
            </VStack>
          </Box>
          <Box>
            <VStack
              spacing={20}
              align={{ base: "center", lg: "flex-start" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <AspectRatio
                width={{ base: "360px", lg: "460px" }}
                height="315px"
              >
                <iframe
                  src="https://www.youtube.com/embed/4fhl_YB597s?controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </AspectRatio>

              <Text variant="description2">
                A BR5 Turbo é uma plataforma <b>Aceleradora de Renda</b> de 3{" "}
                <b>Empresas consolidadas</b> e mais de{" "}
                <b>200 Produtos Escaláveis</b>
                com uma equipe <b>Especializada</b> para dar suporte
              </Text>
              <Button onClick={() => (window.location.href = "#contact-us")}>
                QUERO ACELERAR MINHA RENDA
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ThumbVideoSection;
