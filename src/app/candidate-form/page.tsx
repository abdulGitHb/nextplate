"use client"


import SeoMeta from "@/partials/SeoMeta";
import { FormEvent, useState, ChangeEvent } from "react";
import UpcomingOfficeComponent from "@/partials/upcomingOffices";
import axios from "axios";
import toast from "react-hot-toast";
import OurOffices from "@/partials/our-offices";


const Contact = () => {
//   const data: RegularPage = getListPage("contact/_index.md");
//   const { frontmatter } = data;
//   const { title, description, meta_title, image } = frontmatter;
//   const { contact_form_action } = config.params;
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        resume: "",
        message: "",
    });
    const [uploading, setUploading] = useState(false);
  const handleOnChange =  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const { firstName, lastName, email, resume, message } = formData
    // console.log(formData, "formdata here", process.env.DATABASE_URL);
    try {
        setUploading(true);
        await axios.post(`api/confiData/candidateForm`, formData);
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
        resume: "",
        message: "",
    })
  }
  

  return (
    <>
      <SeoMeta
        title={"Candidate Form"}
        meta_title={"TalentWorkx | Candidate Contact Form"}
        description={"Candidate contact form, contact us for any query"}
        image={"image"}
      />
      {/* <PageHeader title="Candidate Form" /> */}
      
      <header className="flex justify-center items-center font-serif  headerImg h-[40vh] bg-cover bg-center bg-no-repeat"
      style={{backgroundImage:`url(https://res.cloudinary.com/dmquwnaeb/image/upload/f_auto,q_auto/v1/talentWorkx/sbhjkoimbcbgzvipjmnt)`}}>
      </header>
      <section className="bg-white dark:bg-gray-900">
      <h1 className="text-[4vw] font-bold text-[#97144d] mt-6 text-center">Candidate Contact</h1>

        <div className="container px-6 py-12 mx-auto">

            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                <div className="col-span-1">
                <OurOffices/>
                </div>

                <div className="p-4 py-6 rounded-lg bg-gray-50 col-span-1 lg:col-span-2 md:p-8 flex flex-col justify-around">
                    <form onSubmit={handleSubmit}>
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                <input type="text" value={formData.firstName} required onChange={handleOnChange} id="firstName" name="firstName" placeholder="Your First Name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                <input type="text" value={formData.lastName} required onChange={handleOnChange} id="lastName" name="lastName" placeholder="Your Last Name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" value={formData.email} required onChange={handleOnChange} id="email" name="email" placeholder="Your Email Address" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Resume/CV Google Drive link(public Link)</label>
                            <input type="text" value={formData.resume} required onChange={handleOnChange} id="resume" name="resume" placeholder="https://drive.google.com/file/d/dfsdf..." className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#97144d] focus:ring-[#97144d] focus:outline-none focus:ring focus:ring-opacity-40" />
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
