import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';

export const getProductData = routeLoader$(({ params }) => {
  return { id: params.id };
});

export default component$(() => {
  const signal = getProductData();
  return (
    <div class="container">
      <div class="flex justify-between gap-4 p-4 ">
        <img
          src="/pic/a (1).jpg"
          class="rounded-full w-28 h-28 border border-sky-500"
        />
        <h1 class="flex-1">iman malakbala</h1>
        <h1>{signal.value.id}</h1>
      </div>
    </div>
  );
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
