export default function Footer(){
    return(
        <section className = "h-52 bg-[#181818] flex items-center justify-between px-40 gap-60 max-md:h-auto max-md:flex-col max-md:px-4 max-md:py-8 max-md:gap-8 max-md:items-center">

            <div className = "flex flex-col gap-8 max-md:items-center max-md:w-full">
                <img src="/images/logotype.svg" alt="logo" className="max-md:w-32"/>

                <div className="flex flex-row gap-6 max-md:justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:w-6 max-md:h-6">
                        <path d="M8.29 20.251C15.837 20.251 19.965 13.998 19.965 8.57596C19.965 8.39796 19.965 8.22096 19.953 8.04596C20.7562 7.46448 21.4493 6.74457 22 5.91996C21.2511 6.25196 20.4566 6.46972 19.643 6.56596C20.4996 6.05302 21.1408 5.24631 21.447 4.29596C20.6417 4.77384 19.7607 5.11069 18.842 5.29196C18.2234 4.63372 17.405 4.19779 16.5136 4.05166C15.6222 3.90553 14.7075 4.05736 13.9111 4.48363C13.1147 4.9099 12.4811 5.58683 12.1083 6.40962C11.7355 7.2324 11.6444 8.15514 11.849 9.03496C10.2176 8.9532 8.6216 8.52928 7.16465 7.79073C5.70769 7.05217 4.42233 6.01548 3.392 4.74796C2.86732 5.65116 2.70659 6.72038 2.94254 7.73792C3.17848 8.75547 3.79337 9.64483 4.662 10.225C4.00926 10.2061 3.37063 10.0305 2.8 9.71296V9.76496C2.80039 10.7123 3.1284 11.6303 3.7284 12.3633C4.3284 13.0964 5.16347 13.5993 6.092 13.787C5.48781 13.9517 4.85389 13.9756 4.239 13.857C4.50116 14.6724 5.01168 15.3856 5.69913 15.8966C6.38658 16.4076 7.21657 16.6909 8.073 16.707C7.22212 17.3755 6.24779 17.8698 5.20573 18.1615C4.16367 18.4532 3.07432 18.5366 2 18.407C3.8766 19.6113 6.06019 20.2501 8.29 20.247" fill="#A1A1A1"/>
                    </svg>

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:w-6 max-md:h-6">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3C7.477 3 3 7.484 3 13.017C3 17.442 5.865 21.197 9.839 22.521C10.339 22.613 10.521 22.304 10.521 22.038C10.521 21.801 10.513 21.17 10.508 20.335C7.726 20.94 7.139 18.992 7.139 18.992C6.685 17.834 6.029 17.526 6.029 17.526C5.121 16.906 6.098 16.918 6.098 16.918C7.101 16.988 7.629 17.95 7.629 17.95C8.521 19.48 9.97 19.038 10.539 18.782C10.631 18.135 10.889 17.694 11.175 17.444C8.955 17.191 6.62 16.331 6.62 12.493C6.62 11.4 7.01 10.505 7.649 9.805C7.546 9.552 7.203 8.533 7.747 7.155C7.747 7.155 8.587 6.885 10.497 8.181C11.3128 7.95851 12.1544 7.84519 13 7.844C13.85 7.848 14.705 7.959 15.504 8.181C17.413 6.885 18.251 7.154 18.251 7.154C18.797 8.533 18.453 9.552 18.351 9.805C18.991 10.505 19.379 11.4 19.379 12.493C19.379 16.341 17.04 17.188 14.813 17.436C15.172 17.745 15.491 18.356 15.491 19.291C15.491 20.629 15.479 21.71 15.479 22.038C15.479 22.306 15.659 22.618 16.167 22.52C18.1583 21.8521 19.8893 20.5753 21.1155 18.87C22.3416 17.1648 23.0009 15.1173 23 13.017C23 7.484 18.522 3 13 3Z" fill="#A1A1A1"/>
                    </svg>
                </div>
            </div>

            <div className = "grid grid-cols-4 gap-25 max-md:grid-cols-2 max-md:gap-8 max-md:w-full max-md:justify-items-center">

                <div className = "font-['Roboto'] font-normal text-sm leading-5 text-[#EEEEEE] flex flex-col gap-4 max-md:gap-3">
                    <p className = "font-['Roboto'] font-normal text-sm leading-5 text-[#666666] max-md:text-xs">Product</p>
                    <span className="flex flex-col gap-2 max-md:gap-1">
                        <p className="max-md:text-xs">Database</p><p className="max-md:text-xs">Authentication</p><p className="max-md:text-xs">Storage</p><p className="max-md:text-xs">Functions</p><p className="max-md:text-xs">Pricing</p>
                    </span>
                </div>

                <div className = "font-['Roboto'] font-normal text-sm leading-5 text-[#EEEEEE] flex flex-col gap-4 max-md:gap-3">
                    <p className = "font-['Roboto'] font-normal text-sm leading-5 text-[#666666] max-md:text-xs">Resources</p>
                    <span className="flex flex-col gap-2 max-md:gap-1">
                        <p className="max-md:text-xs">Support</p><p className="max-md:text-xs">Case Studies</p><p className="max-md:text-xs">Case Studies</p><p className="max-md:text-xs">Terms of service</p>
                    </span>
                </div>

                <div className = "font-['Roboto'] font-normal text-sm leading-5 text-[#EEEEEE] flex flex-col gap-4 max-md:gap-3">
                    <p className = "font-['Roboto'] font-normal text-sm leading-5 text-[#666666] max-md:text-xs">Developers</p>
                    <span className="flex flex-col gap-2 max-md:gap-1">
                        <p className="max-md:text-xs">Documentation</p><p className="max-md:text-xs">API Reference</p><p className="max-md:text-xs">Guides</p>
                    </span>
                </div >

                <div className = "font-['Roboto'] font-normal text-sm leading-5 text-[#EEEEEE] flex flex-col gap-4 max-md:gap-3">
                    <p className = "font-['Roboto'] font-normal text-sm leading-5 text-[#666666] max-md:text-xs">Company</p>
                    <span className="flex flex-col gap-2 max-md:gap-1">
                        <p className="max-md:text-xs">Blog</p><p className="max-md:text-xs">Open Source</p><p className="max-md:text-xs">Humans.txt</p><p className="max-md:text-xs">Lawyers.txt</p>
                    </span>
                </div>

            </div>

        </section>
    );
}