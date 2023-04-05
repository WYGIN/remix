export default function Drawer({ drawer }) {
  return(
    <nav id="drawer" className="fixed [inset: 0px] z-[1200] block text-[#1A2027] hidden lg:block">
      <div id="backdrop-overlay-aside" className="fixed flex items-center justify-center bg-[#00000080] z-[-1] opacity-100 transition-opacity duration-[225ms] ease-in-out delay-[0ms]"></div>
      <div className="block"></div>
      <div className="[transform: none] transition-transform duration-[225ms] ease-out sm:w-[310px] text-[#1A2027] bg-white flex flex-[1_0_auto] flex-col h-full z-[1200] fixed top-0 right-0 rounded-r-[10px] pb-[40px] [box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px]">
        <ul className="my-1 relative">
          { drawer.map((item, index) => (
            <li className="block pt-2 px-[10px]" key={index}>
              <a className="hover:text-[#1A2027] hover:bg-transparent text-[0.875rem] font-medium items-center rounded-[5px] w-full my-[5px] pl-[2px]" href={item.slug}>
                <span className="h-full items-center mr-3 py-[2px]">{item.logo}</span>
                {item.name}
              </a>
            </li>
          )) }
        </ul>
      </div>
      <div className="block"></div>
    </nav>
  )
}
