/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import data from "./data.json";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).send(data);
}