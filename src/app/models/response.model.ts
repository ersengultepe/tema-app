import { ResultModel } from "./result.model";

export class ReponseModel<T> extends ResultModel{
    data: T;
}