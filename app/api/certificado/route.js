import { query } from '../../../lib/db';


export async function GET(req) {
    try {
      const certificados = await query({
        query: 'SELECT * FROM certificado',
        values: [],
      });
      return new Response(JSON.stringify(certificados), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error fetching certificados:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }