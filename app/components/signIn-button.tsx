// "use server";
import { authenticate } from "../lib/actions";

export function SignIn() {
  return (
    <form
      action={() => {
        authenticate();
      }}
    >
      <button type="submit">Sign In</button>
    </form>
  );
}
