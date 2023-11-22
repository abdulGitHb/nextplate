import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { EmailParams, RegularPage } from "@/types";
import {sendEmail} from "@/lib/utils/contact-email.js";
import { FormEvent } from "react";

const Contact = async () => {
  const data: RegularPage = getListPage("contact/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;
  const { contact_form_action } = config.params;

  const handleOnSubmil = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Process form data and prepare email details
    const emailDetails: EmailParams = {
      to: 'abdulhashmi035@gmail.com',
      from: 'abdulhashmi035@gmail.com',
      subject: 'New contact form submission',
      message: 'Hey there, this is the email message heree', // Replace with actual message or form data
    };

    try {
      // await sendEmail(emailDetails.message);
      // console.log('Email sent successfully!');
      // Perform any additional actions after successful email sending
    } catch (error) {
      // console.error('Error sending email:', error);
      // Handle error case
    }
  }

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      {/* <PageHeader title="Candidate Form" /> */}
      <header className="flex justify-center items-center font-serif bg-gray-200/80 bg-blend-lighten text-[4vw] font-bold text-[#97144D] headerImg h-[40vh] bg-cover bg-center bg-no-repeat"
      style={{backgroundImage:`url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1700637043/talentWorkx/lcdyd4ctr7ontqrflek7.png)`}}>
        Candidate Form
      </header>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">

            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                        <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>

                        <h2 className="mt-4 text-base font-medium text-[#97144D] dark:text-white">Email</h2>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our team is here to help.</p>
                        <p className="mt-2 text-sm text-[#97144D]">connect@talentworkx.in</p>
                    </div>


                    <h1 className="md:col-span-2 text-[#97144D]">Our offices</h1>
                    <div>
                        <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </span>
                        
                        <h2 className="mt-4 text-base font-medium text-gray-500 dark:text-white"> Gurgaon Office (Corporate Office)</h2>
                        <p className="mt-2 text-sm text-[#97144D]">00, Tower A, Paras Twin Towers, Sector 54, Gurugram,
                            Gurugram, Haryana - 122011</p>
                    </div>
                    <div>
                        <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </span>
                        
                        <h2 className="mt-4 text-base font-medium text-gray-500 dark:text-white">Bangalore Office</h2>
                        <p className="mt-2 text-sm text-[#97144D]">Prestige Atlanta, 80 Feet Rd, Koramangala 1A Block, Koramangala 3 Block, Koramangala, Bengaluru, Karnataka - 560034</p>
                    </div>
                    <div>
                        <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </span>
                        
                        <h2 className="mt-4 text-base font-medium text-gray-500 dark:text-white"> Lucknow Office</h2>
                        <p className="mt-2 text-sm text-[#97144D]">Floor 11, Summit Building, TCG 3, 3, Padera - Raebareli Rd, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010</p>
                    </div>

                    

                </div>

                <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8 flex flex-col justify-around">
                    <form>
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Resume Google Drive link</label>
                            <input type="text" placeholder="https://drive.google.com/file/d/dfsdf..." className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button type="submit" className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#97144D] rounded-lg hover:bg-gray-300 hover:text-[#97144D] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
            <div className="grid gap-12 grid-cols-3 mt-8">
                <h1 className="col-span-3 text-[#97144D]">Upcoming Offices</h1>
                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base font-medium text-[#97144D] dark:text-white">Noida</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>

                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base font-medium text-[#97144D] dark:text-white">Delhi</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>
                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base font-medium text-[#97144D] dark:text-white">Mumbai</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>
                <h1 className="col-span-3 text-[#97144D]">Upcoming International Offices</h1>
                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base font-medium text-[#97144D] dark:text-white">Dubai</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>

                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base font-medium text-[#97144D] dark:text-white">Singapore</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>
                        <div>
                            <span className="inline-block p-3 text-[#97144D] rounded-full bg-[#97144D]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            
                            <h2 className="mt-4 text-base font-medium text-[#97144D] dark:text-white">Malaysia</h2>
                            <p className="mt-2 text-sm text-[#97144D]">Coming Soon</p>
                        </div>

            </div>
        </div>
    </section>
    </>
  );
};

export default Contact;
