import { auth, currentUser } from "@clerk/nextjs/server";


export default async function Home() {
  const { userId } = auth();

  console.log('userId', userId);

  const user = await currentUser()

  console.log('user', user)
  return (
    <>
      awdasvv af
    </>
  );
}
