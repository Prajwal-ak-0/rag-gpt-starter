import { auth, currentUser } from "@clerk/nextjs/server";


export default async function Home() {
  const user = await currentUser();
  console.log('user', user);

  
 
  return (
    <>
      awdasvv af
    </>
  );
}
