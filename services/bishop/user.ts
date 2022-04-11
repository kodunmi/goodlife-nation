import { IBaseResponse, ILink, IMeta, IUser } from '../../lib';
import { emptySplitApi } from './../base';


const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<IBaseResponse<{items:Array<IUser>, links:ILink,meta:IMeta}>, {chapterId:string, page:number}>({
            query: ({chapterId,page}) => `royal-chapter/get-all-users/${chapterId}?page=${page}`,
        })
    })
})

export const {useGetUsersQuery, useLazyGetUsersQuery} = extendedApi