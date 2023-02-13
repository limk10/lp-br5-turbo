import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  title?: string;
  description: string;
}

const InfoCard = ({ title, description }: Props) => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.2)"
      borderWidth={2}
      borderColor="primary.500"
      borderRadius={10}
      px={8}
      py={8}
      maxW="480px"
      w="100%"
      boxShadow={"9px 8px 0px -1px #AB8F39"}
    >
      {title && (
        <Text textAlign="center" variant="description">
          {title}
        </Text>
      )}
      <Text fontWeight={title ? 600 : 400} textAlign="center">
        {description}
      </Text>
    </Box>
  );
};

export default InfoCard;
