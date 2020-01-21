export class Product {
    id: number;
    namePanel: string;
    price: number;
    priceOld: number;
    type: string;
    position: number;
    isPersonalizable: boolean;
    variations: Array<Varations>;
    countries: Array<string>;
    rating: number;
    numVote: number;
    relatedProducts: Array<string>;
    priceCurrency: string;
    priceOldCurrency: string;
    packagingPriceCurrency: string;
    sku: string;
    availableAges: Array<string>;
    bookTotalPages: number;
    bookDedicationPage: number;
    bookBarcodePage: number;
    hasRelationShip: boolean;
    photoUrl?: string;
    personalizationParams?: PersonalizationParams;
}

class VariationImage {
    id: number;
    storageId: string;
    storageBucketId: string;
    url: string;
}
export class Language {
    code: string;
    region?: string;
    name: string;
    locale: string;
}
export class Varations {
    id: number;
    name: string;
    sku: string;
    synopsis: string;
    slug: string;
    active: boolean;
    people: number;
    variationImage: VariationImage;
    language: Language;
    description: string;
    defaultDedication: string;
    tags: Array<string>;
    facebookId: string;
    metaTitle: string;
    metaDescription: string;
}
export class PersonalizationParams {
    avatars?: Array<Avatars>;
    bookTotalPages: number;
    bookDedicationPage: number;
    bookBarcodePage: number;
}
export class Avatars {
    position: number;
    description: string;
    availableAges: Array<string>;
    availableShapes: Array<string>;
}
export class Resultdado {
    clear: boolean;
    tags: Array<string>;
    resultados: Array<Product>;
}
