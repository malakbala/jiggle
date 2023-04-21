import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';

export const getProductData = routeLoader$(async ({ params }) => {
  const a = await fetch(
    `https://api.telegram.org/bot5940002331:AAGsckouc94dyFEG1Ssw7IXKao-5E_YZ2wo/getUserProfilePhotos?user_id=${params.id}`
  );
  const b = await a.json();
  console.log();
  const c = await fetch(
    `https://api.telegram.org/bot5940002331:AAGsckouc94dyFEG1Ssw7IXKao-5E_YZ2wo/getFile?file_id=${b.result.photos[0][0].file_id}`
  );
  const d = await c.json();
  return { id: params.id, pp: d.result.file_path };
});

export default component$(() => {
  const signal = getProductData();
  return (
    <div class="container">
      <div class="flex justify-between gap-4 p-4 ">
        <img
          src={`https://api.telegram.org/file/bot5940002331:AAGsckouc94dyFEG1Ssw7IXKao-5E_YZ2wo/${signal.value.pp}`}
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
