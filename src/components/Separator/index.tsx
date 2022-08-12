import { Box, Flex  } from "@chakra-ui/react";

export function Separator() {
    return (
        <Flex w="100%" justifyContent="center" pt="80px">
            <Box w="90px" borderBottom="2px solid #47585B"></Box>
        </Flex>
    );
}