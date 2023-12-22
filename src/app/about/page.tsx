
import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import AboutTabComp from "./about-tab-comp";


const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter } = data;
  const { title, meta_title, description, image } = frontmatter;


  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
       <section className="flex items-center bg-stone-100 xl:h-screen font-poppins">
          <AboutTabComp/>
      </section>
      
    </>
  );
};

export default About;
