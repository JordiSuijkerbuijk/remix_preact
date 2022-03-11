import render from 'preact-render-to-string';
import { h } from 'preact'
import { RemixServer } from "remix";

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  console.log('test')
  const markup = render(
    <RemixServer context={remixContext} url={request.url} />
  );

  console.log('markup', markup);

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
