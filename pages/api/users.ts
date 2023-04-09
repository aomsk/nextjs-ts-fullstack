// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "@/interfaces";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>
) {
    const { query, method } = req;

    switch (method) {
        case "GET":
            res.status(200).json({ id: 1, name: "John Doe" });
            break;
        case "POST":
            res.status(200).json({
                id: 2,
                name: "John Doe 2",
                message: query.msg as string,
            });
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
