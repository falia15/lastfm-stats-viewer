import 'dotenv/config';

export const load = async () => {
    const fetchAlbums = async () => {
        const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=falia15&api_key=${process.env.API_KEY}&format=json&limit=48`;
        const res = await fetch(url);
        const data = await res.json();
        
        const loadedAlbums = data.topalbums.album.map((item) => {
            return {
                artist: item.artist.name,
                playcount: item.playcount,
                name: item.name,
                cover: item.image.find(cover => cover.size === "extralarge")['#text']
            }
        });
        return loadedAlbums;
    }

    return {
        albums: fetchAlbums(),
    }
}
