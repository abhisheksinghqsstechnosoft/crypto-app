import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";



const cryptoNewsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '44c959b1c6msh68f5478a6437b80p15d7afjsna5ef264f80a6',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};
const baseUrl = `https://bing-news-search1.p.rapidapi.com`;

const createRequest = (url) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>
    {
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    }
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;