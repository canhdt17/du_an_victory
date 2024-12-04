export interface ITypeMovie {
    id: number | string;
    name_type: string;
    deleted_at: null;
    created_at: null;
    updated_at: null;
  }
  export type AreaData = Pick<ITypeMovie, "name_type">;
  