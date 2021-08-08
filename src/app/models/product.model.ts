class ProductModel {

    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageName: string;//For GET operations, received from REST API as JSON
    public images: FileList;///For POST operations, sent to REST API as JSON

    // "id": 1,
    // "name": "Chai",
    // "price": 18,
    // "stock": 39,
    // "imageName": "1.jpg"

}

export default ProductModel;