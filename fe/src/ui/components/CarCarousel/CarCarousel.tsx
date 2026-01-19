import { Carousel } from 'antd';
import type { ImageType } from '../../../types/Car';

export default function CarCarousel ({imageList}:{imageList:ImageType[]}){
  
  return(
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000} className='flex items-center mx-3'>
      {
        imageList.map((image) =><div key={image.id}>
        <img className='w-full h-[50vh]' src={`${image.link}`} />
      </div> )
      }
      
      
    </Carousel>
);
}