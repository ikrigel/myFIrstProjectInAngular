class EmployeeModel {

    public id: number;
    public firstName: string;
    public lastName: string;
    public title: string;
    public country: string;
    public city: string;
    public birthDate: string;
    public imageName: string;//For GET operations, received from REST API as JSON
    public images: FileList;///For POST operations, sent to REST API as JSON

    // "id": 1,
    // "firstName": "Nancy",
    // "lastName": "Davolio",
    // "title": "Sales Representative",
    // "country": "USA",
    // "city": "Seattle",
    // "birthDate": "1948-12-08",
    // "imageName": "1.jpg"
    public static convertToFormData(employee: EmployeeModel): FormData {
        const myFormData = new FormData();
        myFormData.append("firstName", employee.firstName);
        myFormData.append("lastName", employee.lastName);
        myFormData.append("title", employee.title);
        myFormData.append("country", employee.country);
        myFormData.append("city", employee.city);
        myFormData.append("birthDate", employee.birthDate);
        if(employee.images) myFormData.append("image", employee.images.item(0));
        return myFormData;
    }
    
}

export default EmployeeModel;