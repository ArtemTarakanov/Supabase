import {useState} from 'react';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <section className = "h-16.25 bg-[#181818] flex justify-around items-center">
            <div className = "flex gap-8 items-center">
                <img src="/images/logotype.svg" alt="logotype"/>
                <ul className = "flex gap-4 font-['Roboto'] text-sm font-normal leading-5 text-[#EEEEEE] max-md:hidden">
                    <a href="#" className = "rounded-md px-4 hover:shadow-5xl hover:bg-white hover:text-black ">Product</a>
                    <a href="#" className = "rounded-md px-4 hover:shadow-5xl hover:bg-white hover:text-black ">Developers</a>
                    <a href="#" className = "rounded-md px-4 hover:shadow-5xl hover:bg-white hover:text-black ">Beta</a>
                    <a href="#" className = "rounded-md px-4 hover:shadow-5xl hover:bg-white hover:text-black ">Pricing</a>
                </ul>
            </div>

            <div className = "flex gap-4 items-center max-md:hidden">
                <a href="#" className = "font-['Roboto'] font-bold text-xs leading-4 text-center text-[#FFFFFF] bg-[#24B47E] rounded-sm h-7.5 px-2.75 py-1.75 shadow-[#0000000B] hover:-translate-y-1.25 hover:shadow-5xl">Start your project</a>
                <a href="#" className = "font-['Roboto'] font-bold text-sm leading-5 text-center text-[#FFFFFF] hover:-translate-y-1.25 hover:shadow-5xl">Sign in</a>
            </div>

            <button onClick = {()=>{
                setIsOpen(!isOpen);
            }} className = "md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`text-[#3ECF8E] bi bi-caret-down-fill duration-300 ${isOpen?'rotate-180':''}`} viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </button>

            {isOpen&&(
                <div className = "md:hidden absolute flex flex-col gap-5 bg-[#181818] top-16.25  w-full justify-center items-center py-4 px-4 animate-fadeIn">

                        <ul className = "flex gap-3 font-['Roboto'] text-sm font-normal leading-5 text-[#EEEEEE] flex-col items-center justify-center w-full">
                            <a href="#">Product</a>

                            <div className = "h-[0.25px] w-full bg-gray-400 opacity-75"/>

                            <a href="#">Developers</a>

                            <div className = "h-[0.25px] w-full bg-gray-400 opacity-75"/>

                            <a href="#">Beta</a>

                            <div className = "h-[0.25px] w-full bg-gray-400 opacity-75"/>

                            <a href="#">Pricing</a>

                            <div className = "h-[0.25px] w-full bg-gray-400 opacity-75"/>
                        </ul>

                        <div className = "flex flex-col gap-2 items-center w-full  ">
                            <a href="#" className = "font-['Roboto'] font-bold text-sm leading-4 text-center text-[#FFFFFF] bg-[#24B47E] rounded-sm h-8 px-2.75 py-1.75 shadow-[#0000000B] w-full">Start your project</a>
                            <a href="#" className = "font-['Roboto'] font-bold text-sm leading-5 text-center text-black bg-white rounded-sm h-8 px-2.75 py-1.75 shadow-[#0000000B] w-full ">Sign in</a>
                        </div>

                </div>
            )}

        </section>
    );
}