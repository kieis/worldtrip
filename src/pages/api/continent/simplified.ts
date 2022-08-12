/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import data from "./data.json";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const simplified = data.continents.map((continent) => {
        return {
            name: continent.translatedName,
            resume: continent.resume,
            image: continent.images[0],
            url: "/continent/" + continent.name.toLocaleLowerCase()
        };
    });

    res.status(200).send(simplified);
}