import client from '../../../../lib/db';

import { auth, currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const { userId } = auth();

  const user = await currentUser();



}