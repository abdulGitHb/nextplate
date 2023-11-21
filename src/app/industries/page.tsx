import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
const {pagination, industries_folder } = config.settings;

// for all regular pages
const IndustriesPage = () => {
  const postIndex: Post = getListPage(`${industries_folder}/_index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const industries: Post[] = getSinglePage(industries_folder);
//   const allCategories = getAllTaxonomy(blog_folder, "categories");
//   const categories = getTaxonomy(blog_folder, "categories");
//   const tags = getTaxonomy(blog_folder, "tags");
  const sortedPosts = sortByDate(industries);
  const totalPages = Math.ceil(industries.length / pagination);
  const currentPosts = sortedPosts.slice(0, pagination);

  console.log("--------------------");
  console.log(postIndex, "postIndex here)", industries, "industries here");

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={postIndex.frontmatter.title} />
      <section className="section">
        <div className="container">
          <div className="row gx-5">
            <div className="lg:col-8">
              <div className="row">
                {currentPosts.map((post: any, index: number) => (
                  <div key={index} className="mb-14 md:col-6">
                    <BlogCard data={post} />
                  </div>
                ))}
              </div>
              <Pagination
                section={industries_folder}
                currentPage={1}
                totalPages={totalPages}
              />
            </div>

            {/* <PostSidebar
              categories={categories}
              tags={tags}
              allCategories={allCategories}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesPage;
