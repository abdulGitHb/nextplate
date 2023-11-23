import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
       <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
              <div className="flex flex-wrap ">
                  <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                      <div className="relative lg:max-w-md">
                          <img src="https://res.cloudinary.com/dmquwnaeb/image/upload/v1700672718/talentWorkx/t80ecqmorlgqrfjx2yaw.jpg" alt="aboutimage"
                              className="relative z-10 object-cover w-full rounded h-auto h object-center"/>
                          <div
                              className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-[#97144D] rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                              <p className="text-lg font-semibold md:w-60">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                      className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                                      viewBox="0 0 16 16">
                                      <path
                                          d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                      </path>
                                  </svg> <span className="text-5xl text-[#97144D]">15+</span><br /> Years Of Experience
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                      <div className="pl-4 mb-6 border-l-4 border-[#97144D] ">
                          <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                              About Us
                          </h1>
                      </div>
                      <p className="mb-6 text-base leading-7 text-xl text-gray-500 dark:text-gray-400">
                        15 Years of our Experience in the Industry empowers us with the <b>“Art of Search Curation”</b> leading to near perfection in Selection. Our DNA- Deliver Not Await! We promise to Deliver results irrespective of challenges we come across. We don’t await answers from our Client’s rather WE present them with solutions and insights to achieve <b>“Better ROI”</b>.
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default About;
