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
    name: string;
    src: string;
}
