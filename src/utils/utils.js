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
