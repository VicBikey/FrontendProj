export const Testimonials = () => {
    return (
        <>
            <div className="bg-white">
      <div className=" pt-[11.25rem] px-[10rem] flex justify-around items-center">
              <div className="flex flex-col items-start">
                <p className="text-[#4361EE] ">TESTIMONIALS</p>
                <p className="text-[2.488rem] text-[#2B2B2B] font-semibold my-[1.875rem] ">Look What Our<br/> Customers Say!</p>
                <p className="text-[1rem] text-[#2B2B2B] font-normal mb-[3.75rem]">Fusce venenatis tellus a felis scelerisque, non<br/> pulvinar est pellentesque. </p>
                
                <div className="flex gap-[3.125rem] ">
                <img src="Frame 58.png" alt="" />
                <img src="Frame 57.png" alt="" />
                </div>

            </div>
            
          <div className="flex gap-8 items-center">
          <div className="w-[31.25rem] h-[22.375rem] box-border pt-[2.125rem] flex flex-col items-center rounded-3xl shadow-2xl	">
              <div className="">
                <img className='mb-[1.171rem]' src="yellow.png" alt="" />
                <p className="font-medium text-[#2B2B2B] text-[1.213rem] mb-[2.5rem]">I highly recommend Jodi J. Appleby.<br/> She was attentive to our needs and<br/> worked tirelessly to find us the perfect<br/> home. We couldn't be happier with our<br/> new place!</p>
                  <div className=" bg-[#D4D4D4] border w-[21rem] mb-[1.25rem]"></div> 
                </div>
             
              <div className="flex items-center">
                    <img className='h-[3.125rem] w-[3.125rem] object-cover rounded-full mr-4' src="https://s3-alpha-sig.figma.com/img/738e/6e77/a92971e6075b85d18be0de93205d90cb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FsIyti2MbedL7DIfhhe18kiBYXRtvfforsrO~CWcPHeiQyaJBAxbK3hCnqstEXBH7oq6UjRx80pEwUFOftsXnHL--imQ0fnR7U3IZQcYN-LWF8237O9QuSpt8YAO9srM6C-asVxNHwxY3LUOzaNdUh7Fye4aG9ilqIf7cxO8rZ9JVUE-h5n-muv4Vv32eu8polQNz5YMkg5jcZ-hEhQ~RDJa77wpdizCRWVCGI5UeVvEw14W~ALJ~v-4SXnnpyuMK5Vv1xXgbUvxVDnDtwvY3nwXk738D2DaZYkfVgNyPnEtNyqYn3YYQ8zzT-8dG6EbQQ4-lmbNz4G19czCzFW8hg__" alt="" />
                  <p className="text-[#2B2B2B] text-[1.213rem] ">Barbara D. Smith</p>
                  <img className='object-contain justify-self-end' src="stars.png" alt="" />
            </div>
              </div>
              
              <img className='h-[6rem]' src="slide.png" alt="" />
          </div>

                </div>
                

          <div className="hero min-h-screen  flex justify-center mt-[7rem]">
            
            <div className="hero-content h-[16.25rem] w-[75rem] flex-col lg:flex-row bg-[#03AEFD] rounded-3xl relative ">
            <div className=" absolute self-end bottom-9 left-[16.625rem] rounded-full h-[6.25rem] w-[6.25rem] bg-gradient-to-br from-[#FFFFFF70] to-[#FFFFFF00] "></div>
            <div className="absolute top-0 right-7 bottom-[12.5rem] self-end rounded-full h-[6.25rem] w-[6.25rem] bg-gradient-to-br from-[#FFFFFF70] to-[#FFFFFF00]"></div>

                <img className=" w-[22.375rem] object-cover absolute bottom-0 left-0" src="picMan.png" />
                <div className="flex flex-col ">
                <h1 className="font-semibold text-[2.488rem] text-white ">Become an Agent.</h1>
                <p className="py-6 font-normal text-[1rem] text-white ">Fusce venenatis tellus a felis scelerisque.<br/> venenatis tellus a felis scelerisque. </p>
                </div>
                <button className="btn border-none bg-white text-[#03AEFD] rounded-3xl justify-self absolute right-[11.25rem]">Register Now</button>
            </div>
            </div>
            </div>
            </>
  )
}