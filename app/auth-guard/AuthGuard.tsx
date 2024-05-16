import { useSession } from "next-auth/react";

export default function Page({
  children,
  roles,
}: Readonly<{
  children: React.ReactNode;
  roles?: string[];
}>) {
  const { data: session, status } = useSession();
  console.log("help: ", session);
  const itemsToRednder = (
    <div>
      {status === "loading" ? (
        <>loading</>
      ) : status === "authenticated" &&
        (session?.user?.roles?.includes(roles) || roles == undefined) ? (
        <>{children}</>
      ) : (
        <>restricted</>
      )}
    </div>
  );

  return itemsToRednder;
}
