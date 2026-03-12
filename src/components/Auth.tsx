export default function Auth(){
    return(
        <section id="auth" className = "bg-[#181818] h-175 flex items-center justify-center max-md:h-auto max-md:py-8 max-md:px-4">
            <div className = "flex flex-row gap-40 max-md:flex-col max-md:gap-8">


                <div className = "flex flex-col gap-20 max-md:gap-2">

                    <div className = "flex flex-col gap-4 max-md:text-center max-md:gap-3">
                        <h1 className = "font-['Roboto'] font-normal text-4xl leading-10 text-white max-w-92 max-md:text-3xl max-md:max-w-none max-md:leading-tight">Simple and convenient APIs</h1>
                        <p className = "font-['Roboto'] font-normal text-sm leading-5 text-[#E0E0E0] max-md:text-sm">Built from the ground-up for interoperable authentication.</p>
                        <p className = "font-['Roboto'] font-normal text-sm leading-5 text-[#E0E0E0] max-w-97 max-md:max-w-none max-md:text-sm">Fast and easy to implement using our powerful library clients. Asset optimization and image transformation coming soon!</p>
                    </div>

                    <img src="/images/api.svg" alt="api" className="hidden max-md:block max-md:w-full max-md:max-w-80 max-md:mx-auto max-md:mt-6 max-md:mb-1"/>

                    <div className = "flex flex-row gap-16 max-md:flex-col max-md:gap-6">

                        <div className="flex flex-col gap-4 max-md:items-center max-md:text-center max-md:gap-3">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:w-6 max-md:h-6">
                                <path d="M4.375 10.9813C6.10449 9.5408 8.28415 8.75195 10.535 8.75195C12.7858 8.75195 14.9655 9.5408 16.695 10.9813" stroke="#A1A1A1" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.24249 7.87488C3.79961 5.62085 7.09125 4.3772 10.5 4.3772C13.9087 4.3772 17.2004 5.62085 19.7575 7.87488" stroke="#A1A1A1" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.46375 14.0961C8.35205 13.465 9.41471 13.126 10.5044 13.126C11.594 13.126 12.6567 13.465 13.545 14.0961" stroke="#A1A1A1" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.5 17.5H10.5088" stroke="#A1A1A1" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <h2 className = "font-['Roboto'] font-normal text-lg leading-7 text-white max-md:text-base">CDN integration</h2>
                            <h3 className = "font-['Roboto'] font-normal text-sm leading-5 text-[#E0E0E0] max-w-37 max-md:max-w-none max-md:text-sm">Serve from the edge to reduce latency.</h3>
                            <a href="#" className="bg-[#3182CE1A] rounded-[9999px] py-0.5 px-2.5 max-w-25 font-['Roboto'] font-normal text-xs leading-4 text-[#4299E1] max-md:max-w-none max-md:w-fit max-md:mx-auto">Coming soon</a>

                        </div>

                        <div className="flex flex-col gap-4 max-md:items-center max-md:text-center max-md:gap-3">

                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:w-6 max-md:h-6">
                                <path d="M14 2.625H18.375V7" stroke="#A1A1A1" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 17.5L18.375 2.625" stroke="#A1A1A1" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.375 14V18.375H14" stroke="#A1A1A1" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.125 13.125L18.375 18.375" stroke="#A1A1A1" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 3.5L7.875 7.875" stroke="#A1A1A1" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <h2 className = "font-['Roboto'] font-normal text-lg leading-7 text-white max-md:text-base">Auto transformation</h2>
                            <h3 className = "font-['Roboto'] font-normal text-sm leading-5 text-[#E0E0E0] max-w-41 max-md:max-w-none max-md:text-sm">Resize and compress your media before you serve it.</h3>
                            <a href="#" className="bg-[#3182CE1A] rounded-[9999px] py-0.5 px-2.5 max-w-25 font-['Roboto'] font-normal text-xs leading-4 text-[#4299E1] max-md:max-w-none max-md:w-fit max-md:mx-auto">Coming soon</a>

                        </div>

                    </div>

                </div>


                <img src="/images/api.svg" alt="api" className="max-md:hidden"/>

            </div>
        </section>
    );
}