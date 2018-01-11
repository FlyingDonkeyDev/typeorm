import { Post } from "./Post";
import { Photo } from "./Photo";
export declare class Category {
    id: number;
    name: string;
    oneToManyPosts: Post[];
    noCascadeOneToManyPosts: Post[];
    oneToOneOwnerPost: Post;
    noCascadeOneToOnePost: Post;
    manyToManyPosts: Post[];
    noCascadeManyToManyPosts: Post[];
    photos: Photo[];
    photo: Photo | null;
}
