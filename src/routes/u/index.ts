import type { RequestEvent } from '@builder.io/qwik-city';

export const onGet = async (r: RequestEvent) => {
  r.json(200, { hello: 'world' });

  const o = Object.fromEntries(r.query);
  r.redirect(302, `/u/${o.id}`);
  console.log(o);
};
