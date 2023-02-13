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

import Carousel from "react-multi-carousel";

const socialProofConfig = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const meetingProofConfig = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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

  const socialProof = [
    "https://i.imgur.com/KaPGXR4.png",
    "https://i.imgur.com/SPqZwQj.png",
    "https://i.imgur.com/W6TKDFb.png",
    "https://i.imgur.com/VHhqXiC.png",
  ];

  const meetingProof = [
    "https://i.imgur.com/mUcoMTy.png",
    "https://i.imgur.com/GzoKsVq.png",
    "https://i.imgur.com/2U91WV3.png",
    "https://i.imgur.com/yCO5SGg.png",
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
        px={{ base: 3, lg: 0 }}
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
            <Box px={{ base: 5, lg: 10 }}>
              <AspectRatio
                margin="0 auto"
                width={{
                  base: "250px",
                  lg: "280px",
                  xl: "300px",
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

        <Box px={{ base: 5, lg: 20 }}>
          <Carousel
            swipeable={false}
            draggable={false}
            keyBoardControl={true}
            ssr={true}
            infinite={true}
            responsive={socialProofConfig}
          >
            {socialProof.map((link) => (
              <Center mx={3}>
                <Image src={link} />
              </Center>
            ))}
          </Carousel>
        </Box>

        <Text my={10} textAlign="center" variant="description">
          Procuramos pessoas que queiram aumentar suas fontes de renda!
        </Text>
        <Text textAlign="center" variant="title2">
          4.732 Vidas já impactadas
        </Text>

        <Box px={5} mt={20}>
          <Carousel
            swipeable={false}
            draggable={false}
            keyBoardControl={true}
            ssr={true}
            infinite={true}
            responsive={meetingProofConfig}
          >
            {meetingProof.map((link) => (
              <Center mx={3}>
                <Image src={link} />
              </Center>
            ))}
          </Carousel>
        </Box>

        <Text mt={14} textAlign="center" variant="description">
          Faça como muitos empresários bem sucedidos e tenha outras fontes de
          renda
        </Text>
      </Box>
    </>
  );
};

export default ShowcaseSection;
