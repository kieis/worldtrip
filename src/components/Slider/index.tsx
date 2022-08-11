import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import { Flex, Heading, Text } from '@chakra-ui/react';

import styles from './styles.module.scss';
import { SlideItem } from './SlideItem';

export function Slider() {
    return (
    <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className={styles.swiper}>
        <SwiperSlide>
            <SlideItem image="/images/continent_image.png">
                <Flex justify="center" align="center" flexDir="column" height="100%">
                    <Heading color="light.heading" fontSize="48px" lineHeight="72px">Europa</Heading>
                    <Text color="light.info" fontSize="24px" pt="16px">O continente mais antigo.</Text>
                </Flex>
            </SlideItem>
        </SwiperSlide>
        <SwiperSlide>
            <SlideItem image="/images/continent_image.png">
                oi
            </SlideItem>
        </SwiperSlide>
        <SwiperSlide>
            <SlideItem image="/images/continent_image.png">
                oi
            </SlideItem>
        </SwiperSlide>
    </Swiper>
    );
}