import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
}

const InfoCard = ({ text }: Props) => {
  return (
    <Box
      bg="transparent"
      borderWidth={2}
      borderColor="primary.500"
      borderRadius={10}
      px={8}
      py={8}
      maxW="480px"
      boxShadow={"9px 8px 0px -1px #AB8F39"}
    >
      <Text textAlign="center">{text}</Text>
    </Box>
  );
};

export default InfoCard;
