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
      <section className="section pt-14 pr-2 bg-[url(../../public/images/hero-image.png)] bg-cover bg-center bg-no-repeat relative aspect-[16/9] w-full"
        style={{backgroundImage: `url(${banner.image})`, height: "550px",}}>
        <div className="container mt-auto">
          <div className="flex flex-col sm:flex-row justify-left items-center z-40">
            <div className="mb-16 text-left lg:col-6 ">
              <h1
                className="mb-4 text-[#97144D] text-7xl"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="mb-8 text-[#454545]"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              {banner.buttonOne!.enable && (
                <a className="btn bg-[#97144D] text-white" href={banner.buttonOne!.link}>
                  {banner.buttonOne!.label}
                </a>
              )}
              {banner.buttonTwo!.enable && (
                <a className="btn border-2 border-[#454545] text-[#97144D] ml-8" href={banner.buttonTwo!.link}>
                  {banner.buttonTwo!.label}
                </a>
              )}
            </div>
          </div>
            
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 py-3">
        <AboutUsSection aboutUs={aboutUs} />
      </section>

      <section className="bg-gradient-to-b from-[#97144D] via-[#d61c6d] to-[#97144D]">
        <OurNewRoiSection betterRoi={betterRoi} />
      </section>

      <section className="overflow-hidden">
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

      <Testimonials data={testimonial} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
