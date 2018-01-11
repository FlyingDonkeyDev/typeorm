import { Category } from "./Category";
import { User } from "./User";
import { Editor } from "./Editor";
export declare class Post {
    id: number;
    title: string;
    primaryCategories: Category[];
    secondaryCategories: Category[];
    author: User;
    editors: Editor[];
}
