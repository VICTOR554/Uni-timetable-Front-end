export class Activity {
    constructor(
        // tslint:disable-next-line: variable-name
        public module_code: string,
        public type: string,
        // tslint:disable-next-line: variable-name
        public start_date_time: string,
        // tslint:disable-next-line: variable-name
        public end_date_time: string,
        // tslint:disable-next-line: variable-name
        public lecturer_name: string,
        public location: string,
        public id?: string,
    ) { }
}


export class Week {
    constructor(
        // tslint:disable-next-line: variable-name
        public number: number,
        public dates: [],

    ) { }
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

export class Locations {
    constructor(
        public name: string,
        public lat: number,
        public lng: number,
        public key: string,
    ) { }
}
