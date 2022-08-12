/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import data from "./data.json";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { continent } = req.query;

    const continentData = await data.continents.find((e) => e.name.toLowerCase() === continent?.toString().toLowerCase());
    if(continentData) {
        res.status(200).send(continentData);
        return;
    }

    res.status(400).send({error: 'Continent not found'});
}