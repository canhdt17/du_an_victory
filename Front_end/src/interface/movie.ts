export interface IMovie {
  id: string | number;
  name_movie: string;
  image: string;
  type_id: string | number;
  duration: string;
  nation: string;
  director: string;
  performer: string;
  show:string;
  content: string | null;
  link_trailler: string;
  category_id: string | number;
  deleted_at: Date | null;
  created_at: Date | null;
  updated_at: Date | null;
  name_type: string;
  name_category: string;
}
