import { Category } from "./Category";
export declare class Post {
    id: number;
    title: string;
    category: Category;
    categoryWithEmptyJoinColumn: Category;
    categoryWithOptions: Category;
    categoryWithNonPrimaryColumns: Category;
}
