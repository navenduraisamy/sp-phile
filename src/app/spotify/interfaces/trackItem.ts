import { Album } from "./album"
import { Artist } from "./artist"

export interface TrackItem {
    album: Album
    artists: Artist[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: any
    external_urls: any
    href: string
    id: string
    is_playable: boolean
    linked_from: any
    restrictions: any
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }