class CategorieModel {

    public id: number;
    public name: string;
    public description: string;
    public imageName: string;//For GET operations, received from REST API as JSON
    public images: FileList;///For POST operations, sent to REST API as JSON

    public static convertToFormData(categories: CategorieModel): FormData {
        const myFormData = new FormData();
        myFormData.append("name", categories.name);
        myFormData.append("description", categories.description);
        if(categories.images) myFormData.append("image", categories.images.item(0));
        return myFormData;
    }
    
}

export default CategorieModel;