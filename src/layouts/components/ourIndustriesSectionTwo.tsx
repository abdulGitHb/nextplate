import { markdownify } from "@/lib/utils/textConverter";
import { motion } from "framer-motion";
import { Industries } from "@/types";
import Link from "next/link";
import styles from "@/components/styles.module.css";

const OurIndustriesSectionTwo = ({industries}:{industries: Industries[]}) => {
  return (
    <>
      <h1 className="mb-6 text-[#97144D] font-serif text-center" >Industries We Serve</h1>
      <div className={`${styles.columns} relative`}>
        <div className={`${styles.column} ${styles.columnreverse}`}>
          {industries.map((industry, index: number) => (
            <div className="h-[90vh] aspect-square border-2 border-[#97144d] bg-cover bg-center bg-no-repeat"
              key={index} style={{backgroundImage: `url(${industry.image})`,}}
            >
              {/* <img
              src={industry.image}
              alt=""
              title=""
              height=""
              width=""
            /> */}
            </div>
          ))}
        </div>
        <div className={`${styles.column}`}>
          {industries.map((industry, index: number) => (
            <div className="h-[90vh] border-2 border-[#97144d] bg-gray-300 aspect-square bg-cover bg-center bg-no-repeat"
            key={index}>
              <h1>{industry.title}</h1>
            {/* <img
            src={industry.image}
            alt=""
            title=""
            height=""
            width=""
          /> */}
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurIndustriesSectionTwo;
