import { Box, Img, Text, ImgProps as ChakraImgProps } from "@chakra-ui/react";

interface TravelItemProps extends ChakraImgProps {
    name: string;
    image: string;
}

export function TravelItem({ name, image, ...rest}: TravelItemProps) {
    return(
        <Box justifyContent="center">
          <Img src={image} margin="0 auto" {...rest}/>
          <Text textAlign="center" fontSize="24px" fontWeight="600" pt="24px">{name}</Text>
        </Box>
    );
}