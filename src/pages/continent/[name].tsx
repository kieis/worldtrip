import { Box, Flex, GridItem, Heading, Img, ScaleFade, SimpleGrid, Text, Tooltip, useCounter } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

type City = {
	name: string;
	country: string;
    flag: string;
}

type Country = {
	count: string;
	languagesCount: string;
}

type Continent = {
    name: string;
    translatedName: string;
    countries: Country;
    resume: string;
    description: string;
    images: string[];
}

interface ContinentProps {
    continent: Continent;
    mostVisitedCities: City[];
}

export default function Continent({ continent, mostVisitedCities }: ContinentProps) {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = e => {
          setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return(
        <>
        <Head>
            <title>WorldTrip - {continent.translatedName}</title>
        </Head>
        <Header />
            <Box backgroundImage={continent.images[1]} width="100%" height="500px" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" backgroundAttachment="fixed">
                <Flex flexDir="column" maxWidth="1160px" margin="0 auto" justifyContent={{base: 'center', lg: 'flex-end'}} alignItems={{base: 'center', lg: 'flex-start'}} height="100%" paddingInline={{base: '22px', lg: '0px'}}>
                    <Heading color="light.heading" pb={{base: '0px', lg: '60px'}}>{continent.translatedName}</Heading>
                </Flex>
            </Box>
            <Flex maxWidth="1160px" margin="0 auto" paddingBlock="80px" alignItems="center" justifyContent="space-between" flexDir={{base: 'column', lg: 'row'}} paddingInline={{base: '22px', lg: '0px'}}>
                <Text fontSize="24px" lineHeight="36px" maxWidth="600px" textAlign="justify">{continent.description}</Text>
                <Flex flexDir="column" justifyContent="center" alignItems="center">
                    <Text fontSize="48px" lineHeight="72px" fontWeight="600" color="highlight">{continent.countries.count}</Text>
                    <Text fontSize="24px" lineHeight="36px" fontWeight="600">pa??ses</Text>
                </Flex>
                <Flex flexDir="column" justifyContent="center" alignItems="center">
                    <Text fontSize="48px" lineHeight="72px" fontWeight="600" color="highlight">{continent.countries.languagesCount}</Text>
                    <Text fontSize="24px" lineHeight="36px" fontWeight="600">l??nguas</Text>
                </Flex>
                <Flex flexDir="column" justifyContent="center" alignItems="center">
                    <Text fontSize="48px" lineHeight="72px" fontWeight="600" color="highlight">{mostVisitedCities.length}</Text>
                    <Flex gap="5px">
                        <Text fontSize="24px" lineHeight="36px" fontWeight="600">cidades +100</Text>
                        <Tooltip hasArrow label={`Entre as 100 cidades mais visitas do mundo a ${continent.translatedName} possui ${mostVisitedCities.length} delas.`} bg='dark.heading' color='white' padding="10px 10px">
                            <Img src="/images/Info.svg"/>
                        </Tooltip>
                    </Flex>
                </Flex>
            </Flex>
            <Box maxWidth="1160px" margin="0 auto" paddingInline={{base: '22px', lg: '0px'}}>
                <Heading pb="40px">Cidades +100</Heading>
                <SimpleGrid columns={4} gap="45px" minChildWidth="256px">
                    {
                        mostVisitedCities.map((city) => {
                            return (
                                <ScaleFade delay={0.3} initialScale={0.6} in={scrollTop > 350} key={city.name}>
                                    <GridItem >
                                        <Flex height="280px" flexDir="column">
                                            <Img src={`https://source.unsplash.com/random/280x173/?${city.name},city`} height="173px" borderRadius="4px 4px 0px 0px"/>
                                            <Flex
                                            justifyContent="space-between"
                                            alignItems="center"
                                            borderBottomRadius="4px" 
                                            borderBottom="1px solid #FFBA08" 
                                            borderLeft="1px solid #FFBA08" 
                                            borderRight="1px solid #FFBA08" 
                                            paddingInline="24px"
                                            pt="18px"
                                            pb="25px">
                                                <Box>
                                                    <Heading fontSize="20px" lineHeight="25px">{city.name}</Heading>
                                                    <Text color="dark.info" pt="12px" fontSize="16px" lineHeight="26px">{city.country}</Text>
                                                </Box>
                                                <Img src={city.flag} width="30px" height="30px" borderRadius="100%" objectPosition="center" objectFit="cover"/>
                                            </Flex>
                                        </Flex>
                                    </GridItem>
                                </ScaleFade>
                            )
                        })
                    }
                </SimpleGrid>
            </Box>
        <Footer />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({params}: any) => {
    const { name } = params;
    const continentResponse = await api.get<Continent>(`/continent/${name}`);
    const continent = continentResponse.data;

    let mostVisitedCities = [];

    const citiesResponse = await api.get(`/city`);

    const countriesResponse = await api.get<any>("/country");
    Object.entries(citiesResponse.data).forEach((city: any) => {
        countriesResponse.data.forEach((country) => {
            if(city[1].trim().toLowerCase() === country.countryName.trim().toLowerCase()) {
                if(country.continent.trim().toLowerCase().includes(name.trim().toLowerCase())) {
                    mostVisitedCities.push({
                        name: city[0],
                        country: country.countryName,
                        flag: country.countryFlag
                    });
                }
            }
        });
    })

    return {
      props: { continent, mostVisitedCities }
    }
}
  
