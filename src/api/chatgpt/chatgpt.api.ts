//TODO: CREATE CHATGPT MOPVIE SUGGESTION API
//SUGGESTIONS MUST BE COMPARED AGAINST EACH OTHER (FROM DIFFERENT APIS)
const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

//TODO: REMOVE TYPE ANY
const gptResponse = async (prompt: string): Promise<any> => {
  const gptResponse = await openai.complete({
    engine: "davinci",
    prompt: prompt,
  });

  console.log(gptResponse.data);
};
