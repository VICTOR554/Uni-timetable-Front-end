export class Class {
    constructor(
        public id: string,
        public date: number,
        public title: string,
        public type: string,
        public start: string,
        public end: string,
        public lecturer: string,
        public location: string,

    ) {}
}


export class Week {
    constructor(
        public id: string,
        public week: number,
        public mon: Date,
        public tue: Date,
        public wed: Date,
        public thu: Date,
        public fri: Date,

    ) {}
}
