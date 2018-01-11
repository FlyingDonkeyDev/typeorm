import { Post } from "../entity/Post";
import { Category } from "../entity/Category";
export declare class Photo {
    id: number;
    url: string;
    post: Post | null;
    categories: Category[];
}
