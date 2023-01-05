<script>
    export let data;
    const { albums } = data;
</script>
<h1>Your last fm stats</h1>
<div class="block-albums">
    {#each albums as album}
        <div class="albums">
            <img class="albums-cover" src="{album.cover}" alt="cover of {album.name} from {album.artist}">
            <div class="albums-content">
                <span class="albums-name">{album.name}</span>
                <span class="albums-artist">{album.artist}</span>
                <span class="albums-playcount">{album.playcount} plays</span>
            </div>
        </div>
    {/each}
</div>
