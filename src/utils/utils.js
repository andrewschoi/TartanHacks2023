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
