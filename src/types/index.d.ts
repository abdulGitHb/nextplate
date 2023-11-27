export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    categories: string[]; 
    author: string;
    tags: string[];
    date?: string;
    draft?: boolean;
  };
  slug?: string;
  content?: string;
};

export type Industry = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    bannerImage: string; 
    author: string;
    tags: string[];
    date?: string;
    draft?: boolean;
    heading: string;
    content: string;
  };
  slug?: string;
  content?: string;
};
export type Solution = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    bannerImage: string;
    author: string;
    tags: string[];
    date?: string;
    draft?: boolean;
    heading: string;
    content: string;
  };
  slug?: string;
  content?: string;
};

export type Author = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    social: [
      {
        name: string;
        icon: string;
        link: string;
      },
    ];
  };
  content?: string;
  slug?: string;
};

export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type BetterROI = {
  title: string;
  description: string;
};
export type OurClients = {
  categoryName: string;
  bgImage: string;
};

export type AboutUs = {
  titleOne: string;
  titleTwo: string;
  descriptionOne: string;
  descriptionTwo: string;
  image: string;
};


export type Services = {
  image: string;
  icon: string;
  title: string;
  link: string;
  color: string;
  description: string;
};
export type Industries = {
  image: string;
  icon: string;
  title: string;
  link: string;
};

export interface EmailParams {
  to: string;
  from: string;
  subject: string;
  message: any;
}

export type Testimonial = {
  name: string;
  designation: string;
  avatar: string;
  content: string;
};

export type Call_to_action = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};
