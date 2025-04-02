import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to your dashboard!</h1>
      <p>You are logged in as: {userId}</p>
    </div>
  );
}
