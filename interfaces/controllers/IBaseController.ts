export interface IBaseController<T> {
    create(obj: Partial<T>): Promise<T>;
  
    findAll(): Promise<T[]>;
  
    findOne(id: string): Promise<T>;
  
    update(id: string, obj: Partial<T>): Promise<T>;
  
    remove(id: string): Promise<T>;
  }
  