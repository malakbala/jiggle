import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <label class=" flex items-center justify-between p-2 gap-2 border-b">
      <img class="" />
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?22"
        data-telegram-login="fruitmachinebot"
        data-auth-url="/u/"
        data-request-access="write"
      ></script>
      <input
        type="search"
        placeholder="Search user"
        class="flex-1 outline-none"
      />
      <Link href="/" class="text-2xl">
        🧭
      </Link>
    </label>
  );
});
