import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="mb-28 bg-white">
          <div className="container">
            <div className="rounded-xl bg-theme-light px-4 py-4 dark:bg-darkmode-theme-light xl:px-14">
              <div className="row items-center justify-between">
                <div className="mb-10 md:col-5 lg:col-4 md:order-2 md:mb-0">
                  <ImageFallback
                    className="w-full"
                    src={data.frontmatter.image}
                    width={252}
                    height={250}
                    alt="cta-image"
                  />
                </div>
                <div className="md:col-7 md:order-1 ">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className="mb-2 text-[#97144D]"
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.description,
                    )}
                    className="mb-6 text-[#454545]"
                  />
                  {data.frontmatter.button.enable && (
                    <a
                      className="btn btn-primary"
                      href={data.frontmatter.button.link}
                    >
                      {data.frontmatter.button.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
