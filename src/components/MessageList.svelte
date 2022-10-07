<script>
    import {messages} from "../vcStore"

    let msgs = []

    messages.subscribe(m => {
        msgs = m
    })
</script>

<ul>
    {#each msgs as msg}
        <li>{msg.from} -- {msg.msg}</li>
    {/each}
</ul>