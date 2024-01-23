"use client"

import SeoMeta from "@/partials/SeoMeta";
import { ChangeEvent, FormEvent, useState } from "react";
import UpcomingOfficeComponent from "@/partials/upcomingOffices";
import axios from "axios";
import toast from "react-hot-toast";
import OurOffices from "@/partials/our-offices";
import AddressTabComp from "@/partials/address-tabs";
import { Box, TextField } from "@mui/material";
import {motion} from 'framer-motion';
import Script from "next/script";
import CardHover from "../../layouts/partials/cardHover";

const Contact =  () => {
//   const data: RegularPage = getListPage("contact/_index.md");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [uploading, setUploading] = useState(false);
//   const { frontmatter } = data;
//   const { title, description, meta_title, image } = frontmatter;
//   const { contact_form_action } = config.params;

  const handleOnChange =  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const { firstName, lastName, email, message } = formData
    // console.log(formData, "formdata here", process.env.DATABASE_URL);
    try {
        setUploading(true);
        await axios.post(`api/confiData/contactForm`, formData);
        toast.success("Contact form submitted successfully");
        setUploading(false);
    } catch (error) {
        toast.error("Something went wrong, please re-submit the form");
        setUploading(false);
    }
    
    setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    })
  }

  return (
    <>
      <SeoMeta
        title={"Contact Form"}
        meta_title={"TalentWorkx | Contact Form"}
        description={"Contact Form, contact us for any query "}
        image={"/hello"}
      />
      {/* <PageHeader title={title} /> */}
      {/* <header className="flex justify-center items-end font-serif  text-[4vw] font-bold text-[#97144d] headerImg h-[40vh] bg-cover bg-center bg-no-repeat"
      style={{backgroundImage:`url(https://res.cloudinary.com/dmquwnaeb/image/upload/f_auto,q_auto/v1/talentWorkx/aa8v6dvdcsqfdfslherz)`}}>
      </header> */}
      <section className="bg-white ">
        {/* <h1 className="text-[4vw] font-bold text-[#97144d] mt-6 text-center">Contact</h1>
        <div className="container px-6 py-10 mx-auto">

            <div className="grid grid-cols-1 gap-12 mt-4 lg:grid-cols-2">
                <OurOffices/>

                <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8 flex flex-col justify-around">
                    <form className="contactForm" onSubmit={handleSubmit}>
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                <input type="text" value={formData.firstName} required onChange={handleOnChange} placeholder="John" id="firstName" name="firstName"  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                <input type="text" value={formData.lastName} required onChange={handleOnChange} id="lastName" name="lastName" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" value={formData.email} required onChange={handleOnChange} id="email" name="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea value={formData.message} required onChange={handleOnChange} id="message" name="message" className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button type="submit" className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#97144D] rounded-lg hover:bg-gray-300 hover:text-[#97144D] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
            <UpcomingOfficeComponent/>
        </div> */}
        <h1 className="text-[4vh] sm:text-[4vw] font-bold text-[#97144d] mt-6 text-center">Contact</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 my-12 max-w-[1196px] ml-auto mr-auto bg-gray-100 mx-8 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}

          className="bg-[#97144d] col-span-1 rounded-lg m-4 p-4 flex flex-col gap-y-6">
            <h1 className="text-2xl text-center text-gray-200">Contact Information</h1>
            
            <div className="">
                        <div className="flex items-center gap-x-2">
                            <span className="inline-block p-3 text-white rounded-full bg-gray-300/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>
                            <h2 className="text-xl font-bold text-white">Email</h2>
                        </div>

                        <p className="mt-2 text-lg text-gray-200">You can reach us at</p>
                        <p className="mt-2 text-xl font-bold text-gray-200">connect@talentworkx.in</p>
              </div>
              <hr />
                    <AddressTabComp/>
          </motion.div>
          <div className="col-span-1 md:col-span-2 p-4 m-4">
          <form className="contactForm grid grid-cols-1 md:grid-cols-2 w-full" onSubmit={handleSubmit}>
                            <div className="col-span-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                <input type="text" value={formData.firstName} required onChange={handleOnChange} placeholder="Your First Name" id="firstName" name="firstName"  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="col-span-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                <input type="text" value={formData.lastName} required onChange={handleOnChange} id="lastName" name="lastName" placeholder="Your Last Name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                        <div className="mt-4 col-span-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" value={formData.email} required onChange={handleOnChange} id="email" name="email" placeholder="Your Email Address" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-4 col-span-1 md:col-span-2 px-2">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea value={formData.message} required onChange={handleOnChange} id="message" name="message" className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Message"></textarea>
                        </div>

                        {!uploading && <button type="submit" className="w-full px-6 mx-2 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#97144D] rounded-lg hover:bg-gray-300 hover:text-[#97144D]">
                            Send message
                        </button>}
                        {uploading && <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 mx-auto mt-4 text-gray-200 animate-spin dark:text-gray-600 fill-[#97144d]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>}
                    </form>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-3">
            <UpcomingOfficeComponent/>
          </div>
        </div> 
    </section>
    </>
  );
};

export default Contact;
