

export class Note {
    constructor(

        public title: string,
        // tslint:disable-next-line: variable-name
        public module_code: string,
        public body: string,
        // tslint:disable-next-line: variable-name
        public date_time: number,
        // tslint:disable-next-line: variable-name
        public _id?: string,
    ) { }
}

