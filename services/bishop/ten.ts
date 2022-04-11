import { ITen } from './../../lib/types';
import { IBaseResponse, IConvert, ILink, IMeta, IUser } from '../../lib';
import { emptySplitApi } from './../base';

export interface ICreatTenBody {
    name: string;
    leaderId: string;
    viceId: string;
    vipId: string;
}


const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        getTens: builder.query<IBaseResponse<ITen[]>, string>({
            query: (chapterId) => `/ten/get-all-tens-in-chapter/${chapterId}`,
        }),

        getTen: builder.query<IBaseResponse<ITen>, string>({
            query: (tenId) => `/ten/get-single-ten/${tenId}`,
        }),

        createTen: builder.mutation<IBaseResponse<IConvert>, ICreatTenBody>({
            query: (body) => ({
                url: '/ten/create-ten',
                method: 'POST',
                body
            })
        }),

        getAllUsers: builder.query<IBaseResponse<{items:Array<IUser>, links:ILink,meta:IMeta}>, {tenId:string, page:number}>({
            query: ({tenId, page}) => `/ten/get-all-users-in-ten/${tenId}?page=${page}`,
        }),
    })
})

export const { useGetTensQuery, useCreateTenMutation, useGetTenQuery, useGetAllUsersQuery  } = extendedApi