import { content } from "../Content";

const Blogs = () => {
  const { Blogs } = content;
  return (
    <section id="blogs">
      <div className="md:container px-5 pt-10 flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Blogs.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Blogs.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex flex-wrap pt-10 pb-10 gap-4 justify-center">
          {Blogs.blog_content.map((content, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 400}
              className="sm:cursor-pointer bg-bg_light_primary
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
                <img
                  src={content.image}
                  alt="Blogs"
                  className="w-10 group-hover:scale-125 duration-200"
                />
              <div className="flex-1">
                <h5 className="text-lg font-medium text-gray-800 mb-2">
                  {content.title}
                </h5>
                <a
                  href={content.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 underline font-medium"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
