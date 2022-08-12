import { Box, Flex, GridItem, Heading, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
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
    return(
        <>
        <Header />
            <Box backgroundImage={continent.images[1]} width="100%" height="500px" backgroundPosition="center" backgroundSize="cover">
                <Flex flexDir="column" maxWidth="1160px" margin="0 auto" justifyContent="flex-end" height="100%">
                    <Heading color="light.heading" pb="60px">{continent.translatedName}</Heading>
                </Flex>
            </Box>
            <Flex maxWidth="1160px" margin="0 auto" paddingBlock="80px" alignItems="center" justifyContent="space-between">
                <Text fontSize="24px" lineHeight="36px" maxWidth="600px" textAlign="justify">{continent.description}</Text>
                <Flex flexDir="column" justifyContent="center" alignItems="center">
                    <Text fontSize="48px" lineHeight="72px" fontWeight="600" color="highlight">{continent.countries.count}</Text>
                    <Text fontSize="24px" lineHeight="36px" fontWeight="600">países</Text>
                </Flex>
                <Flex flexDir="column" justifyContent="center" alignItems="center">
                    <Text fontSize="48px" lineHeight="72px" fontWeight="600" color="highlight">{continent.countries.languagesCount}</Text>
                    <Text fontSize="24px" lineHeight="36px" fontWeight="600">línguas</Text>
                </Flex>
                <Flex flexDir="column" justifyContent="center" alignItems="center">
                    <Text fontSize="48px" lineHeight="72px" fontWeight="600" color="highlight">{continent.countries.count}</Text>
                    <Text fontSize="24px" lineHeight="36px" fontWeight="600">cidades +100</Text>
                </Flex>
            </Flex>
            <Box maxWidth="1160px" margin="0 auto">
                <Heading pb="40px">Cidades +100</Heading>
                <SimpleGrid columns={4} gap="45px">
                    {
                        mostVisitedCities.map((city) => {
                            return (
                                <GridItem key={city.name}>
                                    <Flex height="280px" flexDir="column">
                                        <Img src={`https://source.unsplash.com/random/?${city.name},city`} height="173px" borderRadius="4px 4px 0px 0px"/>
                                        <Flex
                                        justifyContent="space-between"
                                        alignItems="center"
                                        borderBottomRadius="4px" 
                                        borderBottom="1px solid highlight" 
                                        borderLeft="1px solid highlight" 
                                        borderRight="1px solid highlight" 
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
                            )
                        })
                    }
                </SimpleGrid>
            </Box>
        <Footer />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
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
      props: { continent, mostVisitedCities },
      revalidate: 60 * 60,
    }
  }
  