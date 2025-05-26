export interface Course {
  title: string;
  name: string;
  price: number;
  instructor: string;
  duration: string;
  topics: string[];
  level: string;
  description?: string;
}

export interface ApiResponse {
  data: Course[];
  source: string;
}

export interface VersionResponse {
  version: string;
  host: string;
}
