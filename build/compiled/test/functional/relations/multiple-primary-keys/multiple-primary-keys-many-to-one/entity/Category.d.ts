import { Post } from "./Post";
export declare class Category {
    name: string;
    type: string;
    code: number;
    version: number;
    description: string;
    posts: Post[];
    postsWithEmptyJoinColumn: Post[];
    postsWithOptions: Post[];
    postsWithNonPrimaryColumns: Post[];
}
