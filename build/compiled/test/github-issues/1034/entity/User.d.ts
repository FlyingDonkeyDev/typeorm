import { Circle } from "./Circle";
export declare class User {
    /**
     * User's identifier
     */
    private id;
    private circles;
    /**
     * Getter identifier
     *
     * @returns {number}
     */
    getId(): number;
    /**
     * Setter identifier
     *
     * @param id new identifier value
     */
    setId(id: number): void;
    /**
     * Getter circles
     *
     * @returns {Circle[]}
     */
    getCircles(): Promise<Circle[]>;
    /**
     * Setter circle
     *
     * @param circles new circle value
     */
    setCircles(circles: Promise<Circle[]>): void;
}
