export const Hero = () => {
  return (
    <div className="hero relative bg-gradient-to-t from-[#9daae4] to-[#FFFF] bg-opacity-70 min-h-screen bg-base-200 h-[56.375rem] flex">
      <div className="flex">
        <div className="z-20 absolute left-[10rem] top-[5.563rem] flex flex-col">
          <div>
            <p className="font-medium text-[#4361EE] text-[1.213rem] mb-[1.875rem]">
              REAL ESTATE
            </p>
            <p className="font-semibold w-[36.25rem] h-[6.563rem] text-[3.581rem] text-[#0B090A] mb-[3rem] leading-[4.063rem]">
              Find a perfect
              <br /> home you love..!
            </p>
            <p className="text-[1rem] w-[36.25rem] h-[2.313rem] text-[#64748B]">
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
              <br /> Integer a dolor eu sapien sodales vulputate ac in purus.
            </p>
          </div>
          <div className="">
            <div className="flex absolute left-[31.5rem] rounded-full h-[3.75rem] w-[3.75rem] bg-gradient-to-bl from-[#4361EE] to-[#4361EE bg-opacity-0] left-[10rem]"></div>
          </div>
        </div>
        <div className="carousel w-[33.75rem] absolute top-[24rem]	left-[10rem] 'carousel-container h-[21.938rem] z-10 rounded-3xl">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://s3-alpha-sig.figma.com/img/8e3e/78b2/c0db865f789961bb3e28500f19c35c4e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mDkqokxKTvIH3E073h0ly-7l9re~q2WBG2aGl829q78rvHqolssxHfcXK09DVsv7te1ODFoAcpan2yuygf~RyqRlAg8UmF8fxrf-94dWWRRuAnHLXePfvtUhToCAdn8tz4U9m6eVKiripQDC5QHB20RkN62lVXkWubZQ02Mr-v8Qjd4eX4RrED6Aop0oPHazxotC2g21rDHx0JHgfn4Ua9jymKaDi4RAiwryNBPK97uhUWz6RQKzHOq2S7vFGQETriSJtampafHIVLH1uweVahz7BtVugEgPbchVyzz0X26mHkiIEjBDoe9pN~b~L7Dk5lHPBICD3WzlywNN2rH8yg__"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-[2.125rerm] rounded-3xl shadow-gray-400 pb-[3.75rem] absolute right-[10rem] bottom-[10.5rem] h-[36rem]">
          <div className=" pt-[1.813rem] border-b-2 border-gray-400 px-[5.125rem]">
            <h2 className="relative text-[1rem] font-medium	text-[#03AEFD] border-b-2 pb-[1.813rem] border-[#03AEFD] inline-block mr-[7.813rem] ">
              For Sale
            </h2>
            <h2 className="relative text-[1rem] font-medium	text-[#64748B] hover:[#03AEFD] hover:border-b-2 hover:pb-[1.813rem] border-[#03AEFD]]  decoration-[#03AEFD] inline-block">
              For Rent
            </h2>
          </div>
          <form className="mt-[3.125rem] mx-[2.5rem]" action="#">
            <div className="input-box h-[3.688rem] mb-[1.875rem]">
              <input
                className="bg-[#D4D4D430] h-[3.688rem] w-[21.25rem] mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-2xl sm:text-sm focus:ring-1 text-[#AAAAAA]"
                placeholder="New York, San Francisco, etc"
                type="text"
                required
              ></input>
            </div>
            <div className="input-box h-[3.688rem] mb-[1.875rem]">
              <input
                className="bg-[#D4D4D430] h-[3.688rem] w-[21.25rem] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-2xl sm:text-sm focus:ring-1 text-[#AAAAAA]"
                type="text"
                placeholder="Select Property Type"
                required
              ></input>
            </div>
            <div className="input-box h-[3.688rem] mb-[1.875rem]">
              <input
                className="bg-[#D4D4D430] h-[3.688rem] w-[21.25rem] mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-2xl sm:text-sm focus:ring-1 text-[#AAAAAA]"
                type="text"
                placeholder="Select Rooms"
                required
              ></input>
            </div>

            <div class="button font-medium justify-center text-[white] text-[1rem]">
              <input
                className="bg-[#03AEFD] w-[21.25rem] rounded-3xl h-[3.75rem] "
                type="Submit"
                value="Search"
              />
            </div>
          </form>
        </div>
      </div>

<div className="flex gap-[1.875rem] justify-center items-center absolute left-[22rem]">
        <div className="bg-[#FFFF] w-[22.5rem] rounded-l-full rounded-r-full z-20 h-[6.25rem] flex justify-center items-center relative top-[28rem]">
          <img
            className="w-[2.25rem] h-[2.25rem] absolute z-30 left-[2.25rem]"
            src="Ellipse 3.png"
            alt=""
          />
          <img
            className="w-[2.25rem] h-[2.25rem] absolute z-30 left-[3.75rem]"
            src="Ellipse 4.png"
            alt=""
          />
          <img
            className="w-[2.25rem] h-[2.25rem] absolute z-30 left-[5.188rem]"
            src="Ellipse 5.png"
            alt=""
          />
          <img
            className="w-[2.25rem] h-[2.25rem] absolute z-30 left-[6.688rem]"
            src="Ellipse 6.png"
            alt=""
          />
          <img
            className="w-[2.25rem] h-[2.25rem] absolute z-30 left-[8.188rem]"
            src="Ellipse 7.png"
            alt=""
          />
          <img
            className="w-[2.25rem] h-[2.25rem] absolute z-30 left-[9.688rem]"
            src="dark.png"
            alt=""
          />
          <p className="font-medium text-[1.213rem] text-[#2B2B2B] absolute left-[12.563rem] ">
            72k+ Happy <br /> Customers
          </p>
        </div>
        <div className="bg-[#FFFF] w-[22.5rem] rounded-l-full rounded-r-full z-20 h-[6.25rem] flex gap-[0.625rem] justify-center items-center relative top-[28rem] pl-[] pr-[]">
          <img
            className="w-[3.75rem] h-[3.75rem]"
            src="Ellipse 3-1.png"
            alt=""
          />
          <p className="font-medium text-[1.213rem] text-[#2B2B2B]">
            200+ New <br />
            Listings Everyday!
          </p>
        </div>
      </div>
      
   
    </div>
  );
};
