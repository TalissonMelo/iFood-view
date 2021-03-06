import { Estado } from "./estado";

export class Cidade {
    public id: number;
    public nome: string;
    public estado_id: number;
    public estado: Estado;
}