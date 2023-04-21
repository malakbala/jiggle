import { useStyles$, component$, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './flexbox.css?inline';

export default component$((prop: { list: any }) => {
  useStyles$(styles);
  const state = useStore(['hello', 'goodbye', 'no']);
  return (
    <section>
      <details class="p-2">
        <summary style="word-spacing:4px;" class="opacity-60">
          About{' '}
          {Intl.NumberFormat('fa', { notation: 'compact' }).format(
            100000000000
          )}{' '}
          results
        </summary>
        <div>
          <form class="flex" preventdefault:submit>
            <label
              for="tag"
              class="taglist flex gap-1 p-1 items-center bg-slate-200"
            >
              {state?.map((item, index) => (
                <button
                  onClick$={(z) => {
                    state.splice(index, 1);
                  }}
                  type="button"
                  class="px-2 py-1 bg-slate-400 rounded-lg"
                  name="tag"
                  value={item}
                >
                  {item}
                </button>
              ))}

              <input
                placeholder="Search ..."
                type="text"
                id="tag"
                name="tag"
                class="flex-1 outline-none p-2 bg-slate-200"
                autoComplete="off"
                onKeyDown$={(z) => {
                  const v = z.target as HTMLInputElement;
                  if (z.key == 'Enter') {
                    state.push(v.value);
                    v.value = '';
                  }
                }}
              />
            </label>
            🔞
            <input type="submit" value="ok" />
          </form>
        </div>
      </details>

      <main class="flex flex-wrap gap-1 p-1 shadow-2xl">
        {prop.list.map((item: any, index: number) => (
          <figure
            class="relative min-h-[150px]"
            style={{
              flexGrow: (item.width * 100) / item.height,
              flexBasis: `${(item.width * 240) / item.height}px`,
            }}
          >
            <Link class="a" href={`/p/${item.name}`}>
              <img
                class="img w-full"
                alt="hello"
                title={new Intl.RelativeTimeFormat('fa', {
                  numeric: 'auto',
                }).format(-3, 'day')}
                loading="lazy"
                width={item.width}
                height={item.height}
                src={`/pic/${item.name}`}
              />
            </Link>
          </figure>
        ))}
      </main>
    </section>
  );
});
