"use client"

import SeoMeta from "@/partials/SeoMeta";
import { ChangeEvent, FormEvent, useState } from "react";
import UpcomingOfficeComponent from "@/components/upcomingOffices";
import axios from "axios";
import toast from "react-hot-toast";
import OurOffices from "@/partials/our-offices";

const Contact =  () => {
//   const data: RegularPage = getListPage("contact/_index.md");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
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
        await axios.post(`api/confiData/contactForm`, formData);
        toast.success("Contact form submitted successfully");
    } catch (error) {
        toast.error("Something went wrong, please re-submit the form");
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
      <header className="flex justify-center items-end font-serif  text-[4vw] font-bold text-[#97144d] headerImg h-[40vh] bg-cover bg-center bg-no-repeat"
      style={{backgroundImage:`url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1702530052/talentWorkx/aa8v6dvdcsqfdfslherz.jpg)`}}>
      </header>
      <section className="bg-white ">
        <h1 className="text-[4vw] font-bold text-[#97144d] mt-6 text-center">Contact</h1>
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
        </div>
    </section>
    </>
  );
};

export default Contact;
