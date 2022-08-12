import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import { Navigation, Pagination } from "swiper";

import { SlideItem } from './SlideItem';
import styles from './styles.module.scss';

type SlideData = {
    name: string;
    resume: string;
    image: string;
    url: string;
}

interface SliderProps {
    data: SlideData[];
}

export function Slider({ data }: SliderProps) {
    return (
    <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className={styles.swiper} autoplay={{delay: 1500, waitForTransition: true}}>
        {
            data.map((e) => {
                return (              
                    <SwiperSlide key={e.name}>
                            <SlideItem image={e.image}>
                                <Flex justify="center" align="center" flexDir="column" height="100%">
                                    <Link href={e.url} style={
                                        {
                                            textDecoration: 'none',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexDirection: 'column'
                                        }
                                        }>
                                        <Heading color="light.heading" fontSize="48px" lineHeight="72px">{e.name}</Heading>
                                        <Text color="light.info" fontSize="24px" pt="16px">{e.resume}</Text>
                                    </Link>
                                </Flex>
                            </SlideItem>
                    </SwiperSlide>     
                )
            })
        }
    </Swiper>
    );
}