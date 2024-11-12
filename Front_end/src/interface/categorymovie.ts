export interface ICategoryMovie {
    id: number | string;
    name_category: string;
    deleted_at: null;
    created_at: null;
    updated_at: null;
  }
  export type AreaData = Pick<ICategoryMovie, "name_category">;
  