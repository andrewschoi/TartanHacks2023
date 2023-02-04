export const commonQuestions = [
  'What is the purpose of the document and does it serve that purpose effectively?',
  'Are the provisions in the document enforceable and legally binding?',
  'Does the document remain consistent throughout and avoid any conflicting provisions?',
  'Does the document contain any ambiguous or unclear language that could be interpreted differently?',
];

export default async function cuad({ question, context }) {
  const response = await fetch(
    'https://rx63c4g0pi.execute-api.us-east-1.amazonaws.com/prod/cuad',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: question,
        context: context,
      }),
    },
  );
  const data = await response.json();
  return JSON.parse(data);
}

export async function modelQuestion({ question, context }) {
  const API_KEY = 'insert key';

  const response = await fetch(
    'https://api.openai.com/v1/engines/davinci/completions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt:
          'Pretend you are a lawyer tasked with concisely answering another human this question:' +
          question +
          '. Based on this document: ' +
          context.substring(Math.min(1900, context.length)),
        max_tokens: 50,
      }),
    },
  );
  const data = await response.json();
  console.log(data);
  return data['choices'][0].text;
}
