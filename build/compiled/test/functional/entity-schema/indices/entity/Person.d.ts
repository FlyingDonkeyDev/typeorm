export declare const PersonSchema: {
    name: string;
    columns: {
        Id: {
            primary: boolean;
            type: string;
            generated: string;
        };
        FirstName: {
            type: StringConstructor;
            length: number;
        };
        LastName: {
            type: StringConstructor;
            length: number;
            nullable: boolean;
        };
    };
    relations: {};
    indices: {
        IDX_TEST: {
            unique: boolean;
            columns: string[];
        };
    };
};
