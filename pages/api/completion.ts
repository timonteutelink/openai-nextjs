// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateCompletionResponse } from 'openai';
import openai from '../../utils/openai/openai';

async function createCompletion(prompt: any): Promise<CreateCompletionResponse | null> {
  const response = await openai.createCompletion({ ...prompt, model: "text-davinci-003", max_tokens: 2048 });

  if(!response.status.toString().startsWith("2")) {
    return null;
  }

  return response.data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateCompletionResponse | string>
) {
  if(req.method != "POST" || !req.body) {
    res.status(400).json("nice");
    return;
  }

  const completionResponse = await createCompletion(req.body);
  if(completionResponse == null) {
    res.status(500).json("nice");
    return;
  }

  res.status(200).json(completionResponse);
}
