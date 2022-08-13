import { Box, Img, ImgProps as ChakraImgProps, SlideFade, Text } from "@chakra-ui/react";

interface TravelItemProps extends ChakraImgProps {
    name: string;
    image: string;
}

export function TravelItem({ name, image, ...rest}: TravelItemProps) {
    return(
        <SlideFade delay={0.7} offsetY='60px' in={true}>
            <Box justifyContent="center">
                <Img src={image} margin="0 auto" {...rest}/>
                <Text textAlign="center" fontSize="24px" fontWeight="600" pt="24px">{name}</Text>
            </Box>
        </SlideFade>
    );
}