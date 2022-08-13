import { Box, Flex, Heading, Img, keyframes, Slide, SlideFade, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion"

const leftToRightKeyFrames = keyframes`
  0% { left: 0% }
  100% {left: 100% rotate(90deg)}
`;



const animationLeftToRight = `${leftToRightKeyFrames} 2s ease-in-out infinity`;

export function HomeBanner() {
  const isWideVersion = useBreakpointValue({base: false, lg: true})

  return (
      <Box backgroundImage='/images/home_background_banner.png' width="100%" height="335px" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" backgroundAttachment="fixed">
        <Flex maxWidth="1160px" margin="0 auto" flexDirection="column">
          <Flex width="100%" justifyContent="space-between" pt={{base: "28px", lg:"80px"}} pl={{base: "16px", lg:"0px"}} position="relative">
            <SlideFade delay={0.1} offsetX='-1000px' in={true}>
              <Box as={motion.div} animation={animationLeftToRight} position="relative">
                  <Heading color="light.heading" fontWeight="500" lineHeight="54px">5 Continentes, <br/> infinitas possibilidades.</Heading>
                  <Text pt="20px" fontSize="20px" lineHeight="30px" color="light.info">Chegou a hora de tirar do papel a viagem que você<br/> sempre sonhou. </Text>
              </Box>
            </SlideFade>

            {isWideVersion && (
              <SlideFade  delay={0.3} offsetX='1000px' in={true}>
                <Box>
                  <Img src="/images/Airplane.svg" alt="Airplane"/>
                </Box>
              </SlideFade>
            )}

          </Flex>
        </Flex>
      </Box>
  );
}