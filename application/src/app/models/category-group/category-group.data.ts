import { CategoryGroupInterface } from './category-group.model';

export const testCategoryGroupData: Array<CategoryGroupInterface> = [
    {
        id: 1,
        name: 'Bills',
        categories: [
            {
                id: 1,
                name: 'Rent - £425 - 1st',
                amount_budgetted: 0,
                amount_available: 0
            },
        ]
    },
    {
        id: 2,
        name: 'Travel',
        categories: [
            {
                id: 2,
                name: 'Petrol',
                amount_budgetted: 0,
                amount_available: 0,
            }
        ]
    }
];
