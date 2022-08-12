/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import data from "./data.json";

//https://en.wikipedia.org/wiki/List_of_cities_by_international_visitors

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).send(data);
}