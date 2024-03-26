import React from "react";

export const TrustedBy = () => {
  return (
      <>
          <div className="bg-[#FFFFFF] py-[8rem] h-[136.813rem]">
      <div className="flex items-center relative justify-center">
        <div className="left-[12.563rem] absolute rounded-full h-[6.25rem] w-[6.25rem] bg-gradient-to-bl from-[#4361EE] to-[#4361EE bg-opacity-0]"></div>

        <p className="absolute h-[1rem] text-center text-[#64748B]">
          Trusted by 100+ Companies across the globe!{" "}
        </p>
      </div>

      <div className="flex gap-[5.625rem] items center justify-center mt-[6rem] mb-[11.75rem] grayscale">
        <img className='' src="image 1.png" alt="" />
        <img src="image 2.png" alt="" />
        <img src="image 3.png" alt="" />
        <img src="image 4.png" alt="" />
        <img src="image 5.png" alt="" />
        <img src="image 6.png" alt="" />
        </div>
        
        <div className="flex justify-around relative">
            <div className="absolute left-[10rem]">
              <div className="">
              <p className="text-[#4361EE] font-medium">WHO ARE WE</p>
              <div className="text-[#2B2B2B] text-[2.488rem] font-semibold 2.938">Assisting individuals in <br /> locating the appropriate<br/> real estate.</div>
              <p className="text-[#64748B] text-[1rem] font-normal">Donec porttitor euismod dignissim. Nullam a lacinia ipsum,<br/> nec dignissim purus. Nulla convallis ipsum molestie nibh <br/>malesuada, ac malesuada leo volutpat.</p>
              </div>

              <div className="flex items-center p-[1.875rem] rounded-3xl shadow-lg">
                <div className="mr-[1.563rem]"><img src="🦆 icon _user octagon_.png" alt="" /></div>
                <div className="flex flex-col">
                <p className="mb-[1.25rem] text-[#4361EE] text-[1.213rem]">Donec porttitor euismod</p>
                <p className="text-[#64748B] text-[1rem] font-normal">Nullam a lacinia ipsum, nec <br/> dignissim purus. Nulla</p>
              </div>
            </div>
          <div className="flex items-center p-[1.875rem] rounded-3xl shadow-lg">
            <div className="mr-[1.563rem]"><img src="🦆 icon _smart home_.png" alt="" /></div>
            <div className="flex flex-col">
              <p className="mb-[1.25rem] text-[#4361EE] text-[1.213rem]">Donec porttitor euismod</p>
              <p className="text-[#64748B] text-[1rem] font-normal">Nullam a lacinia ipsum, nec <br/> dignissim purus. Nulla</p>
            </div>
          </div>
        </div>

          <div className="absolute right-[20rem] ">
            <div className="flex z-10 relative justify-center">
          <div className="absolute top-[8.3rem] right-[10rem] flex w-[17.5rem] h-[31.25rem] overflow-hidden z-20">
            <img className='self-stretch object-cover rounded-3xl' src="Rectangle14.jpeg " alt="" />
          </div>
          <div className="absolute top-11 flex flex-col gap-8 w-[17.5rem] z-20">
            <img className="rounded-3xl" src="Rectangle15.jpeg" alt="" />
            <img className="rounded-3xl" src="Rectangle16.jpeg" alt="" />
            <div className="left-[4rem] absolute rounded-full h-[3.75rem] w-[3.75rem] bg-gradient-to-bl from-[#4361EE] to-[#4361EE00] top-[30rem]"></div>
          </div>
            </div>
          </div>
          
          <div className="flex flex-col">
          <div className="absolute top-[50rem] left-[10rem] flex items-center">
              <div>
              <p className="text-[#4361EE] text-[1.213rem]">CHECKOUT OUR NEW</p>
              <p className="text-[#2B2B2B] text-[2.488rem] font-semibold">Latest Listed Properties</p>
                <div className="text-[#64748B] text-[1rem] font-normal">Donec porttitor euismod dignissim. Nullam a lacinia ipsum,<br /> nec dignissim purus. </div>
              </div>
                <div className="ml-[21.813rem]">
              <ul className="flex gap-[1.25rem]">
                      <li><a href="" className="py-3 px-4 text-center rounded-2xl border border-[#03AEFD] " >All</a></li>
                      <li><a href="" className="py-3 px-4 text-center rounded-2xl text-white bg-[#03AEFD]" >Sell</a></li>
                      <li><a href="" className="py-3 px-4 text-center rounded-2xl border border-[#03AEFD]" >Rent</a></li>
              </ul>
            </div>
            
            
              <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box absolute top-[10.938rem] w-[100%]">
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
          </div>
              </div>
              </div>
        </div>
         </div>

      </div>
      
    </>
  );
};
