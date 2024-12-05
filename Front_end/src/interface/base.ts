export interface IBase {
  id: number | string;
  base_name: string;
}
export type AreaData = Pick<IBase, "base_name">;
