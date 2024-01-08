'use client'

import { useScroll, useTransform, motion } from 'framer-motion';

interface SAProps {
    heading: string;
    image: string | undefined;
    content: string;
}

export const ScrollAnimateComp:React.FC<SAProps> = ({ heading, image, content}) => {
    const { scrollYProgress } = useScroll();

    const rotate = useTransform(scrollYProgress, [0, 1], [0, -90]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 0]);
    const translate = useTransform(scrollYProgress, [0, 1], [200, -600]);
    const translate2 = useTransform(scrollYProgress, [0, 1], [-0, -600]);
  
    return (
      <div className="h-[120vh] transform scale-[0.8] p-4 md:p-10 flex items-center justify-center relative ">
        <div
          className="py-20 w-full relative"
          style={{
            perspective: '1000px',
          }}
        >
          <Header translate={translate2} heading={heading} />
          <Card rotate={rotate} translate={translate} scale={scale} image={image} />
          <ContentDiv translate={translate} content={content} />
        </div>
      </div>
    );
};

export const Header = ({ translate, heading }: {translate:any, heading:String} ) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div w-full mx-auto text-center flex justify-center items-center font-serif text-[4vh] md:text-[4vw] font-bold text-gray-400 headerImg"
    >
        {heading}
    </motion.div>
  );
};
export const ContentDiv = ({ translate, content }: {translate:any, content:String} ) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div w-full mx-auto text-center flex justify-center items-center font-serif text-md md:text-3xl font-bold text-[#97144D] headerImg"
    >
        {content}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  image,
}: {
  rotate: any;
  scale: any;
  translate: any;
  image: string | undefined;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        translateY: translate, // translate in Y-axis
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-5xl -mt-40 mx-auto h-[20rem] md:h-[40rem] w-full border-4 border-[#97144d] p-2 bg-gray-300 rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden p-2 bg-cover bg-center"
        style={{backgroundImage:`url(${image})`}}
      >
        
      </div>
    </motion.div>
  );
};
