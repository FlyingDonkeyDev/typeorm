import { Post } from "./Post";
import { Tag } from "./Tag";
export declare class Category {
    name: string;
    type: string;
    code: number;
    version: number;
    description: string;
    post: Post;
    postWithOptions: Post;
    postWithNonPrimaryColumns: Post;
    tag: Tag;
    tagWithOptions: Tag;
    tagWithNonPrimaryColumns: Tag;
}
