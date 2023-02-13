import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const CompanyPresentationSection: React.FC = () => {
  const companies = [
    {
      logo: "./assets/images/topseg-logo-1.png",
      description1:
        "Corretora líder em planos de saúde, seguros pessoais e empresariais, integrante do grupo GC do Brasil e parceira de 23 seguradoras",
      description2: {
        title: "R$ 1,2 Bilhões",
        subtitle: "em seguros pelo Grupo GC",
      },
      description3: {
        title: "Tri-campeão Nacional",
        subtitle: "em seguros de vida",
      },
      description4: { title: "23 anos", subtitle: "no mercado" },
    },
    {
      logo: "./assets/images/expertise-logo-1.png",
      description1:
        "Mini Banco especialista em serviços e produtos voltados para geração de crédito em mais de 18 instituições financeiras",
      description2: {
        title: "R$ 2,2 Bilhões",
        subtitle: "em créditos originados/mês",
      },
      description3: {
        title: "R$ 700 Milhões",
        subtitle: "em créditos mobiliário/mês",
      },
      description4: { title: "1600 Oportunidades", subtitle: "de negócio" },
    },
    {
      logo: "./assets/images/br5-logo-1.png",
      description1:
        "Há mais de 10 anos trazendo saúde, qualidade de vida e economia para familia com um cartão único de benefícios",
      description2: { title: "R$ 3,1 Milhões", subtitle: "em Renda Vitalícia" },
      description3: { title: "4.732 Revendas", subtitle: "em todo Brasil" },
      description4: { title: "237.134 Vidas", subtitle: "Protegidas" },
    },
  ];
  return (
    <>
      <Box
        bg="black"
        w="100vw"
        position="relative"
        bgImg="./assets/images/bg-helpcardssection.png"
        bgSize="cover"
        bgPosition="center"
      >
        <Box bg="linear-gradient(to right, #AB8F39 , #FDDB5C)" py={2}>
          <Text
            my={3}
            px={5}
            textAlign="center"
            variant="title2"
            fontWeight={400}
            color="white"
          >
            3 EMPRESAS CONSOLIDADAS
          </Text>
        </Box>

        <HStack
          px={{ base: 5, lg: 20 }}
          py={14}
          spacing={{ base: 0, lg: 20 }}
          justifyContent={{ base: "", lg: "space-between" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          {companies.map(
            ({
              logo,
              description1,
              description2,
              description3,
              description4,
            }) => (
              <Flex
                flexDirection="column"
                textAlign="center"
                maxW={420}
                mt={{ base: 0, md: 0 }}
                pb={10}
              >
                <Image margin="0 auto" w={{ base: 180, md: 240 }} src={logo} />
                <Image my={10} src="./assets/images/divider-1.png" />
                <Text>{description1}</Text>
                <Box my={5}>
                  <Text fontWeight="bold" variant="description2">
                    {description2.title}
                  </Text>
                  <Text>{description2.subtitle}</Text>
                </Box>
                <Box my={5}>
                  <Text fontWeight="bold" variant="description2">
                    {description3.title}
                  </Text>
                  <Text>{description3.subtitle}</Text>
                </Box>
                <Box my={5}>
                  <Text fontWeight="bold" variant="description2">
                    {description4.title}
                  </Text>
                  <Text>{description4.subtitle}</Text>
                </Box>
              </Flex>
            )
          )}
        </HStack>
      </Box>
    </>
  );
};

export default CompanyPresentationSection;
