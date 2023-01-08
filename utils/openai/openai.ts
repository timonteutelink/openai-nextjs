import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

export default openai;