"use client"

import SeoMeta from "@/partials/SeoMeta";
import {ChangeEvent, FormEvent, useState } from "react";
import UpcomingOfficeComponent from "@/partials/upcomingOffices";
import axios from "axios";
import toast from "react-hot-toast";
import OurOffices from "@/partials/our-offices";
import Link from "next/link";

const Contact = () => {
//   const data: RegularPage = getListPage("contact/_index.md");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobDescription: "",
    message: "",
  });
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
    // const { firstName, lastName, email, jobDescription, message } = formData
    // console.log(formData, "formdata here", process.env.DATABASE_URL);
    try {
        setUploading(true);
        await axios.post(`api/confiData/clientForm`, formData);
        toast.success("Form submitted successfully");
        setUploading(false);
    } catch (error) {
        toast.error("Something went wrong, please re-submit the form");
        setUploading(false);
    }
    
    setFormData({
        firstName: "",
        lastName: "",
        email: "",
        jobDescription: "",
        message: "",
    })
  }


  return (
    <>
      <SeoMeta
        title={"Client Form"}
        meta_title={"TalentWorkx | Client Contact Form"}
        description={"Client Contact Form, contact us for any query"}
        image={"image"}
      />
      {/* <PageHeader title="Client Form" /> */}
      <header className="flex justify-center items-center font-serif headerImg h-[40vh] bg-cover bg-center bg-no-repeat"
      style={{backgroundImage:`url(https://res.cloudinary.com/dmquwnaeb/image/upload/f_auto,q_auto/v1/talentWorkx/r134y80zqva71iwdzzax)`}}>
        <h1 className="bg-[#97144d] text-gray-100 opacity-90 p-4 rounded-md">What We Offer Our Clients</h1>
      </header>
      <section className="bg-white max-w-[1280px] mx-auto">

      <div className="relative">
        <div className="w-full h-[50vh] md:h-[80vh] grid grid-cols-2 grid-rows-2 mt-4 gap-2 p-2">

          <Link href="/client-form/client-features/hrms">
            <div className="w-full h-full bg-gray-300 rounded-md hover:scale-[95%] cursor-pointer transition-all duration-300">
              <h1 className="h-full flex text-2xl md:text-6xl items-center justify-center text-center text-[#97144d]">HRMS</h1>
            </div>
          </Link>

          <Link href="/client-form/client-features/employee-benefits">
            <div className="w-full h-full bg-gray-300 rounded-md hover:scale-[95%] cursor-pointer transition-all duration-300">
              <h1 className="h-full flex text-2xl md:text-6xl items-center justify-center text-center text-[#97144d]">Employee Benefits</h1>
            </div>
          </Link>
          
          <Link href="/client-form/client-features/travel&MICE">
            <div className="w-full h-full bg-gray-300 rounded-md hover:scale-[95%] cursor-pointer transition-all duration-300">
              <h1 className="h-full flex text-2xl md:text-6xl p-2 items-center justify-center text-center text-[#97144d]">Travel & M.I.C.E</h1>
            </div>
          </Link>

          <Link href="/client-form/client-features/t&d">
            <div className="w-full h-full bg-gray-300 rounded-md hover:scale-[95%] cursor-pointer transition-all duration-300">
              <h1 className="h-full flex text-2xl md:text-6xl p-2 items-center justify-center text-center text-[#97144d]">T&D</h1>
            </div>
          </Link>
        </div>
        <div className="absolute bg-[#97144d] text-white m-auto left-0 right-0 top-0 bottom-0 w-28 h-28 p-2 flex items-center justify-center text-center rounded-full border-8 border-white"> Client Suite </div>
      </div>

      <hr className="mt-16 bg-red-400" />

      <h1 className="text-[4vw] font-bold text-[#97144d] mt-12 text-center">Client Contact</h1>
        <div className="container px-6 py-6 mx-auto">

            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
              <div className="col-span-1">
                <OurOffices/>
              </div>

                <div className="p-4 py-6 rounded-lg bg-gray-50 col-span-1 lg:col-span-2 md:p-8 flex flex-col justify-around">
                    <form onSubmit={handleSubmit}>
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                <input type="text" value={formData.firstName} required onChange={handleOnChange} placeholder="Your First Name" id="firstName" name="firstName" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                <input type="text" value={formData.lastName} required onChange={handleOnChange} placeholder="Your Last Name" id="lastName" name="lastName" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" value={formData.email} required onChange={handleOnChange} id="email" name="email" placeholder="Your Email Address" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">JD Google Drive link</label>
                            <input type="text" value={formData.jobDescription} required onChange={handleOnChange} id="jobDescription" name="jobDescription" placeholder="https://drive.google.com/file/d/dfsdf..." className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea value={formData.message} required onChange={handleOnChange} id="message" name="message" className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Message"></textarea>
                        </div>

                        {!uploading && <button type="submit" className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#97144D] rounded-lg hover:bg-gray-300 hover:text-[#97144D]">
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
            </div>
            <UpcomingOfficeComponent/>
        </div>
    </section>
    </>
  );
};

export default Contact;
