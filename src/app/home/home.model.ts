export class Homes {
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

export class Note {
    constructor(
        public id: string,
        public title: string,
        public modul: string,
        public description: string,
        public userId: string,
    ) {}
}

export class Alltask {
    constructor(
        public id: string,
        public duedate: Date,
        public title: string,
        public modul: string,
        public description: string,
        public userId: string,

    ) {}
}

export class Completedtask {
    constructor(
        public id: string,
        public duedate: Date,
        public title: string,
        public modul: string,
        public description: string,
        public userId: string,

    ) {}
}

export class Flag {
    constructor(
        public id: string,
        public duedate: Date,
        public title: string,
        public modul: string,
        public description: string,
        public userId: string,

    ) {}
}

export class Overdue {
    constructor(
        public id: string,
        public duedate: Date,
        public title: string,
        public modul: string,
        public description: string,
        public userId: string,

    ) {}
}
