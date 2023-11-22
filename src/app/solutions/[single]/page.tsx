
import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import { Solution } from "@/types";
import TextEffectPage from "./components/testEffect";
import Image from 'next/image';


const { solutions_folder } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const solutions: Solution[] = getSinglePage(solutions_folder);

  const paths = solutions.map((post) => ({
    single: post.slug!,
  }));

  return paths;
};

const SingleSolutionPage = ({ params }: { params: { single: string } }) => {
  const solutions: Solution[] = getSinglePage(solutions_folder);
  const post = solutions.filter((page) => page.slug === params.single)[0];

  // console.log(post, "post here", params.single, "params.single here");

  const { frontmatter } = post;
  const {
    title,
    meta_title,
    description,
    image,
    heading,
    bannerImage,
    content,
  } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <header className="flex justify-center items-center font-serif bg-gray-200/80 bg-blend-lighten text-[4vw] font-bold text-[#97144D] headerImg h-[40vh] bg-cover bg-center bg-no-repeat"
      style={{backgroundImage:`url(${bannerImage})`}}>
        {title}
      </header>
      <div className="">
        <div className="flex">
          <h1 className="text-center mt-4 w-full font-serif text-gray-500">{heading}</h1>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="innerImg col-span-1 bg-red-300 h-[50vh] mt-8 rounded-md bg-no-repeat bg-center bg-cover md:ml-8 w-full mx-auto"
          style={{backgroundImage:`url(${image})`}}>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <TextEffectPage content={content}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSolutionPage;
