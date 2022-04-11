import { IBaseResponse } from '../../lib';
import { emptySplitApi } from './../base';


const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        getRcStat: builder.query<IBaseResponse<{ users: number,converts: number,tens: number,}>, string>({
            query: (chapterId) => `royal-chapter/get-chapter-stat/${chapterId}`,
        })
    })
})

export const {useGetRcStatQuery} = extendedApi