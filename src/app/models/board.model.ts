import { Column } from "./columns.model";

export class Board {
    constructor(public name: string, public columns: Column[]) {}

    public removeCol(element: string) {
        this.columns = this.columns.filter(x => x.name !== element);
    }
    
    public addCol(element: string) {
        this.columns.push(new Column(element, []));
    }
}