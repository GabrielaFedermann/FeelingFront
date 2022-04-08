import { Post } from "./Post"

export class UserLogin{
    public id: number
    public token: string
    public name: string
    public email: string
    public photo: string
    public type: string
    public password: string
    public post: Post[]
}