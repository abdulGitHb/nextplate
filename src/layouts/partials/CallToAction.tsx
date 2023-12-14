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
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className={`${styles.animatedTxtLong} col-span-1 lg:col-span-2`}
                  />
                  <div className="w-full  text-4xl col-span-1 flex flex-col justify-between items-center">
                    <p
                      dangerouslySetInnerHTML={markdownify(
                        data.frontmatter.description,
                      )}
                      className="mb-6 w-full font-bold text-gray-500"
                    />
                    {data.frontmatter.button.enable && (
                      <Link
                        className="btn bg-[#97144D] text-lg text-gray-200 hover:bg-gray-300 hover:text-[#97144D]"
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
