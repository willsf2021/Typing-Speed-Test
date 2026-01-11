// const BASE_URL = 'https://localhost8000/random-text/';

export const fetchRandomText =  (length) => {
  try {
    // const url = length
    //   ? `${BASE_URL}?length=${length}`
    //   : BASE_URL;

    // const response = await fetch(url);

    // if (!response.ok) {
    //   throw new Error(`HTTP error ${response.status}`);
    // }

    // const data = await response.json();
    // return data;

    const mockText =
      "The city was still half asleep when the first light of morning slipped between the buildings, painting long shadows across the empty streets. A distant bus hummed somewhere beyond the intersection, while a stray cat watched the world with cautious curiosity. People would soon emerge from their apartments, carrying coffee cups and quiet expectations for the day ahead. Some would rush, others would wander, each absorbed in private thoughts that no one else could hear. The air carried a mix of cold concrete and warm bread from a nearby bakery, a reminder that routines, no matter how ordinary, give shape to life. Time moved forward without asking permission, stitching together moments that felt small but would later become memories. In that fragile space between silence and movement, the city quietly prepared itself to begin again.";

    return {
        status: true,
        text: mockText
    };
  } catch (error) {
    throw error;
  }
};
