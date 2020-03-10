export class Alltask {
    constructor(
        public id: string,
        public title: string,
        public duedate: Date,
        public modul: string,
        public description: string,
        public userId: string,

    ) {}
}

export class Completedtask {
    constructor(
        public id: string,
        public title: string,
        public duedate: Date,
        public modul: string,
        public description: string,
        public userId: string,

    ) {}
}

export class Flag {
    constructor(
        public id: string,
        public title: string,
        public duedate: Date,
        public modul: string,
        public description: string,
        public userId: string,

    ) {}
}

export class Overdue {
    constructor(
        public id: string,
        public title: string,
        public duedate: Date,
        public modul: string,
        public description: string,
        public userId: string,

    ) {}
}
