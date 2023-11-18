
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import similerItems from "@/lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";

const { solutions_folder } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const posts: Post[] = getSinglePage(solutions_folder);

  const paths = posts.map((post) => ({
    single: post.slug!,
  }));

  return paths;
};

const SingleSolutionPage = ({ params }: { params: { single: string } }) => {
  const posts: Post[] = getSinglePage(solutions_folder);
  const post = posts.filter((page) => page.slug === params.single)[0];

  console.log(post, "post here", params.single, "params.single here");

  const { frontmatter, content } = post;
  const {
    title,
    meta_title,
    description,
    image,
  } = frontmatter;
  const similarPosts = similerItems(post, posts, post.slug!);

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section pt-7">
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
              {/* <Disqus className="mt-20" /> */}
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleSolutionPage;
