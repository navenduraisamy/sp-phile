export interface SpotifyUser {
    name: string;
    external_urls: ExternalUrls;
    email: string;
    images: SpotifyImage[];
    id: string;
}

export interface SpotifyTopItemsCollection {
    items: SpotifyTrack[] | SpotifyArtist[];
}

export interface SpotifyTrack {
    name: string;
    id: string;
    popularity:number;
    external_urls: ExternalUrls;
    artists: SpotifyArtist[];
}

export interface SpotifyArtist {
    name: string;
    external_urls: ExternalUrls;
    images: SpotifyImage[];
    followers: { total: number };
    genres: string[];
}

export interface ExternalUrls {
    spotify: string;
}

export interface SpotifyImage {
    height: number;
    width: number;
    url: string;
}

export interface SpotifyPlaylist {
    id: string;
    name: string;
}