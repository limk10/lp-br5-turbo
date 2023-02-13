import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import InfoCard from "../components/Card";

const FeelAskCardsSection: React.FC = () => {
  const asks = [
    "TEM MEDO DE NÃO CONSEGUIR GARANTIR UM FUTURO SEGURO PARA SUA FAMÍLIA?",
    "VOCÊ ESTÁ INSATISFEITO COM SUA FONTE DE RENDA ATUAL?",
    "JÁ PERDEU O SONO PENSANDO QUE SUA RENDA NÃO ESTÁ SENDO SUFICIENTE?",
    "VOCÊ SÓ TEM UMA FONTE DE RENDA E TEM MEDO DE PERDER COM ALGUM IMPREVISTO?",
  ];
  return (
    <>
      <Box
        bg="black"
        w="100vw"
        py={{ base: 14, lg: 20 }}
        position="relative"
        bgImg="./assets/images/bg-askcardsection.png"
        bgPos="center"
      >
        <Text mb={20} textAlign="center" variant="title2">
          Você já se sentiu assim?
        </Text>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          justifyItems="center"
          spacing={10}
          h="100%"
          px={{ base: 5, md: 20 }}
        >
          {asks.map((text) => (
            <InfoCard key={text} text={text} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default FeelAskCardsSection;
