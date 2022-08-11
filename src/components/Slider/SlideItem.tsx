import { SwiperSlide } from "swiper/react";
import { Box } from '@chakra-ui/react';

import styles from './styles.module.scss';
import { ReactNode } from "react";

interface SlideItemProps {
    image?: string;
    children: ReactNode;
}

export function SlideItem({ image, children, ...rest }: SlideItemProps) {
    return (
    <Box backgroundImage={image} width="100%" height="100%" backgroundPosition="center" backgroundSize="cover" {...rest}>
            {children}
    </Box>
    );
}