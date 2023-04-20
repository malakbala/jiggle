import type { RequestEvent } from '@builder.io/qwik-city';

export const onGet = async (requestEvent: RequestEvent) => {
  requestEvent.json(200, { hello: 'world' });

  const o = Object.fromEntries(requestEvent.query);

  console.log(o);
};
