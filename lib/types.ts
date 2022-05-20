export interface IBaseResponse<T> {
    data: T
    status: "success" | "error"
    message?: string
}

export interface IRoyalChapter {
    lat: any;
    lng: any;
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
    tens: ITen[];
}

export interface ITen {
    name: string;
    chapter: IRoyalChapter;
    id: string;
    leader: IUser | null;
    vp: IUser | null;
    vip: IUser | null;
    users: IUser[];
}

export interface IUser {
    id: string;
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
    isBishop: boolean;
    isTenLeader: boolean;
    isLeader: boolean;
    converts?: IConvert[];
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

export interface IConvert {
    createDateTime?: string
    dob?: string
    firstName?: string
    gender: "female" | "male"
    id: string
    lastChangedDateTime: string
    lastName: string
    location: string
    occupation: string
    phone: string
    user: IUser
}

export interface ILink {
    first: string
    last: string
    next: string
    previous: string
}

export interface IMeta {
    currentPage: number
    itemCount: number
    itemsPerPage: number
    totalItems: number
    totalPages: number
}

export interface IMessage {
    id: string
    title: string
    createDateTime: string
    lastChangedDateTime:string
    description: string
    imageUrl: string
    videoUrl: string
    date: Date
    tag: 'NCR'|'7DOA'|'TGP'|'PEM'

}