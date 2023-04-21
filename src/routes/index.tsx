import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import sizeOf from 'image-size';
import FlexBox from '~/components/flexbox/flexbox';
import fs from 'fs';

export const getProductData = routeLoader$(async ({ url }) => {
  var data: any = {
    d: [],
  };
  fs.readdirSync(`./public/pic/`).forEach((file) => {
    const bb = sizeOf(`./public/pic/${file}`);
    data.d.push({
      width: bb.width,
      height: bb.height,
      type: bb.type,
      name: file,
    });
  });

  return { data };
});

export default component$(() => {
  const signal = getProductData();
  return <FlexBox list={signal.value.data.d} />;
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
