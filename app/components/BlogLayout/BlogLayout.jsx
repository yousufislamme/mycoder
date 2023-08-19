import Heading from '../Heading/Heading';

const BlogLayout = () => {
  return (
    <>
      <div className="bg-green-100">
        <Heading
          title="Blog List"
          class1="text-3xl text-green-800 font-bold"
          class2="text-green-600"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eius?"
        />

        {/* Blog list layout design */}
        <div className="mx-10">
          <div className="flex flex-col gap-5">
            <div className="bg-blue-400 w-full h-52 rounded-lg shadow-xl">
              <div className="h-full w-[300px] bg-slate-700 rounded-lg"></div>
            </div>
            <div className="flex flex-row-reverse bg-blue-400 w-full h-52 rounded-lg shadow-xl">
              <div className="h-full w-[300px] bg-slate-700 rounded-lg"></div>
            </div>
            <div className="bg-blue-400 w-full h-52 rounded-lg shadow-xl">
              <div className="h-full w-[300px] bg-slate-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
