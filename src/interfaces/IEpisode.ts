export interface IEpisode {
  mal_id: number;
  url: string;
  title: string;
  title_japanese: string;
  title_romanji: string;
  duration: number;
  aired: Date;
  filler: boolean;
  recap: boolean;
  synopsis: string;
}
