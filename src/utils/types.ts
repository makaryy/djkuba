export interface IFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    partyType: string;
    message: string;
    date: Date;
}

export interface IResponse {
    message: string;
    status: number;
}

export interface IImage {
    id: number;
    src: string;
    alt: string;
    width?: number;
    height?: number;
    aspectRatio?: number | string;
}

export interface IClodinaryResource {
    asset_id: string;
    public_id: string;
    folder: string;
    filename: string;
    format: string;
    version: number;
    resource_type: "image" | "video" | "raw";
    type: string;
    created_at: Date;
    uploaded_at: Date;
    bytes: number;
    backup_bytes: number;
    width: number;
    height: number;
    aspect_ratio: number | string;
    pixels: number;
    url: string;
    secure_url: string;
    status: "active" | "deleted";
    access_mode: "public" | "authenticated";
    access_control: any;
    etag: string;
    created_by: {
        access_key: string;
        custom_id: string;
        external_id: string;
    };
    uploaded_by: {
        access_key: string;
        custom_id: string;
        external_id: string;
    };
}

export interface ICloudinarySearchResult {
    total_count: number;
    time: number;
    resources: IClodinaryResource[];
    rate_limit_allowed: number;
    rate_limit_reset_at: Date;
    rate_limit_remaining: number;
}

export interface ILastPhotoContext {
    lastViewedPhoto: null | number;
    setLastViewedPhoto: (id: number | null) => void;
}
