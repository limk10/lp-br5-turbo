import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

const ServicesPresentationSection: React.FC = () => {
  return (
    <>
      <Box
        w="100vw"
        py={{ base: 5, lg: 14 }}
        px={{ base: 5, lg: 0 }}
        position="relative"
        bgImg="./assets/images/bg-servicespresentationsection.png"
        bgSize="cover"
        bgPosition="center"
      >
        <HStack
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="center"
          spacing={{ base: 0, lg: 20 }}
          px={{ base: 0, lg: 20 }}
        >
          <Box>
            <Text fontWeight={600} fontSize={{ base: 80, lg: 100, xl: 120 }}>
              + 200
            </Text>
            <Text fontSize={{ base: 25, lg: 30, xl: 40 }}>
              Serviços de Produtos
            </Text>
          </Box>

          <Box>
            <HStack spacing={20} mt={{ base: 5, lg: 0 }}>
              <Text fontSize={{ base: 23, lg: 35, xl: 40 }}>
                Planos de Saúde
              </Text>
              <Text fontSize={{ base: 14, lg: 20, xl: 30 }}>
                Desconto em energia
              </Text>
            </HStack>

            <Box py={{ base: 0, lg: 5 }} />

            <HStack spacing={{ base: 0, md: 20 }} mt={{ base: 5, lg: 0 }}>
              <Text fontSize={{ base: 14, lg: 20, xl: 30 }}>
                Seguro de casa
              </Text>
              <Text fontSize={{ base: 23, lg: 35, xl: 40 }}>Consórcio</Text>
            </HStack>

            <Box py={{ base: 0, lg: 5 }} />

            <HStack spacing={20} mt={{ base: 5, lg: 0 }}>
              <Text fontSize={{ base: 23, lg: 35, xl: 40 }}>
                Cartão de Benefícios
              </Text>
              <Text fontSize={{ base: 14, lg: 20, xl: 30 }}>
                Seguro de carro
              </Text>
            </HStack>

            <Box py={{ base: 0, lg: 5 }} />

            <HStack spacing={20} mt={{ base: 5, lg: 0 }} justify="flex-end">
              <Text fontSize={{ base: 14, lg: 20, xl: 30 }}>
                Plano de Saúde
              </Text>
              <Text fontSize={{ base: 23, lg: 35, xl: 40 }}>Financiamento</Text>
            </HStack>

            <Box py={{ base: 0, lg: 5 }} />

            <HStack spacing={20} mt={{ base: 5, lg: 0 }} justify="flex-end">
              <Text fontSize={{ base: 23, lg: 35, xl: 40 }}>
                Seguro de Vida
              </Text>
              <VStack>
                <Text fontSize={{ base: 14, lg: 20, xl: 30 }}>
                  Previdencia Privada
                </Text>
                <Text fontSize={{ base: 23, lg: 35, xl: 40 }}>
                  Seguro Empresarial
                </Text>
              </VStack>
            </HStack>

            <HStack mt={20} justify={{ base: "center", lg: "flex-start" }}>
              <Text fontSize={{ base: 18, lg: 20, xl: 30 }}>e muito mais!</Text>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default ServicesPresentationSection;
