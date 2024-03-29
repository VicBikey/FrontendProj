export const Footer = () => {
  return (
    <>
      <div className="bg-[#ECEFFD] px-[10rem] h-[26.25rem]  flex items-center">
        <footer className="footer grid-cols-4 p-10 text-[#2B2B2B] justify-center">
        <nav>
            <div className="flex relative mb-[2rem]">
            <img
              className="p-[0.813rem] bg-[#03AEFD] rounded-full mr-3 absolute bottom-0"
              src="/Home.png"
              alt=""
            />
            <h6 className="footer-title text-[#0B090A] normal-case ml-[3.625rem] font-semibold text-[1.213rem] opacity-100">Rezilla</h6>
            </div>    

            <a className="link link-hover text-[#2B2B2Brem] font-medium">2728 Hickory StreetSalt<br/>Lake City, UT 84104</a>
            <a className="link link-hover text-[#2B2B2Brem] font-medium mt-[2.5rem] mb-[1.875rem]">+1 206-214-2298</a>
            <a className="link link-hover text-[#2B2B2Brem] font-medium">support@rezilla.com</a>
          </nav>
          <nav>
            <h6 className="footer-title text-[#0B090A] mb-[2.5rem] font-medium text-[1.213rem] normal-case opacity-100">Quick Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Listings</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">Blogs</a>
            <a className="link link-hover">Become a Agent</a>
          </nav>
          <nav>
            <h6 className="footer-title text-[#0B090A] mb-[2.5rem] normal-case font-medium text-[1.213rem] opacity-100">Discovery</h6>
            <a className="link link-hover">Canada</a>
            <a className="link link-hover">United States</a>
            <a className="link link-hover">Germany</a>
            <a className="link link-hover">Africa</a>
            <a className="link link-hover">India</a>
          </nav>
          <form>
            <h6 className="footer-title text-[#0B090A] mb-[2.5rem] font-medium text-[1.213rem] normal-case opacity-100">Subscribe to our<br/>Newsletter!</h6>
            <fieldset className="form-control w-80">
              <div className="join">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input bg-white w-[21.875rem] py-[1.5rem] px-[1.25rem] rounded-3xl input-bordered join-item"
                />
              </div>
              
              <p className="mt-[2rem] footer-title text-[#0B090A] mb-[1rem] font-medium text-[1.213rem] normal-case opacity-100">Follow Us on</p>
              <div className="flex gap-3">
                <img src="linkdn.png" alt="" /><img src="facebook.png" alt="" /><img src="insta.png" alt="" />
              </div>
            </fieldset>
          </form>

        </footer>
      </div>

      <footer className="">
  <aside className="footer footer-center py-4 bg-base-300 text-base-content justify-between flex  flex-1 px-[10rem]">
          <p>© Rezilla – All rights reserved</p>

          <div className="flex gap-[2.5rem]">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Disclaimer</p>
            </div>
  </aside>
</footer>
    </>
  );
};
