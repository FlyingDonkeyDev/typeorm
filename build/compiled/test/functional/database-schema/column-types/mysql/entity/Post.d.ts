/// <reference types="node" />
import { FruitEnum } from "../enum/FruitEnum";
export declare class Post {
    id: number;
    name: string;
    int: number;
    tinyint: number;
    smallint: number;
    mediumint: number;
    bigint: number;
    float: number;
    double: number;
    decimal: number;
    date: string;
    datetime: Date;
    timestamp: Date;
    time: string;
    year: number;
    char: string;
    varchar: string;
    blob: Buffer;
    text: string;
    tinyblob: Buffer;
    tinytext: string;
    mediumblob: Buffer;
    mediumtext: string;
    longblob: Buffer;
    longtext: string;
    enum: string;
    classEnum1: FruitEnum;
    json: Object;
    simpleArray: string[];
}
