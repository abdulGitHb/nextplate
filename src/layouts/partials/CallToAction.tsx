import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import styles from "@/components/styles.module.css";
import Link from "next/link";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="mb-28 mt-12 bg-white">
          <div className="container">
            <div className="rounded-xl px-4 py-4 xl:px-14">
              <div className="row items-center justify-between">
                <div className="grid grid-cols-3">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className={`${styles.animatedTxtLong} col-span-2`}
                  />
                  <div className="md:w-[350px] col-span-1 flex flex-col justify-center items-center">
                    <p
                      dangerouslySetInnerHTML={markdownify(
                        data.frontmatter.description,
                      )}
                      className="mb-6 text-[#454545]"
                    />
                    {data.frontmatter.button.enable && (
                      <Link
                        className="btn btn-primary"
                        href={data.frontmatter.button.link}
                      >
                        {data.frontmatter.button.label}
                      </Link>
                    )}
                  </div>
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
