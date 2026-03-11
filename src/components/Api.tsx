export default function Api(){
    return(
        <section className = "bg-[#181818] h-175 flex items-center justify-center max-md:h-auto max-md:py-8 max-md:px-4">
            <div className = "flex flex-row gap-40 max-md:flex-col max-md:gap-8">

                <div className = "flex flex-col gap-20 max-md:gap-2">

                    <div className = "flex flex-col gap-6 max-md:text-center max-md:gap-3">
                        <h1 className = "font-['Roboto'] font-normal text-4xl leading-10 text-white max-w-92 max-md:text-3xl max-md:max-w-none max-md:leading-tight">Integrates natively with Supabase Auth</h1>
                        
                        {/* Картинка только на мобильной версии */}
                        <img src="/images/auth.svg" alt="auth" className="hidden max-md:block max-md:w-full max-md:max-w-80 max-md:mx-auto max-md:mt-6 max-md:mb-1"/>
                        
                        <p className = "font-['Roboto'] font-normal text-sm leading-5 text-[#E0E0E0] max-md:text-sm">Using Postgres Row Level Security to create Object access rules.</p>
                        <p className = "font-['Roboto'] font-normal text-sm leading-5 text-[#E0E0E0] max-w-97 max-md:max-w-none max-md:text-sm">Storage Authorization is built around Postgres so that you can use any combination of SQL, Postgres functions, and even your own metadata to write policies.</p>
                        
                        <button className = "bg-[#2A2A2A] rounded-sm shadow-[#0000000B] flex flex-row gap-2 items-center max-w-60 px-3 py-2.5 justify-center max-md:w-full max-md:max-w-none">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.25 12.75L12.75 5.25" stroke="#A1A1A1" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.25 5.25H12.75V12.75" stroke="#A1A1A1" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <a href="#" className = "font-['Roboto'] font-normal text-sm leading-4 text-[#E0E0E0]">Expore documentation</a>
                        </button>
                    </div>

                </div>

                <img src="/images/auth.svg" alt="auth" className="max-md:hidden"/>

            </div>
        </section>
    );
}