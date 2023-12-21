
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
      <header className="flex justify-center items-center font-serif bg-gradient-to-b from-[#97144d]/80 via-gray-200 to-[#97144d]/80 text-[4vw] font-bold text-[#97144D] headerImg h-[40vh] bg-cover bg-no-repeat"
      // style={{backgroundImage:`url(${bannerImage})`}}
      >
        {title}
      </header>
      <div className=" mb-8 ">
        <div className="flex">
          <h1 className="text-center mt-4 w-full font-serif text-gray-500">{heading}</h1>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="innerImg col-span-1 h-[350px] sm:h-[250px] lg:h-[450px] aspect-square mt-8 rounded-md bg-no-repeat bg-center bg-cover md:ml-8 w-full mx-auto"
          style={{backgroundImage:`url(${image})`}}>
            <Image src={image || "/"} alt={title} layout="fill" objectFit="cover" className="rounded-md" style={{display:"none"}} />
          </div>
          <div className="col-span-1 md:col-span-2">
            <TextEffectPage content={content}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSolutionPage;
