export interface IBaseResponse<T> {
    data: T
    status: "success" | "error"
    message?: string
}

export interface IRoyalChapter {
    id: string;
    name: string;
    description: string;
    image: string;
    address: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    email: string;
    // users: IUser[];
    // tens: ITen[];
}

export interface ITen {
    name: string;
    chapter: IRoyalChapter;
    id: string;
}

export interface IUser {
    email: string;
    password: string;
    fullName: string;
    accountVerified: boolean;
    emailVerified: boolean;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    otp: number;
    forgetPasswordOtp: number;
    forgetPasswordExpireAt: Date;
    expireAt: Date;
    verifiedAt: Date;
    verified: boolean;
    lastLoginAt: Date;
    lastLoginIp: string;
    chapter: IRoyalChapter;
    ten: ITen;
}

export interface IPreferences {
    cities: Array<string>
    musics: Array<string>
    services: Array<string>
}

export interface IAuthUser {
    token: string
    user: IUser
}

export interface IGuestUser {
    name: string;
    age: string;
    music: Array<string>;
    location: Array<string>;
    service: Array<string>;
};