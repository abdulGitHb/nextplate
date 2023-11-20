import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import similerItems from "@/lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Industry, Post } from "@/types";
import TextEffectPage from "./components/testEffect";


const { industries_folder } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const industries: Industry[] = getSinglePage(industries_folder);

  const paths = industries.map((industry) => ({
    single: industry.slug!,
  }));

  return paths;
};

const SingleIndustryPage = ({ params }: { params: { single: string } }) => {
  const industries: Industry[] = getSinglePage(industries_folder);
  const industry = industries.filter((page) => page.slug === params.single)[0];

  
  const { frontmatter } = industry;
  const {
    title,
    meta_title,
    description,
    image,
    heading,
    content,
  } = frontmatter;
  const similarPosts = similerItems(industry, industries, industry.slug!);
  console.log(content, "industry here", params.single, "params.single here");

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <header className="bg-red-400 h-48">
        header image
      </header>
      {/* <section className="section pt-7">
        <div className="container">
          <div className="row justify-center">
            <article className="lg:col-10">
              {image && (
                <div className="mb-10">
                  <ImageFallback
                    src={image}
                    height={500}
                    width={1200}
                    alt={title}
                    className="w-full rounded"
                  />
                </div>
              )}
              <h1
                dangerouslySetInnerHTML={markdownify(title)}
                className="h2 mb-4"
              />
              <div className="content mb-10">
                <MDXContent content={content} />
              </div>
            </article>
          </div>
        </div>
      </section> */}

      <div className="">
        <div className="">
          <h1 className="text-center font-serif text-[#97144D]">{heading}</h1>
        </div>
        <div className="">
          image here
        </div>
        <div className="">
          <TextEffectPage content={content}/>
        </div>
      </div>
    </>
  );
};

export default SingleIndustryPage;


