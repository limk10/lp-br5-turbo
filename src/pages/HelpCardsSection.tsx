import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import InfoCard from "../components/Card";

const HelpCardsSection: React.FC = () => {
  const asks = [
    {
      title: "Marketing",
      description: "Materiais de apoio e diretivos de campanha",
    },
    {
      title: "23 anos",
      description: "de experiência e solidez",
    },
    {
      title: "Treinamentos",
      description: "Diversos cursos e materiais de apoio",
    },
  ];

  return (
    <>
      <Box
        bg="black"
        w="100vw"
        py={{ base: 14, lg: 20 }}
        position="relative"
        bgImg="./assets/images/bg-helpcardssection.png"
        bgSize="cover"
        bgPosition="center"
      >
        <Text mb={20} textAlign="center" variant="title2">
          Como vamos te ajudar:
        </Text>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          px={{ base: 5, md: 20 }}
          mt={[20, 10]}
          gap={[10, 20]}
          justifyItems="center"
        >
          <InfoCard
            title="Backoffice"
            description="Absorvemos processos burocráticos operacionais"
          />
          <InfoCard
            title="Especialistas"
            description="suporte no processo de venda"
          />
        </SimpleGrid>

        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          px={{ base: 5, md: 20 }}
          mt={[20, 10]}
          gap={[10, 10]}
          justifyItems="center"
        >
          <InfoCard
            title="Backoffice"
            description="Absorvemos processos burocráticos operacionais"
          />
          <InfoCard
            title="Especialistas"
            description="suporte no processo de venda"
          />
          <InfoCard
            title="Especialistas"
            description="suporte no processo de venda"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default HelpCardsSection;
