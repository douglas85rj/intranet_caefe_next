import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import * as userRepository from "../../src/user/userRepository"

export default function signupHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {

if (req.method ==="POST"){

  const results =  userRepository.create(req.body, {

    select: {
      id:true,
    },
  });
  return res.status(200).json(results);
}


  res.status(200).json(req.body);
}
