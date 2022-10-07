<script>
  import { fns, messages } from "../vcStore";

  let msg = "";

  function sendmsg() {
    console.log(`sending "${msg}"`);

    fns.get().sendMessage(msg);
    messages.set([
      ...messages.get(),
      {
        from: "Me",
        msg: msg,
      },
    ]);

    msg = "";
  }
</script>

<form action="" on:submit|preventDefault={sendmsg}>
  <input type="text" bind:value={msg} />
  <button type="submit">Send</button>
</form>
