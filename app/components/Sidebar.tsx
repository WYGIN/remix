export default function Sidebar() {
  return(
      <aside className="fixed [inset: 0px] z-[1200] block text-[#1A2027] hidden md:block">
        <div id="backdrop-overlay-aside" className="fixed flex items-center justify-center bg-[#00000080] z-[-1] opacity-100 transition-opacity duration-[225ms] ease-in-out delay-[0ms]"></div>
        <div className="block"></div>
        <div className="[transform: none] transition-transform duration-[225ms] ease-out sm:w-[310px] text-[#1A2027] bg-white flex flex-[1_0_auto] flex-col h-full z-[1200] fixed top-0 right-0 rounded-l-[10px]">
          <div className="[box-shadow: 20px 25px 40px 0 rgba(0,0,0,.05)] w-full box-border ">
            <div className="relative z-[1] top-0 right-0 [width: calc(100% - 20px)] bg-white [box-shadow: 0 2px 10px 0 rgba(0,0,0,.07)] rounded-2 p-[15px] mb-[10px] box-border">
              <label className="flex items-center justify-between box-border">
                <span className="font-bold mb-0 w-full box-border"></span>
              </label>
              <ul className="lg:mt-[15px] box-border">
                <li>
                  <a className="pb-5 font-bold text-[#48525C] box-border"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="block"></div>
      </aside>
    )
}
