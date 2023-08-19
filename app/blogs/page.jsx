import getData from '@/app/api/getData';
import Link from 'next/link';


const blog = async ({params}) => {

  const users = await getData();

  return (
    <div>

      <div className="grid grid-cols-4 gap-3 mx-5 my-10">
        {
          users.map((user) => (

            
         <div 
            className="rounded-lg shadow-xl hover:shadow-2xl duration-150 ease-in-out bg-green-400"
          >
            {/* image section */}
            <div className="flex flex-col relative justify-center items-center w-full rounded-tl-lg rounded-tr-lg h-[200px] bg-yellow-400">
              <p className="text-xl">Image</p>
              {/* date and info */}
              <div className="bg-red-600 absolute bottom-0 left-0 px-2 py-1 rounded-tr-lg">
                <p className="text-white text-xs">28/07/2023 | 03:32 PM</p>
              </div>
            </div>
            <div className="px-5 py-3">
              <h2 className="text-lg font-semibold">
                <a href="#" className="text-green-900">
                  {user.title}
                </a>
              </h2>
              <p className="text-green-800">
               {user.body}
              </p>
              <span>
                  <Link className="text-white" href={`blogs/${user.id}`}>
                  see more
                </Link>
              </span>
            </div>
          </div>    
          ))
      }
        


        
      </div>

    </div>
  );
};

export default blog;
