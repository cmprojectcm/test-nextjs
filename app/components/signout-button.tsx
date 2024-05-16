// "use server";
import { logOut } from "../lib/actions";

export function SignOut() {
  return (
    <form action={() => logOut()}>
      <button type="submit">Sign Out</button>
    </form>
  );
}
