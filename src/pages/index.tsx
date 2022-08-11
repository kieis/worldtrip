import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import { Separator } from '../components/Separator'
import { Slider } from '../components/Slider'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
  return (
    <>
      <Flex as="header" w="100%" h="100px" alignItems="center" justifyContent="center">
        <Img src='/images/Logo.svg' alt="Logo"/>
      </Flex>
      <Box width="100vw">
        <Box backgroundImage='/images/home_background_banner.png' width="100%" height="335px" backgroundRepeat="no-repeat" backgroundSize="cover">

          <Flex maxWidth="1160px" margin="0 auto" flexDirection="column">
            <Flex width="100%" justifyContent="space-between" pt="80px">
              <Box>
                <Heading color="#F5F8FA" fontWeight="500" lineHeight="54px">5 Continentes, <br/> infinitas possibilidades.</Heading>
                <Text pt="20px" fontSize="20px" lineHeight="30px" color="#DADADA">Chegou a hora de tirar do papel a viagem que você<br/> sempre sonhou. </Text>
              </Box>
              <Box>
                <Img src="/images/AirPlane.svg" alt="Airplane"/>
              </Box>
            </Flex>

            <TravelTypes />
            <Separator />

            <Heading textAlign="center" fontWeight="500" fontSize="36px" lineHeight="54px" paddingBlock="52px">Vamos nessa?<br/>Então escolha seu continente</Heading>

          </Flex>

          <Flex maxWidth="1240px" margin="0 auto" flexDirection="column">
            <Slider />
          </Flex>

        </Box>
      </Box>
    </>
  )
}
