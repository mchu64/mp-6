import { signOut } from "@/auth";

export default function SignOut() {
  return (
    <form action={async () => {"use server"; await signOut();}}>
      <button type="submit" className="inline-block border border-zinc-300 px-4 py-2">
        Sign out
      </button>
    </form>
  );
}
