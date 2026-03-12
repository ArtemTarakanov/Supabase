export default function Start(){
    return(
        <section id="start" className = "h-96 bg-[#181818] flex items-center justify-center max-md:h-auto max-md:py-12 max-md:px-4">
            <div className = "flex flex-col gap-12 items-center max-md:gap-6 ">
                <p className = "font-['Roboto'] font-normal text-4xl leading-10 text-white max-md:text-3xl max-md:leading-tight max-md:text-center"> <span className = "text-[#BBBBBB]">Build in a weekend,</span>  scale to millions</p>
                <button className = "bg-[#24B47E] w-39 px-4 py-2 rounded-sm shadow-[#0000000B] max-md:w-1/2 max-md:py-3">
                    <a href="#footer" className = "font-['Roboto'] font-normal text-sm leading-5 text-white max-md:text-sm">Start your project</a>
                </button>
            </div>
        </section>
    );
}