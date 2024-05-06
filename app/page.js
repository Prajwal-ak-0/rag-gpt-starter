
import { createUser } from "../utils/create-user";

export default async function Home() {

  const user = await createUser();

  const hasApiKey = user.apiKey;

  return (
    <div>
      {
        hasApiKey ? "Has API Key" : "No API Key"
      }
    </div>
  );
}
