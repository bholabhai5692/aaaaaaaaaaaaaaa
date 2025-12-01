addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);

  // केवल /app-ads.txt पथ के लिए Content-Type हेडर को बदलें।
  if (url.pathname === '/app-ads.txt') {
    
    // 1. मूल (Original) फ़ाइल को fetch करें
    // यह मान लिया गया है कि यह Worker आपके dcb00ff6-c5.pages.dev डोमेन पर रूटेड है।
    // हम request.url से ही fetch कर सकते हैं।
    const response = await fetch(request);

    // 2. Response को क्लोन करें ताकि हम हेडर को संशोधित कर सकें
    const newResponse = new Response(response.body, response);

    // 3. Content-Type हेडर को IAB मानक (Standard) 'text/plain' पर सेट करें
    newResponse.headers.set('Content-Type', 'text/plain');

    // 4. संशोधित Response को वापस करें
    return newResponse;
  }

  // अन्य सभी अनुरोधों (जैसे index.html) को सामान्य रूप से जाने दें
  return fetch(request);
}
