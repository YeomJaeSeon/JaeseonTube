export default class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }
  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 20,
      },
    });
    return response.data.items;
  }
  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        q: query,
      },
    });
    const filterItems = response.data.items
      .filter((item) => item.id.kind !== 'youtube#channel')
      .map((item1) => {
        return { ...item1, id: item1.id.videoId };
      });
    return filterItems;
  }
}
