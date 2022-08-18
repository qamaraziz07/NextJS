
import type { NextApiRequest, NextApiResponse } from 'next';
import { cats } from "../../../data";

interface Data  {
  id: number;
  name: string;
  phone: string;
  email: string;
  image: {
      url: string;
      alt: string;
  };
  favoured: boolean;
  description: string;
  color: string;
  gender: string;
}


export default function handler(
  
  req: NextApiRequest,
  res: NextApiResponse<Data | undefined>
) {
  const { id } = req.query;
  const cat = cats.find((cat) => cat.id === Number(id));
    res.status(200).json(cat);
}
