export default function Hero(){
    return(
        <section id="hero" className = "bg-[#181818] h-150 flex flex-row items-center justify-center max-md:h-auto max-md:py-8 max-md:px-4">
            <div className = "flex flex-row gap-10 max-md:flex max-md:flex-col-reverse max-md:gap-6">
                <div className = "flex flex-col max-md:items-center max-md:text-center">

                    <div className="flex gap-3 items-center mb-4 max-md:mb-6 max-md:hidden">
                        <svg width="32" height="32"  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:w-6 max-md:h-6">
                            <path d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z" fill="white"/>
                            <path d="M9.375 12H21.625H9.375ZM9.375 12C8.91087 12 8.46575 11.8156 8.13756 11.4874C7.80937 11.1592 7.625 10.7141 7.625 10.25C7.625 9.78587 7.80937 9.34075 8.13756 9.01256C8.46575 8.68437 8.91087 8.5 9.375 8.5H21.625C22.0891 8.5 22.5342 8.68437 22.8624 9.01256C23.1906 9.34075 23.375 9.78587 23.375 10.25C23.375 10.7141 23.1906 11.1592 22.8624 11.4874C22.5342 11.8156 22.0891 12 21.625 12H9.375ZM9.375 12V20.75C9.375 21.2141 9.55937 21.6592 9.88756 21.9874C10.2158 22.3156 10.6609 22.5 11.125 22.5H19.875C20.3391 22.5 20.7842 22.3156 21.1124 21.9874C21.4406 21.6592 21.625 21.2141 21.625 20.75V12H9.375ZM13.75 15.5H17.25H13.75Z" fill="#6A6A6A"/>
                        </svg>

                        <p className = "fonr-['Roboto'] font-normal text-lg leading-7 text-white max-md:text-base">Storage</p>
                    </div>

                    <h1 className = "font-['Roboto'] font-bold text-5xl leading-14.5 text-white mb-13 max-md:text-3xl max-md:mb-6 max-md:leading-tight">Store and serve <br className="max-md:hidden"/> any type of digital content</h1>
                    <p className = "font-['Roboto'] font-normal text-sm leading-7 text-[#E0E0E0] mb-4 max-w-100 max-md:mb-3 max-md:max-w-none max-md:text-sm">An open source Object store service with unlimited scalability, for any file type.</p>
                    <p className = "font-['Roboto'] font-normal text-sm leading-7 text-[#E0E0E0] mb-16 max-w-100 max-md:mb-8 max-md:max-w-none max-md:text-sm">With custom policies and permissions that are familiar and easy to implement.</p>
                    <a href="#features" className = "font-['Roboto'] font-normal text-sm leading-5 text-center text-white bg-[#24B47E] rounded-sm h-9.5 px-4 py-2 max-w-33 hover:-translate-y-1.25 hover:shadow-5xl max-md:w-full max-md:max-w-none max-md:text-sm max-md:py-3 max-md:flex max-md:items-center max-md:justify-center">Start a project</a>
                </div>

                <img src="/images/hero.svg" alt="hero image" className = "max-w-140 max-md:w-full max-md:max-w-80 max-md:mx-auto"/>
            </div>
        </section>
    );
}