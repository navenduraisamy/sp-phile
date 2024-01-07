import { Image } from "./image";
import { Artist } from "./artist";

export interface Album {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: any
    href: string
    id: string
    images: Image[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: any
    type: string
    uri: string
    artists: Artist[]
  }