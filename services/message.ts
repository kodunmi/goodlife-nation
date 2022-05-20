import { IBaseResponse, ILink, IMessage, IMeta } from '../lib';
import { emptySplitApi } from './base';


const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    
    getAllMessage: builder.query<IBaseResponse<{items:Array<IMessage>, links:ILink,meta:IMeta}>, {search:string, tag: 'ALL' | 'NCR' | '7DOA' | 'PEM' | 'TGP', page:number}>({
      query: ({tag, search, page}) => `/message/get-all?page=${page}&search=${search}&tag=${tag}`,
    })
  }),
})

export const { useGetAllMessageQuery } = extendedApi