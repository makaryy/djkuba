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
}

export interface ILastPhotoContext {
    lastViewedPhoto: null | number;
    setLastViewedPhoto: (id: number) => void;
}
