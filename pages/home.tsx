import Nav from "@/components/nav"
import { useState,useEffect } from "react"

function Home() {

    const [listStatus,setListStatus] = useState(0)
    const [textTitle,setTextTitle] = useState("")
    const [text,setText] = useState("")

    const listText = [
        "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum corrupti aperiam consequatur recusandae aliquam exercitationem minus praesentium, similique nulla expedita voluptatum sunt quaerat tempore a, accusamus eos quo! Repellat.",
        "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum corrupti aperiam consequatur recusandae aliquam exercitationem minus praesentium, similique nulla expedita voluptatum sunt quaerat tempore a, accusamus eos quo! Repellat.",
        "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum corrupti aperiam consequatur recusandae aliquam exercitationem minus praesentium, similique nulla expedita voluptatum sunt quaerat tempore a, accusamus eos quo! Repellat.",
        "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum corrupti aperiam consequatur recusandae aliquam exercitationem minus praesentium, similique nulla expedita voluptatum sunt quaerat tempore a, accusamus eos quo! Repellat."  
    ]

    const listTextTiTle = [
        "1Lorem",
        "2Lorem",
        "3Lorem",
        "4Lorem"  
    ]

    function changeText(){
        if(listStatus==0){
            setText(listText[0])
            setTextTitle(listTextTiTle[0])
        }
        else if (listStatus==1){
            setText(listText[1])
            setTextTitle(listTextTiTle[1])
        }
        else if (listStatus==2){
            setText(listText[2])
            setTextTitle(listTextTiTle[2])
        }
        else if (listStatus==3){
            setText(listText[3])
            setTextTitle(listTextTiTle[3])
        }
    }

    useEffect(()=>{
        changeText()
    }, [listStatus]);


    return (
        <div className="bg-space-bg h-screen bg-center bg-cover">
            <Nav></Nav>
            <div className="md:container px-2  pt-5 md:text-left text-center">
                <h1 className="text-2xl  text-white"><span className="text-[#ffffff70] font-bold mr-2 xl:pl-28 md:pl-20">WHO AM I :</span> MANUTSAWIN  KOOLMENG</h1>
                <div className="md:flex items-center md:justify-between  pt-6 ">
                <div className="md:w-1/2 xl:pl-28 md:pl-20">
                    <ul className="text-white pb-4">
                        <li value={0} onClick={(e)=>setListStatus(e.currentTarget.value)} className={listStatus==0?"inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 border-b-2 ":"inline-block cursor-pointer md:mr-8 md:mx-0 mx-4"}>AGI</li>
                        <li value={1} onClick={(e)=>setListStatus(e.currentTarget.value)} className={listStatus==1?"inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 border-b-2 ":"inline-block cursor-pointer md:mr-8 md:mx-0 mx-4"} id="1">INT</li>
                        <li value={2} onClick={(e)=>setListStatus(e.currentTarget.value)} className={listStatus==2?"inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 border-b-2 ":"inline-block cursor-pointer md:mr-8 md:mx-0 mx-4"} id="2">STR</li>
                        <li value={3} onClick={(e)=>setListStatus(e.currentTarget.value)} className={listStatus==3?"inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 border-b-2 ":"inline-block cursor-pointer md:mr-8 md:mx-0 mx-4"} id="3">OVER ALL</li>
                    </ul>
                    <h1 className="text-white w-full font-Bellefair pb-2 text-7xl">{textTitle}</h1>
                    <p className="text-[#d2d8f9] font-extralight text-sm md:w-2/3 md:pl-1 leading-6 tracking-wide pb-10 border-b-[0.5px] border-[#ffffff66]">{text}</p>
                    <div className="flex md:justify-between justify-around lg:w-1/2 w-auto pt-10">
                    <div>
                        <span className="text-[#d2d8f9] text-sm">Status</span>
                        <h1 className="text-white text-xl">MALE</h1>
                    </div>
                    <div>
                        <span className="text-[#d2d8f9] text-sm">Age</span>
                        <h1 className="text-white text-xl">21 YEARS</h1>
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