import { auth } from "@/auth";
import SignIn from "@/components/SignIn";
import User from "@/components/User";

export default async function Home() {
  const session = await auth();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-4">
      <h1 className="text-2xl">MP-6 OAuth App</h1>
      {/* If the user is signed in then show the user component otherwise show the sign in component */}
      {session ? (<User session={session} />) : (<SignIn />)}
    </main>
  );
}
