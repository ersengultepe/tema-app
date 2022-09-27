export class ResponseModel<T> {
    data: T;
    message: string = "";
    success: boolean = false;
}