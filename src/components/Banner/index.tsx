import { Box, Flex, Heading, Img, Text, useBreakpointValue } from "@chakra-ui/react";

export function HomeBanner() {
  const isWideVersion = useBreakpointValue({base: false, lg: true})

    return (
        <Box backgroundImage='/images/home_background_banner.png' width="100%" height="335px" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" backgroundAttachment="fixed">
          <Flex maxWidth="1160px" margin="0 auto" flexDirection="column">
            <Flex width="100%" justifyContent="space-between" pt={{base: "28px", lg:"80px"}} pl={{base: "16px", lg:"0px"}}>
                <Box>
                  <Heading color="light.heading" fontWeight="500" lineHeight="54px">5 Continentes, <br/> infinitas possibilidades.</Heading>
                  <Text pt="20px" fontSize="20px" lineHeight="30px" color="light.info">Chegou a hora de tirar do papel a viagem que você<br/> sempre sonhou. </Text>
                </Box>
                {isWideVersion && (
                  <Box>
                    <Img src="/images/Airplane.svg" alt="Airplane"/>
                  </Box>
                )}

            </Flex>
          </Flex>
        </Box>
    );
}