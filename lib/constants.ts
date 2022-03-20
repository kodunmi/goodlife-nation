import process from "process";

const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default function isDev(): boolean
{
    return development;
}

export const BaseUrl = isDev() ? "http://127.0.0.1:3030" : "http://127.0.0.1:3030"