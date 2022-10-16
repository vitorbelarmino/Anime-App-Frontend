export interface ILatestEpisodes {
  entry: Entry;
  episodes: Entry[];
  region_locked: boolean;
}

export interface Entry {
  mal_id: number;
  url: string;
  images: Images;
  title: string;
  premium?: boolean;
}
export interface Images {
  jpg: Image;
  webp: Image;
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}
