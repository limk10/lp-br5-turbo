import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const ShowcaseSection: React.FC = () => {
  const videoShowcase = [
    {
      video: "https://www.youtube.com/embed/4fhl_YB597s?controls=0",
      personName: "Mario Arruda",
      description: `adipiscing elit, sed diam Lorem ipsum dolor 
      Lorem ipsum dolor sit amet, consectetuer 
      sit amet, consectetuer adipiscing elit, sed `,
    },
    {
      video: "https://www.youtube.com/embed/4fhl_YB597s?controls=0",
      personName: "José Cadro",
      description: `adipiscing elit, sed diam Lorem ipsum dolor 
      Lorem ipsum dolor sit amet, consectetuer 
      sit amet, consectetuer adipiscing elit, sed `,
    },
    {
      video: "https://www.youtube.com/embed/4fhl_YB597s?controls=0",
      personName: "Maria Fernanda",
      description: `adipiscing elit, sed diam Lorem ipsum dolor 
      Lorem ipsum dolor sit amet, consectetuer 
      sit amet, consectetuer adipiscing elit, sed `,
    },
  ];

  return (
    <>
      <Box
        bg="black"
        w="100vw"
        py={{ base: 14, lg: 20 }}
        position="relative"
        bgImg="./assets/images/bg-showcasesection.png"
        bgSize="cover"
        bgPosition="center"
      >
        <Text mb={14} textAlign="center" variant="title2">
          Conheça quem já vive de Renda Vitalícia
        </Text>

        <SimpleGrid
          justifyContent="space-between"
          px={{ base: 0, lg: 10 }}
          columns={{ base: 1, lg: 3 }}
          w="100%"
        >
          {videoShowcase.map(({ video, personName, description }) => (
            <Box px={{ base: 5, lg: 14 }}>
              <AspectRatio
                margin="0 auto"
                width={{
                  base: "480px",
                  lg: "300px",
                  xl: "360px",
                  "2xl": "450px",
                }}
                height={{ base: "300px", lg: "300px", xl: "300px" }}
              >
                <iframe
                  src={video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </AspectRatio>

              <Text
                my={10}
                textAlign="center"
                variant="title2"
                fontSize={{ base: 16, lg: 24 }}
              >
                {personName}
              </Text>
              <Text
                my={10}
                textAlign="center"
                variant="description"
                fontSize={{ base: 14, lg: 20 }}
              >
                {description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <Center my={20}>
          <Button boxShadow="0px 0px 10px 4px rgba(224,169,53,1)">
            QUERO ACELERAR MINHA RENDA
          </Button>
        </Center>

        <Text mb={10} mt={20} textAlign="center" variant="title2">
          Casos reais de Renda gerada
        </Text>
      </Box>
    </>
  );
};

export default ShowcaseSection;
