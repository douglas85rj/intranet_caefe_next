import type { NextApiRequest,NextApiResponse  } from "next";
import { NextRequest, NextResponse } from "next/server";


export default function signupHandler(req:NextApiRequest, 
    res:NextApiResponse){

res.status(200).json({
success: true,    
})

}