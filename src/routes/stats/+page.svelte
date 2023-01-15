<script>
    export let form;
</script>
<a class="button" href="/">Go back</a>
{#if form?.success}
    {#if form?.user}
        <h1>{form.user} stats</h1>
    {/if}
    <div class="block-albums">
        {#each form.albums as album}
            <div class="albums">
                {#if album.cover}
                    <img class="albums-cover" src="{album.cover}" alt="cover of {album.name} from {album.artist}">
                {:else}
                    <div class="albums-cover"></div>
                {/if}
                <div class="albums-content">
                    <span class="albums-name">{album.name}</span>
                    <span class="albums-artist">{album.artist}</span>
                    <span class="albums-playcount">{album.playcount} plays</span>
                </div>
            </div>
        {/each}
    </div>
{:else}
    <div>
        <h1>Not stats where found</h1>
        <span>You probably misspell your last fm username</span>
    </div>
{/if}