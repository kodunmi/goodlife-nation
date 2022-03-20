import { IBaseResponse, IAuthUser, IUser } from '../lib';
import { emptySplitApi } from './base';


export interface LoginRequest {
    phone: string
    password: string
  }
  
  export interface RegisterRequest {
    fullName:string
    email: string;
    password:string
    phone: string;
    chapterId: string;
    tenId: string;
  }

  export interface VerifyPhoneRequest {
    phone: string;
    otp: number;
  }

  export interface ResetPasswordRequest {
    confirmPassword: string;
    otp: number;
    password: string;
    phone: string;
  }

  export interface ChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
  }

  export interface UpdateProfileRequest {
    fullName?: string;
    email?: string;
    chapterId?: string;
    tenId?: string;
  }

  const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation<IBaseResponse<IAuthUser>, LoginRequest>({
        query: (credentials) => ({
          url: 'auth/login',
          method: 'POST',
          body: credentials,
        }),
      }),
      register: builder.mutation<IBaseResponse<IAuthUser>, RegisterRequest>({
        query: (body) => ({
          url: 'auth/register',
          method: 'POST',
          body: body,
        })
      }),
      logout: builder.mutation<IBaseResponse<string>,string>({ 
        query: () => ({
          url: 'auth/logout',
          method: 'POST'
        })
      }),

      verifyPhone: builder.mutation<IBaseResponse<string>,VerifyPhoneRequest>({
        query: (phone) => ({
          url: 'auth/verify-phone',
          method: 'POST',
          body: phone
        })
      }),

      resendOtp: builder.mutation<IBaseResponse<string>,string>({
        query: (phone) => ({
          url: 'auth/resend-otp',
          method: 'POST',
          body:{phone:phone}
        })
      }),

      sendResetPassword: builder.mutation<IBaseResponse<string>,string>({
        query: (phone) => ({
          url: 'auth/request-password-reset',
          method: 'POST',
          body:{phone}
        })
      }),

      resetPassword: builder.mutation<IBaseResponse<string>,ResetPasswordRequest>({
        query: (body) => ({
          url: 'auth/reset-password',
          method: 'POST',
          body
        })
      }),

      updatePassword: builder.mutation<IBaseResponse<string>,ChangePasswordRequest>({
        query: (body) => ({
          url: 'auth/update-password',
          method: 'POST',
          body
        })
      }),

      updateProfile: builder.mutation<IBaseResponse<IAuthUser>, UpdateProfileRequest>({
        query: (body) => ({
          url: '/users/update-profile',
          method: 'PATCH',
          body: body,
        })
      }),
    }),
  })
  
  export const { useLoginMutation, useRegisterMutation,useLogoutMutation,useUpdateProfileMutation, useVerifyPhoneMutation, useResendOtpMutation, useSendResetPasswordMutation, useResetPasswordMutation, useUpdatePasswordMutation } = extendedApi