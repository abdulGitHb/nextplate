import AddressTabComp from "./address-tabs";

const OurOffices = () => {

    const ourOffices= [{
        office: "Gurgaon Office (Corporate Office)",
        address: "Paras Twin Towers, Tower A, Golf Course Road, Sector 54, Gurugram, Haryana - 122011"
    },
    {
        office: "Bangalore Office",
        address: "Sri Satya Arcade, No. 192, Service Road, West of Chord Road, 2nd Stage, Mahalaxmipuram, Bangalore - 560086"
    },
    {
        office: "Lucknow Office",
        address: "Summit Building, TCG 3, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010"
    },
    {
        office: "Mumbai Office",
        address: "address soon"
    },
    {
        office: "Delhi Office",
        address: "address soon"
    },
    {
        office: "Pune Office",
        address: "address soon"
    
    }]
    return ( 
        <div className="grid grid-cols-1 p-4 rounded-lg gap-y-2 bg-[#97144d] md:grid-cols-2 h-[75vh]">
            <h1 className="text-2xl text-center text-gray-200 col-span-1 md:col-span-2">Contact Information</h1>
                    <div>
                        <div className="flex items-center gap-x-2">
                            <span className="inline-block p-3 text-white rounded-full bg-gray-300/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>
                            <h2 className="text-3xl font-bold text-white">Email</h2>
                        </div>

                        <p className="mt-2 text-lg text-gray-300">You can reach us at</p>
                        <p className="mt-2 text-xl font-bold text-gray-200">connect@talentworkx.in</p>
                    </div>


                    <AddressTabComp/>

                    {/* {ourOffices.map((office, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-x-2">
                                <div className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                
                                <h2 className="text-xl font-medium text-gray-500 dark:text-white"> {office.office}</h2>
                            </div>
                            <p className="mt-2 text-sm text-[#97144D]">{office.address}</p>
                        </div>
                    ))} */}
                </div>
     );
}
 
export default OurOffices;