//TODO: CREATE CHATGPT MOPVIE SUGGESTION API
//SUGGESTIONS MUST BE COMPARED AGAINST EACH OTHER (FROM DIFFERENT APIS)
const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

//TODO: REMOVE TYPE ANY
const gptResponse = async (
  goodMovies: string[],
  badMovies: string[]
): Promise<any> => {
  const goodMoviesList = goodMovies.reduce(
    (list, goodMovie, index) => `${list}
  ${index} - ${goodMovie}`
  );

  const badMoviesList = badMovies.reduce(
    (list, badMovie, index) => `${list}
  ${index} - ${badMovie}`
  );

  const prompt = `Me dê 5 sugestões de filmes baseados nos filmes que irei informar a seguir.

  ${goodMoviesList}
  
  Quero que evite filmes similares a esses:
  
  ${badMoviesList}
  
  O título dos filmes deve ser em inglês. A resposta deve ser um array de strings em JSON. Nada mais deve ser adicionado a resposta.`;

  const gptResponse = await openai.complete({
    engine: "davinci",
    prompt: prompt,
    max_tokens: 250,
    temperature: 0.2,
  });

  console.log(gptResponse.data);

  return gptResponse.data;
};
