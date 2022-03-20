import { IBaseResponse, IConvert } from './../lib/types';
import { emptySplitApi } from './base';

export interface AddConvertRequest {
    firstName:string
    lastName:string
    gender: 'male'|'female'
    location?:string
    occupation?:string
    phone:string
    dob?:string
    userId: string
}

const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        addConvert: builder.mutation<IBaseResponse<string>, AddConvertRequest>({
            query: (body) => ({
                url: 'convert/add-new-convert',
                method: 'POST',
                body
              })
        }),

        getConverts: builder.query<IBaseResponse<IConvert[]>, string>({
            query: () => `convert/get-user-converts`,
        })
    })


})

export const {useAddConvertMutation, useGetConvertsQuery, useLazyGetConvertsQuery} = extendedApi