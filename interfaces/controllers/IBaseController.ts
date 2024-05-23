export interface IBaseController<T> {
    create(obj: Partial<T>): Promise<T>;
  
    findAll(): Promise<T[]>;
  
    findOne(id: string): Promise<T>;
  
    update(id: number, obj: Partial<T>): Promise<T>;
  
    remove(id: string): Promise<T>;
  }
  