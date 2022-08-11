import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { TravelItem } from "./TravelItem";

export function TravelTypes() {
    return (
    <Flex width="100%" justifyContent="space-between" pt="80px" flexDir={["column", "column", "column", "row"]}>
        <TravelItem name="vida noturna" image="images/cocktail_1.svg" alt="Cocktail" />
        <TravelItem name="praia" image="images/surf_1.svg" alt="Surf" />
        <TravelItem name="moderno" image="images/building_1.svg" alt="Building" />
        <TravelItem name="clássico" image="images/museum_1.svg" alt="Museum" />
        <TravelItem name="e mais..." image="images/earth_1.svg" alt="Earth" />
    </Flex>
    );
}