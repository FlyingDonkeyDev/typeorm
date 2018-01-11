import { ActivityEntity } from "./ActivityEntity";
export declare class TileEntity {
    id: number;
    parents: TileEntity[];
    children: TileEntity[];
    activities: ActivityEntity[];
}
