export default function DashBoard(){
    return(
        <section className = "flex  bg-[#181818] h-200 items-center justify-center max-md:h-auto max-md:py-8 max-md:px-4">
            <div className = "flex flex-col gap-16 max-md:gap-8">

                <div className = "flex flex-col gap-4 max-md:text-center max-md:gap-3">
                    <h1 className = "font-['Roboto'] font-normal text-5xl leading-14.5 text-white max-md:text-3xl max-md:leading-tight">Sleek dashboard for managing your media</h1>
                    <h2 className = "font-['Roboto'] font-normal text-lg leading-7 text-[#E0E0E0] max-md:text-base">A complete Object Explorer so that any of your team can use.</h2>
                    <h3 className = "font-['Roboto'] font-normal text-sm leading-5 text-[#E0E0E0] max-md:text-sm">Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.</h3>
                </div>

                <div className = "flex flex-row gap-45 max-md:flex-col max-md:gap-6">

                    <img src="/images/dashboard.svg" alt="dashboard" className="max-md:w-full max-md:max-w-80 max-md:mx-auto"/>

                    <div className = "flex flex-col gap-8 max-md:gap-6">

                        <span className = "flex flex-col gap-4 max-md:text-center max-md:gap-3">
                            <p className = "font-['Roboto'] font-normal text-lg leading-7 text-white max-md:text-base">File previews</p>
                            <p className = "font-['Roboto'] font-normal text-base leading-6 text-[#E0E0E0] max-w-80 max-md:max-w-none max-md:text-sm">Preview any media type, including video and audio.</p>
                        </span>

                        <div className = "flex flex-col gap-4 max-md:gap-3">
                            <h2 className = "font-['Roboto'] font-normal text-lg leading-7 text-white max-md:text-base max-md:text-center">Check out our example app</h2>

                            <div className = "flex flex-col bg-[#1F1F1F] p-5 h-40 justify-center rounded-sm max-md:h-auto max-md:p-4">
                                <h1 className = "font-['Roboto'] font-normal text-base leading-6 text-white mb-1 max-md:text-sm max-md:text-center">Profile management example</h1>
                                <h2 className = "font-['Roboto'] font-normal text-[13px] leading-5 text-[#E0E0E0] mb-4 max-w-70 max-md:max-w-none max-md:text-xs max-md:text-center">Update a user account with public profile information, including uploading a profile image.</h2>

                                <span className = "flex flex-row gap-2 items-center max-md:justify-center">
                                    <p className = "font-['Roboto'] font-normal text-sm leading-5 text-[#E0E0E0] max-md:text-xs">Created by:</p>
                                    
                                    <img src="/images/supabase.svg" alt="supabase" className="max-md:w-4 max-md:h-4"/>
                                    
                                    <p className = "font-['Roboto'] font-normal text-[13px] leading-5 text-[#E0E0E0] max-md:text-xs">supabase</p>
                                </span>

                            </div>

                            <div className = "flex flex-col gap-3 max-md:items-center">
                                <span className = "flex flex-row gap-1 items-center max-md:justify-center">
                                    <p className = "font-['Roboto'] font-normal text-sm leading-5 text-[#E0E0E0] max-md:text-xs">nextjs-ts-user-management</p>
                                    <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:w-4 max-md:h-4"><path d="M12 16.5V13.5975C12.0281 13.2398 11.9798 12.8803 11.8583 12.5428C11.7367 12.2053 11.5447 11.8975 11.295 11.64C13.65 11.3775 16.125 10.485 16.125 6.38995C16.1248 5.34282 15.722 4.33585 15 3.57745C15.3419 2.66133 15.3177 1.64872 14.9325 0.749953C14.9325 0.749953 14.0475 0.487453 12 1.85995C10.281 1.39407 8.46899 1.39407 6.75 1.85995C4.7025 0.487453 3.8175 0.749953 3.8175 0.749953C3.43228 1.64872 3.40811 2.66133 3.75 3.57745C3.0226 4.34148 2.61939 5.35755 2.625 6.41245C2.625 10.4775 5.1 11.37 7.455 11.6625C7.20825 11.9174 7.01795 12.2215 6.89648 12.5549C6.77502 12.8883 6.72511 13.2435 6.75 13.5975V16.5M6.75 14.25C3 15.375 3 12.375 1.5 12L6.75 14.25Z" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </span>

                                <button className = "bg-[#1374EF] rounded-lg max-w-23 py-2.5 px-[9px] max-md:w-full max-md:max-w-none max-md:flex max-md:justify-center">

                                    <img src="/images/deploy.svg" alt="deploy"/>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}