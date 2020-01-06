import { CategoryInterface } from '../category/category.model';

export interface CategoryGroupInterface {
    id: number;
    name: string;
    categories: Array<CategoryInterface>;
}
