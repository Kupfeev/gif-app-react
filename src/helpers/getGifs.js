export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7oRrUVDAp8Cmt1MF0dBeNNTqEHUERXCP&q=${category}&limit=5`;
    const response = await fetch(url);
    const {data} = await response.json();
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized.url
    }));
    return gifs;
}