export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/visitor-count') {
      const count = parseInt(await env.VISITOR_COUNTER.get('visits')) || 0;
      await env.VISITOR_COUNTER.put('visits', (count + 1).toString());
      return new Response(JSON.stringify({ value: count + 1 }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }
    return env.ASSETS.fetch(request);
  }
};