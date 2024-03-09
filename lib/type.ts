export type Products = {
    id?: string | number;
    rate: string | number;
    name: string;
    description: string;
    image: string;
    slug: string;
    price: string;
    brand?: string;
    onClick ?: () => void;
}