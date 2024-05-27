import { query } from '../../../lib/db';

export async function GET(req) {
  try {
    const usuarios = await query({
      query: 'SELECT * FROM usuario',
      values: [],
    });
    return new Response(JSON.stringify(usuarios), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}