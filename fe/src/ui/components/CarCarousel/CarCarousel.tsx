import { Carousel } from 'antd';

export default function CarCarousel (){
  
  return(
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000} className='flex items-center mx-3'>
      <div >
        <img className='w-full h-[50vh]' src='https://randompicturegenerator.com/img/car-generator/g93e2464d449a46aa0c9ec6dc85a9822cdc4a7c2c2728e7c25946856cf5e769641455240403d69de5dd837792c37c9e24_640.jpg' />
      </div>
      <div>
        <img className='w-full h-[50vh]' src='https://randompicturegenerator.com/img/car-generator/g93e2464d449a46aa0c9ec6dc85a9822cdc4a7c2c2728e7c25946856cf5e769641455240403d69de5dd837792c37c9e24_640.jpg' />
    </div>
      <div>
        <img className='w-full h-[50vh]' src='https://randompicturegenerator.com/img/car-generator/g93e2464d449a46aa0c9ec6dc85a9822cdc4a7c2c2728e7c25946856cf5e769641455240403d69de5dd837792c37c9e24_640.jpg' />
    </div>
    </Carousel>
);
}