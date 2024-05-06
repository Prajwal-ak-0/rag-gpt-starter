import { currentUser } from "@clerk/nextjs/server";
import { createUser } from "../utils/create-user";

export default async function Home() {
  const user = await currentUser();
  console.log('user', user);

  const data = {
    username: user.username,
    email: user.emailAddresses[0].emailAddress,
    provider: user.externalAccounts[0].provider,
    providerId: user.externalAccounts[0].id,
  }

  const res = await createUser(data);

  return (
    <>
      awdasvv af
    </>
  );
}
