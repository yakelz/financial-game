import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './SwiperStyles.css';

import { Pagination } from 'swiper/modules';

import Slide1 from './Slides/Slide1';
import Slide2 from './Slides/Slide2';
import Slide3 from './Slides/Slide3';
import Slide4 from './Slides/Slide4';
import Slide5 from './Slides/Slide5';
import Slide6 from './Slides/Slide6';
import Slide7 from './Slides/Slide7';
import Slide8 from './Slides/Slide8';
import Slide9 from './Slides/Slide9';

function PhoneScam() {
	return (
		<Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
			<SwiperSlide>
				<Slide1 />
			</SwiperSlide>
			<SwiperSlide>
				<Slide2 />
			</SwiperSlide>
			<SwiperSlide>
				<Slide3 />
			</SwiperSlide>
			<SwiperSlide>
				<Slide4 />
			</SwiperSlide>
			<SwiperSlide>
				<Slide5 />
			</SwiperSlide>
			<SwiperSlide>
				<Slide6 />
			</SwiperSlide>
			<SwiperSlide>
				<Slide7 />
			</SwiperSlide>
			<SwiperSlide>
				<Slide8 />
			</SwiperSlide>
			<SwiperSlide>
				<Slide9 />
			</SwiperSlide>
		</Swiper>
	);
}

export default PhoneScam;
