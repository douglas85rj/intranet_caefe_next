import type {
    NextApiRequest,
    NextApiResponse,
    GetServerSidePropsContext,
  } from "next";
  import { authOptions } from "pages/api/auth/[...nextauth]";
  import { getSession } from "next-auth/react";
  
  export function getServerSession(
    req: NextApiRequest | GetServerSidePropsContext["req"],
    res: NextApiResponse | GetServerSidePropsContext["res"]
  ) {
    return getSession();

  }