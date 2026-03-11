

export default function Cards(){
    const card = [
        {
            icon: '/images/icon-1.svg',
            title: 'Interoperable',
            description: 'Integrates well with the rest of Supabase ecosystem, including Auth and Postgres.',
        },
        {
            icon: '/images/icon-2.svg',
            title: 'Lightning fast',
            description: 'Thin API server layer that leverages Postgres\' permissions and performance.',
        },        {
            icon: '/images/icon-3.svg',
            title: 'Dependable',
            description: 'Enterprise-level scalability and durability.',
        }
    ]
    return(
        <section className = "h-100 w-full bg-[#181818] flex items-center justify-center max-md:h-auto max-md:py-25">
            <div className = "flex gap-25 max-md:flex max-md:flex-col ">
                {card.map((item, index)=>(
                    <div key={index} className="max-w-70 flex flex-col gap-4 text-white max-md:items-center">
                        <img src={item.icon} alt="icon" className = "max-w-8"/>
                        <h2 className = "font-['Roboto'] font-normal text-lg leading-7 text-white ">{item.title}</h2>
                        <p className = "font-['Roboto'] font-normal text-lg leading-7 text-[#E0E0E0] max-w-65 max-md:text-center">{item.description}</p>
                    </div>
                    ))}
            </div>
        </section>
    );
}