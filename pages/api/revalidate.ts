import type { NextApiRequest, NextApiResponse } from "next";
//http://localhost:3000/api/revalidate?path=/&secret=mysecret

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const path = req.query.path as string;

  await res.revalidate(path);

  return res.json({ revalidated: true })

  /*try{
    const body = req.body;
    if(!body){
      return res.status(422).json({ message: "Invalid request body" });
    }
    const slug = body.slug;
    if(slug){
      console.log(slug);
      await res.revalidate(`/thoughts/${slug}`);
      return res.status(200).json({ revalidated: true });
    }
  }
  catch (err) {
    return res.status(500).send("Error revalidating" + err);
    }*/
}