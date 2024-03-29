export const Navbar = () => {
  return (
    <>
      <div className="z-50 sticky top-0">
      <div className="navbar bg-[#03AEFD] text-[#FFFFFF] px-24 h-10 ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img src="/location.png" alt="" />
            Rezilla, 18 Grattan St, Brooklyn
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>
                {" "}
                <img src="/Vector.png" alt="" /> +1 206-214-2298
              </a>
            </li>
            <li>
              <a href="">
                <img src="/mail.png" alt="" />
                support@rezilla.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* The second Navbar begins here*/}
      <div className="flex items-center justify-center py-10 bg-[#FFFFFF] text-[#2B2B2B] px-24 h-10">
        <div className="flex-1">
          <ul className="flex">
            <li>
              <a
                href=""
                className="bg-[#4361EE]/30 py-4 px-4 text-center rounded-2xl"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="ml-4 hover:pb-2 hover:text-[#1BC8D3] hover:border-b-2 hover:border-[#1BC8D3]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="ml-4 hover:pb-2 hover:text-[#1BC8D3] hover:border-b-2 hover:border-[#1BC8D3]"
              >
                Listings
              </a>
            </li>
            <li>
              <a
                href=""
                className="ml-4 hover:pb-2 hover:text-[#1BC8D3] hover:border-b-2 hover:border-[#1BC8D3]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href=""
                className="ml-4 hover:pb-2 hover:text-[#1BC8D3] hover:border-b-2 hover:border-[#1BC8D3]"
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>
        {/* links stops here */}

        <div className="flex-1 justify-center">
          <div className="flex p-4 items-center">
            <img
              className="p-4 bg-[#03AEFD] rounded-full mr-3"
              src="/Home.png"
              alt=""
            />
            <p>Rezilla</p>
          </div>
        </div>

        <div>
          <ul className="items-center menu menu-horizontal">
            <li>
              <a className="font-medium">
                {" "}
                <img src="/login.png" alt="" /> Login/Register
              </a>
            </li>
            <li>
              <a
                className="py-3 px-5 bg-[#03AEFD] rounded-3xl text-[#FFFFFF] h-[3.125rem] items-center font-medium"
                href=""
              >
                <div className="flex items-center">
                  <img className="mr-3" src="/Home.png" alt="" />
                  <p>Add Listing</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        </div>
        </div>
    </>
  );
};
