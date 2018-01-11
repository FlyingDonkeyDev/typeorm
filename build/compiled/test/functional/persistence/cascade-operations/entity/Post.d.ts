import { Category } from "./Category";
import { Photo } from "./Photo";
export declare class Post {
    id: number;
    title: string;
    category: Category | null;
    photos: Photo[];
    oneCategory: Category;
}
