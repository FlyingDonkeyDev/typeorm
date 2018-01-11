import { Post } from "./Post";
import { Photo } from "./Photo";
export declare class Category {
    id: number;
    name: string;
    onePost: Post;
    posts: Post[];
    photos: Photo[];
    photo: Photo | null;
}
