import type { RequestEvent } from '@builder.io/qwik-city';

export const onGet = async ({ query, redirect }: RequestEvent) => {
  const o = Object.fromEntries(query);
  redirect(302, `/u/${o.id}`);

  if (o.id) {
    throw redirect(302, `/u/${o.id}`);
  }
};
