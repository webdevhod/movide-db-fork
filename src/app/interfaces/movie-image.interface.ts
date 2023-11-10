export interface MovieImage {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface MovieImages {
  backdrops: MovieImage[];
  id: number;
  logos: MovieImage[];
  posters: MovieImage[];
}
