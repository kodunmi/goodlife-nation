import { IBaseResponse, IRoyalChapter } from '../lib';
import { emptySplitApi } from './base';


const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    
    getAllRC: builder.query<IBaseResponse<IRoyalChapter[]>, string>({
      query: () => `royal-chapter/get-all`,
    })
  }),
})

export const { useGetAllRCQuery } = extendedApi