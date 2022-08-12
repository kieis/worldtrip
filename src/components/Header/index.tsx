import { Flex, Img, Link, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header() {
    const { asPath } = useRouter();

    const isWideVersion = useBreakpointValue({base: false, lg: true})
    const isHome = asPath === '/';

    return(
    <Flex as="header" w="100%" h="100px" alignItems="center" position="relative" paddingInline={!isWideVersion ? "22px" : "144px"}>
        { !isHome && (
            <Link href="/">
                <Img src="/images/arrow_left.svg" alt="Arrow Left" position="relative"/>
            </Link>
        )}
        <Img src='/images/Logo.svg' alt="Logo" margin="0 auto" position="relative"/>
    </Flex>
    );
}