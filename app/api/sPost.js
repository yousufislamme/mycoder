const sPost = async (id) => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const allUser = res.json();

   return allUser;

}


export default sPost;