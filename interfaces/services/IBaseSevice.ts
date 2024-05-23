export interface IBaseService<T> {
    create(obj: Partial<T>): Promise<T>;

    findAll(): Promise<T[]> | T[];

    findOne(id: number): Promise<T> | T;

    update(id: number, changedObj: Partial<T>): Promise<T> | T;

    remove(id: number): Promise<T> | T;
}