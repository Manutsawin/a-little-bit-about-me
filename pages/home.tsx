import Nav from "@/components/nav"
import Image from 'next/image'
function Home() {
    return (
        <div className="bg-space-bg h-screen bg-center bg-cover">
            <Nav></Nav>
            <div className="md:container px-2  pt-5 md:text-left text-center">
                <h1 className="text-2xl  text-white">
                <span className="text-[#ffffff70] font-bold mr-2 xl:pl-28 md:pl-20">01</span> MANUTSAWIN  KOOLMENG</h1>
                <div className="md:flex items-center md:justify-between  pt-6 ">
                <div className="md:w-1/2 xl:pl-28 md:pl-20">
                    <ul className="text-white pb-4">
                    <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2 border-b-2">AGI</li>
                    <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">INT</li>
                    <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">STR</li>
                    <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">OVER ALL</li>
                    </ul>
                    <h1 className="text-white w-full font-Bellefair pb-2 text-7xl">STAR</h1>
                    <p className="text-[#d2d8f9] font-extralight text-sm md:w-2/3 md:pl-1 leading-6 tracking-wide pb-10 border-b-[0.5px] border-[#ffffff66]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum corrupti aperiam consequatur recusandae aliquam exercitationem minus praesentium, similique nulla expedita voluptatum sunt quaerat tempore a, accusamus eos quo! Repellat.
                    </p>
                    <div className="flex md:justify-between justify-around lg:w-1/2 w-auto pt-10">
                    <div>
                        <span className="text-[#d2d8f9] text-sm">Score</span>
                        <h1 className="text-white text-xl">384,400 KM</h1>
                    </div>
                    <div>
                        <span className="text-[#d2d8f9] text-sm">Time</span>
                        <h1 className="text-white text-xl">3 DAYS</h1>
                    </div>
                    </div>
                </div>
                <img src="me.jpg" className="xl:w-[25%] md:w-[36%] w-[52%]  xl:mx-0 md:mx-0 mx-auto  rounded-md bg-[#ffffff14] backdrop-blur-md p-7" />
                </div>
            </div>
        </div>
    )
}
export default Home