import 'dotenv/config';

export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const user = formData.get('user');

        const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${user}&api_key=${process.env.API_KEY}&format=json&limit=48`;
        const response = await fetch(url);
        if(!response.ok){
            return {
                success: false,
            }
        }
        const data = await response.json();
        const loadedAlbums = data.topalbums.album.map((item) => {
            return {
                artist: item.artist.name,
                playcount: item.playcount,
                name: item.name,
                cover: item.image.find(cover => cover.size === "extralarge")['#text']
            }
        });

        const stats = {
            success: true,
            user: user,
            albums: loadedAlbums,
        }

        return stats
    },
}
