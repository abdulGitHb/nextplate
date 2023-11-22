import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { BetterROI, Button, Feature, Industries, Services } from "@/types";
import OurServicesSection from "@/components/ourServicesSection";
import OurIndustriesSection from "@/components/ourIndustriesSection";
import OurNewRoiSection from "@/components/ourNewRoi";
import AboutUsSection from "@/components/aboutUsSection";
import Link from "next/link"
    
require('dotenv').config();


const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
    aboutUs,
    betterRoi,
    services,
    industries,
  }: {
    banner: { title: string; image: string; content?: string; buttonOne?: Button; buttonTwo?: Button; };
    features: Feature[];
    aboutUs: { titleOne: string; descriptionOne?: string; image: string; titleTwo: string; descriptionTwo?: string;};
    betterRoi: BetterROI[];
    services: Services[];
    industries: Industries[];

  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section className="section overflow-hidden pt-14 pr-2 bg-[url(../../public/images/hero-image.png)] bg-cover bg-center bg-no-repeat relative aspect-[16/9] w-full"
        style={{backgroundImage: `url(${banner.image})`, height: "650px",}}>
        <div className="container mt-auto grid grid-cols-3">
          <div className="flex flex-col col-span-2 justify-left items-center">
            <div className="mb-16 text-left gap-y-4 flex flex-col">
              <h1
                className="mb-4 text-[#97144D] text-4xl pl-6 md:text-7xl font-serif"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="mb-8 text-[#454545] text-lg font-bold pl-6"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              <div className="flex text-center pl-6 gap-x-6 sm:gap-x-14">
                {banner.buttonOne!.enable && (
                  <Link className="btn border-2 border-gray-300 bg-[#97144D] hover:bg-gray-300 hover:text-[#97144D] w-28 text-white" href={banner.buttonOne!.link}>
                    {banner.buttonOne!.label}
                  </Link>
                )}
                {banner.buttonTwo!.enable && (
                  <Link className="btn w-28 border-2 border-[#97144D] text-[#97144D] hover:text-gray-300 hover:bg-[#97144D] ml-8" href={banner.buttonTwo!.link}>
                    {banner.buttonTwo!.label}
                  </Link>
                )}

              </div>
            </div>
          </div>
            
        </div>
      </section>

      <section className="bg-gradient-to-b overflow-hidden from-gray-200 via-gray-100 to-gray-200 py-3">
        <AboutUsSection aboutUs={aboutUs} />
      </section>

      <section className="bg-gradient-to-b overflow-hidden from-[#97144D] via-[#d61c6d] to-[#97144D]">
        <OurNewRoiSection betterRoi={betterRoi} />
      </section>

      <section className="">
        <OurServicesSection services={services} />
      </section>

      <section className="overflow-hidden">
        <OurIndustriesSection industries={industries} />
      </section>
{/* 
      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {feature.button.enable && (
                  <a
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ))} */}

      {/* <Testimonials data={testimonial} /> */}
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
