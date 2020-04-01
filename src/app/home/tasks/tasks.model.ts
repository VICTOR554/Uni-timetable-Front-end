export class Task {
    constructor(
        public title: string,
        // tslint:disable-next-line: variable-name
        public module_code: string,
        // tslint:disable-next-line: variable-name
        public created_date_time: number,
        // tslint:disable-next-line: variable-name
        public due_date_time: number,
        public body: string,
        // tslint:disable-next-line: variable-name
        public is_completed: boolean,
        // tslint:disable-next-line: variable-name
        public is_flagged: boolean,
        // tslint:disable-next-line: variable-name
        public _id?: string,

    ) {}
}

export class Completedtask {
    constructor(
        public title: string,
        // tslint:disable-next-line: variable-name
        public module_code: string,
        // tslint:disable-next-line: variable-name
        public created_date_time: number,
        // tslint:disable-next-line: variable-name
        public due_date_time: number,
        public body: string,
        // tslint:disable-next-line: variable-name
        public is_completed: boolean,
        // tslint:disable-next-line: variable-name
        public is_flagged: boolean,
        // tslint:disable-next-line: variable-name
        public _id?: string,

    ) {}
}

export class Flag {
    constructor(
        public title: string,
        // tslint:disable-next-line: variable-name
        public module_code: string,
        // tslint:disable-next-line: variable-name
        public created_date_time: number,
        // tslint:disable-next-line: variable-name
        public due_date_time: number,
        public body: string,
        // tslint:disable-next-line: variable-name
        public is_completed: boolean,
        // tslint:disable-next-line: variable-name
        public is_flagged: boolean,
        // tslint:disable-next-line: variable-name
        public _id?: string,
    ) {}
}

export class Overdue {
    constructor(
        public title: string,
        // tslint:disable-next-line: variable-name
        public module_code: string,
        // tslint:disable-next-line: variable-name
        public created_date_time: number,
        // tslint:disable-next-line: variable-name
        public due_date_time: number,
        public body: string,
        // tslint:disable-next-line: variable-name
        public is_completed: boolean,
        // tslint:disable-next-line: variable-name
        public is_flagged: boolean,
        // tslint:disable-next-line: variable-name
        public _id?: string,
    ) {}
}

export class Module {
    constructor(
        // tslint:disable-next-line: variable-name
        public name: string,
        public code: string,
        // tslint:disable-next-line: variable-name
        public course_id: number,
    ) { }
}
