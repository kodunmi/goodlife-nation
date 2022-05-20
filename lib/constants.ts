import process from "process";

const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default function isDev(): boolean
{
    return development;
}

export const BaseUrl = isDev() ? "http://127.0.0.1:8080" : "http://thegoodlifenation-env-2.eba-cq2qthzm.us-east-1.elasticbeanstalk.com"