"use client"

import { useState } from "react";

const AddressTabComp = () => {

    const [activeTab, setActiveTab] = useState<number | null>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index === activeTab ? null : index);
  };

  const tabs = [
    { label: 'Corporate Office', office: 'Gurgaon Office', address: "Paras Twin Towers, Tower A, Golf Course Road, Sector 54, Gurugram, Haryana - 122011"},
    { label: 'Bangalore', office: 'Bangalore Office', address: "Sri Satya Arcade, No. 192, Service Road, West of Chord Road, 2nd Stage, Mahalaxmipuram, Bangalore - 560086"},
    { label: 'Lucknow', office: 'Lucknow Office', address: "Summit Building, TCG 3, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010"},
    { label: 'Mumbai', office: 'Mumbai Office', address: "address soon"},
    { label: 'Delhi', office: 'Delhi Office', address: "address soon"},
    { label: 'Pune', office: 'Pune Office', address: "address soon"},
  ];
    return ( 
        <div className="flex flex-col col-span-2 gap-y-3">
            <h3 className="-mb-4 text-white -mt-4">Find Us</h3>
            <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-thin scrollbar-rounded-md scrollbar-thumb-gray-500 scrollbar-track-gray-300">
                {tabs.map((tab, index) => (
                    <div
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`px-6 py-3 hover:scale-105 rounded cursor-pointer whitespace-nowrap ${
                        activeTab === index ? 'bg-gray-200 text-[#97144d]' : 'bg-gray-200/40 text-[#97144d] hover:bg-gray-200'
                    }`}
                    >
                    {tab.label}
                    </div>
                ))}
            </div>
            <div>
                {activeTab !== null && (
                    <div className="flex gap-x-2">
                        <div className="inline-block w-fit h-fit p-3 text-white rounded-full bg-gray-300/40">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white"> {tabs[activeTab].office}</h2>
                            <p className="mt-2 text-lg text-gray-300">{tabs[activeTab].address}</p>
                        </div>
                </div>
                )}
            </div>
    </div>
     );
}
 
export default AddressTabComp;