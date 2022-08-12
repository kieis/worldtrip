import { Box, Flex, Heading } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { HomeBanner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Slider } from '../components/Slider'
import { TravelTypes } from '../components/TravelTypes'
import { api } from '../services/api'

interface ContinentSimplified {
  name: string;
  resume: string;
  image: string;
  url: string;
}

interface ContinentsProps {
  continents: ContinentSimplified[];
}

export default function Home({ continents }: ContinentsProps) {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>
      <Header />
      <Box width="100vw">
        <HomeBanner />

        <Flex maxWidth="1160px" margin="0 auto" flexDirection="column">
          <TravelTypes />
          <Separator />
          <Heading textAlign="center" fontWeight="500" fontSize="36px" lineHeight="54px" paddingBlock="52px">Vamos nessa?<br/>Então escolha seu continente</Heading>
        </Flex>

        <Flex maxWidth="1240px" margin="0 auto" flexDirection="column">
          <Slider data={continents}/>
        </Flex>
      </Box>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<ContinentSimplified[]>('/continent/simplified');
  const continents = response.data;

  return {
    props: { continents },
    revalidate: 60 * 60,
  }
}
