import sPost from "@/app/api/sPost";
import Loading from "@/app/loading";
const Page = async ({ params,id }) => {
   
const data = await sPost(params.slug)

   return <div fallback={<Loading />}> 

      <hr />
      <h1 className="text-4xl">{ data.title}</h1>
      <p className="text-lg space-y-5"> { data.body}</p>
          
   </div>
}  

export default Page;