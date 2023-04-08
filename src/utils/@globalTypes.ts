export enum ButtonType {
  Primary = "Primary",
  Secondary = "Secondary",
  Error = "Error",
}
export type CardType = {
  id: number;
  name: string;
  type: string;
  release_date: string;
  year: number;
  description: string;
  genre: null | string;
  tagline: string;
  poster: string;
  backdrop: string;
  runtime: number;
  trailer: null | string;
  budget: number;
  revenue: number;
  views: number;
  popularity: number;
  imdb_id: string;
  tmdb_id: number;
  season_count: number;
  fully_synced: boolean;
  allow_update: boolean;
  created_at: string;
  updated_at: string;
  language: string;
  country: null | string;
  original_title: string;
  affiliate_link: null | string;
  certification: string;
  episode_count: number;
  series_ended: boolean;
  is_series: boolean;
  show_videos: boolean;
  adult: boolean;
  rating: string;
  model_type: string;
  vote_count: number;
};

export type SingleCardType = {
  id: number;
  name: string;
  type: string;
  release_date: string;
  year: number;
  description: string;
  genre: null | string;
  tagline: string;
  poster: string;
  backdrop: string;
  runtime: number;
  trailer: null | string;
  budget: number;
  revenue: number;
  views: number;
  popularity: number;
  imdb_id: string;
  tmdb_id: number;
  season_count: number;
  fully_synced: boolean;
  allow_update: boolean;
  created_at: string;
  updated_at: string;
  language: string;
  country: null | string;
  original_title: string;
  affiliate_link: null | string;
  certification: string;
  episode_count: number;
  series_ended: boolean;
  is_series: boolean;
  show_videos: boolean;
  adult: boolean;
  rating: string;
  model_type: string;
  vote_count: number;
  images: { id: number; url: string; type: string; source: string }[];
  genres: { id: number; type: string; name: string; display_name: string }[];
  seasons: [];
  videos?: [
    {
      id: number;
      name: string;
      thumbnail: null | string;
      url: string;
      type: string;
      quality: null | string;
      title_id: number;
      episode_id: null | number;
      season_num: null | number;
      episode_num: null | number;
      source: string;
      negative_votes: number;
      positive_votes: number;
      reports: number;
      approved: boolean;
      order: number;
      created_at: string;
      updated_at: string;
      user_id: null | number;
      language: string;
      category: string;
      score: null | number;
      model_type: string;
      captions: [];
      latest_play: null | string;
    }
  ];
  credits?: {
    id: number;
    name: string;
    poster: string;
    model_type: string;
    pivot: {
      creditable_id: number;
      person_id: number;
      creditable_type: string;
      id: number;
      job: string;
      department: string;
      order: number;
      character: null | string;
    }[];
  };
};
