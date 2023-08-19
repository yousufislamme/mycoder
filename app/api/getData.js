const apiData = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
   const allUser = res.json();

   return allUser;

}


export default apiData;