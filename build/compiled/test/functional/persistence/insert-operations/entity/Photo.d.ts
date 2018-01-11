import { Post } from "../entity/Post";
export declare class Photo {
    id: number;
    url: string;
    post: Post | null;
    posts: Post[];
}
