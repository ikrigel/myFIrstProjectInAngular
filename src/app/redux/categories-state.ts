import CategoriesModel from "../models/categorie.model";

// categories State: 
export class CategoriesState {
    public categories: CategoriesModel[] = [];
}

// Categorie Action Types:
export enum CategorieActionType {
    categoriesDownloaded = "categoriesDownloaded",
    // CategorieAdded = "CategorieAdded",
    // CategorieUpdated = "CategorieUpdated",
    // CategorieDeleted = "CategorieDeleted"
}

// Categorie Action: 
export interface CategorieAction {
    type: CategorieActionType;
    payload: any;
    // More specific type list:
    // payload: CategorieModel[] | CategorieModel | number;
}

// Categorie Action Creators: 
export function categoriesDownloadedAction(categories: CategoriesModel[]): CategorieAction {
    return { type: CategorieActionType.categoriesDownloaded, payload: categories };
}
// export function CategorieAddedAction(Categorie: CategoriesModel): CategorieAction {
//     return { type: CategorieActionType.CategoriesAdded, payload: Categorie };
// }
// export function CategorieUpdatedAction(Categorie: CategorieModel): CategorieAction {
//     return { type: CategorieActionType.CategorieUpdated, payload: Categorie };
// }
// export function CategorieDeletedAction(id: number): CategorieAction {
//     return { type: CategorieActionType.CategorieDeleted, payload: id };
// }

// categories Reducer:
export function categoriesReducer(currentState: CategoriesState = new CategoriesState(), action: CategorieAction): CategoriesState {
    
    const newState = { ...currentState };

    switch(action.type) {
        case CategorieActionType.categoriesDownloaded: // Here payload is all categories (CategorieModel[])
            newState.categories = action.payload;
            console.log("Categorie reducer");
            break;
        // case CategorieActionType.CategorieAdded: // Here payload is the added Categorie (CategorieModel)
        //     newState.categories.push(action.payload);
        //     break;
        // case CategorieActionType.CategorieUpdated: { // Here payload is the updated Categorie (CategorieModel)
        //     const index = newState.categories.findIndex(p => p.id === action.payload.id);
        //     newState.categories[index] = action.payload;
        //     break;
        // }
        // case CategorieActionType.CategorieDeleted: { // Here payload is the deleted Categorie's id (number)
        //     const index = newState.categories.findIndex(p => p.id === action.payload);
        //     newState.categories.splice(index, 1);
        //     break;
        // }
    }

    return newState;
}