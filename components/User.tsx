import type { Session } from "next-auth";
import SignOut from "@/components/SignOut";

type UserProps = {
  session: Session;
};

export default function User({ session }: UserProps) {
  // show the user's profile information
  return (
    <section className="w-full border border-zinc-300 p-4">
      <h2 className="mb-3 text-lg font-medium">You are signed in :D</h2>
      {session.user?.image ? (
        <img src={session.user.image} alt="Profile pic" className="mb-3 rounded-full"/>
      ) : null}
      <p className="mb-1">Name: {session.user?.name ?? "N/A"} </p>
      <p className="mb-4"> Email: {session.user?.email ?? "N/A"} </p>
      <SignOut />
    </section>
  );
}
