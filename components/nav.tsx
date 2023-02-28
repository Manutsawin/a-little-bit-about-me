const Nav = () =>
{
   const menus = [
      { name: "HOME" },
      { name: "ABOUT ME" },
      { name: "CONTACT" },
      { name: "STACK" },
   ]
   return (
      <nav className="flex items-center justify-between pt-5">
         {/* <img src={"./src/assets/icon-close.svg"} className="md:hidden  fixed right-5 cursor-pointer z-20 top-6" /> */}
         {/* <img src="./src/assets/logo.svg" alt="logo" className="w-10 ml-7" /> */}
         <ul className={`bg-[#ffffff14] backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 `}>
            {
               menus.map((menu, index) => (
                  <li key={index} className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
                     <a className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">
                        <span className="font-bold mr-1.5">0{index}</span>  {menu.name}</a>
                  </li>
               ))
            }
         </ul>
      </nav>
   )
}
export default Nav