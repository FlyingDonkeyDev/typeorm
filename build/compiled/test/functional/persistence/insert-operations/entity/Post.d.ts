import { Category } from "./Category";
import { Photo } from "./Photo";
export declare class Post {
    id: number;
    title: string;
    manyToOneCategory: Category;
    noCascadeManyToOneCategory: Category;
    oneToOneCategory: Category;
    noCascadeOneToOneCategory: Category;
    manyToManyOwnerCategories: Category[];
    noCascadeManyToManyOwnerCategories: Category[];
    photos: Photo[];
    noInversePhotos: Photo[];
}
