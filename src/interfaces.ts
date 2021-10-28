export interface User {
    name: string;
    age: number;
    country: string;
    address: {
        street: string;
        number: number;
        zip: number;
    };
    admin: boolean;
}
