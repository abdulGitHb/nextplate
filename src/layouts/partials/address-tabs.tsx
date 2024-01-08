"use client"

import { useState } from "react";

const AddressTabComp = () => {

    const [activeTab, setActiveTab] = useState<number | null>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    const onOptionChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveTab(event.currentTarget.selectedIndex); 
    };

  const tabs = [
    { label: 'Corporate Office', office: 'Gurgaon Office-1', address: "Paras Twin Towers, Tower A, Golf Course Road, Sector 54, Gurugram, Haryana - 122011"},
    { label: 'Bangalore-1', office: 'Bangalore Office-1', address: "Sri Satya Arcade, No. 192, Service Road, West of Chord Road, 2nd Stage, Mahalaxmipuram, Bangalore - 560086"},
    { label: 'Bangalore-2', office: 'Bangalore Office-2', address: "MG Road, 43, Residency Road, , Bangalore, KA - 560025"},
    { label: 'Delhi', office: 'Delhi Office', address: "Eldeco Centre, Malviya Nagar, Block A, Shivalik Colony, Malviya Nagar, Delhi, DL - 110017"},
    { label: 'Gurgaon Office', office: 'Gurgaon Office-2', address: "5th Floor, DLF Two Horizon Centre, Harizan Colony, DLF Phase 5, Sector 43, Gurugram, Haryana 122002"},
    { label: 'Hyderabad', office: 'Hyderabad Office', address: "Rajapushpa Summit Financial District, Nanakramguda Financial District, Hyderabad, TS - 500032"},
    { label: 'Lucknow', office: 'Lucknow Office', address: "Summit Building, TCG 3, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010"},
    { label: 'Mumbai', office: 'Mumbai Office', address: "Raheja Platinum, Road, off Andheri - Kurla Road, Sag Baug, Marol, Andheri East, Mumbai, Maharashtra - 400059"},
    { label: 'Noida', office: 'Noida Office', address: "Sector 16, C-001/A2, Sector 16B, Gautam Buddha Nagar, Noida, UP - 201301"},
    { label: 'Pune', office: 'Pune Office', address: "Raheja Woods, Kalyani Nagar, Pune, Maharashtra - 411006"},
  ];
 
    
  
    return ( 
        <div className="flex flex-col col-span-2 gap-y-3">
            <h3 className="-mb-4 text-white -mt-4">Find Us</h3>
            {/* <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-thin scrollbar-rounded-md scrollbar-thumb-gray-500 scrollbar-track-gray-300">
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
            </div> */}
            <div>
            <select id="address-drop-down" className="rounded-md w-full mt-2 focus:ring-gray-200" onChange={onOptionChangeHandler}>
                {/* <option>Choose the Location</option> */}
                {tabs.map((tab, index) => {
                    return (
                        <option key={index}>
                            {tab.label}
                        </option>
                    );
                })}
            </select>
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