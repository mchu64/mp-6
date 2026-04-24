import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form action={async () => {"use server"; await signIn("google");}}>
      <button type="submit" className="inline-block border border-zinc-300 px-4 py-2">
        Sign in with Google
      </button>
    </form>
  );
}
