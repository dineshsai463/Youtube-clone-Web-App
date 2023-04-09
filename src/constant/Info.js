const apiKey = `AIzaSyDIt3NcGNpvZts3AbfB-cNiPkUQy7l8qzw`;
export const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=28&regionCode=IN&key=${apiKey}`
export const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&key=${apiKey}`
export const categorySearchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&key=${apiKey}`

export const categoryList = [
    {
      id: 1,
      name: "Movies",
    },
    {
      id: 2,
      name: "Bollywood",
    },
    {
      id: 3,
      name: "Sports",
    },
    
    {
      id: 4,
      name: "Football",
    },
    {
      id: 5,
      name: "Cricket",
    },
    {
      id: 6,
      name: "Podcast",
    },
    {
      id: 7,
      name: "T-Series",
    },
    {
      id: 8,
      name: "Web-Development",
    },
    {
      id: 9,
      name: "Comedy",
    }
   
  ];

