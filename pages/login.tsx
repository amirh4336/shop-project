import Image from 'next/image'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function login() {
  
  return (
    <main className="bg-gradient-to-r from-[#acb2c2] to-[#c0c5cf] w-full h-screen pt-[5rem] font-[sans-serif]">
      <div className="max-w-[55rem] bg-white rounded-2xl grid grid-cols-2 p-4 mx-auto ">
        <div className="left-side bg-[#f3f5f9] rounded-2xl p-8 pb-0">

        <svg xmlns="http://www.w3.org/2000/svg"  fill="#3c38ff" className="bi bi-balloon-fill w-8 h-8" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"/>
        </svg>
        <h1 className="mt-[4rem] font-bold text-3xl">Let us help you run your freelance business.</h1>
        <p className="text-slate-500 mt-[2rem] text-lg">Our registration process is quick and easy, taking no more than 10 minutes to complete.</p>
        

        <Swiper className="mt-[3rem]"
            // install Swiper modules
            modules={[ Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="bg-[#2d3345] rounded-xl text-white p-9 pb-4 relative overflow-hidden mb-9">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#414759" className="bi bi-broadcast-pin 
                w-14 absolute -top-4 left-6" viewBox="0 0 16 16">
                  <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"/>
                </svg>
                <p>i'm impressed with the results i've seen since starting to use this product, I begin receiving client and projects in the first week.</p>
                

                <div className="author-id flex items-center mt-[16px]">
                  <Image className="rounded-full h-[36px]" src="/212.jpg" alt="Landscape picture" width={36} height={36}/>
                  <div className='ml-3 text-xs'>
                    <h4 className='font-semibold'>Amir</h4>
                    <p className='text-slate-400'>Frontend Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#2d3345] rounded-xl text-white p-9 pb-4 relative overflow-hidden mb-9">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#414759" className="bi bi-broadcast-pin 
                w-14 absolute -top-4 left-6" viewBox="0 0 16 16">
                  <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"/>
                </svg>
                <p>i'm impressed with the results i've seen since starting to use this product, I begin receiving client and projects in the first week.</p>
                

                <div className="author-id flex items-center mt-[16px]">
                  <Image className="rounded-full h-[36px]" src="/212.jpg" alt="Landscape picture" width={36} height={36}/>
                  <div className='ml-3 text-xs'>
                    <h4 className='font-semibold'>Amir</h4>
                    <p className='text-slate-400'>Frontend Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#2d3345] rounded-xl text-white p-9 pb-4 relative overflow-hidden mb-9">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="#414759" className="bi bi-broadcast-pin 
                w-14 absolute -top-4 left-6" viewBox="0 0 16 16">
                  <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"/>
                </svg>
                
                <p>i'm impressed with the results i've seen since starting to use this product, I begin receiving client and projects in the first week.</p>
                
                <div className="author-id flex items-center mt-[16px]">
                  <Image className="rounded-full h-[36px]" src="/212.jpg" alt="Landscape picture" width={36} height={36}/>
                  <div className='ml-3 text-xs'>
                    <h4 className='font-semibold'>Amir</h4>
                    <p className='text-slate-400'>Frontend Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        
        
        </div>
        <div className="right-side ">
          <h2>asd</h2>
        </div>
      </div>
    </main>
  )
}