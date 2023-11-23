import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
  "X-RapidAPI-Key": "8b1e821adfmsh53510409fcf7857p1934dbjsn6f05a9c06285",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl =  'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest (`/coins?limit=${count}`),
        })
    })
});

export const {
     useGetCryptosQuery,
} =  cryptoApi;