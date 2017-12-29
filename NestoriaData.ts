// export class NestoriaData {
//     listings: Listing[];
//     constructor(list: Listing[]) {
//         this.listings = list;
//     }
// }


export interface Listing {
    bathroom_number: any;
    bedroom_number: number;
    car_spaces: number;
    commission: number;
    construction_year: number;
    datasource_name: string;
    img_height: any;
    img_url: string;
    img_width: any;
    keywords: string;
    latitude: number;
    lister_name: string;
    lister_url: string;
    listing_type: string;
    location_accuracy: number;
    longitude: number;
    price: number;
    price_currency: string;
    price_formatted: string;
    price_high: number;
    price_low: number;
    property_type: string;
    size: number;
    size_type: string;
    summary: string;
    thumb_height: any;
    thumb_url: string;
    thumb_width: any;
    title: string;
    updated_in_days: number;
    updated_in_days_formatted: string;
}

export interface INestoria {
    request : IDataRequest;
    response : IDataResponse;
}

export interface IDataRequest {
    country: string;
    pretty: string;
    placeName : string;
    listingType : string;
    action : string;
    page : string;
}

export class DataRequest implements IDataRequest {
    country: string;
    pretty: string;
    placeName : string;
    listingType : string;
    action : string;
    page : string;
    constructor() {
        this.country = '';
        this.action = '';
        this.placeName = '';
        this.listingType = '';
        this.pretty = '';
        this.page = '';
    }
}

export interface Attribution {
    img_height: number;
    img_url: string;
    img_width: number;
    link_to_img: string;
}

export interface IDataResponse {
    application_response_code: string;
    application_response_text: string;
    attribution: Attribution;
    created_http: string;
    created_unix: number;
    link_to_url: string;
    listings: Listing[];
    locations: Location[];
    page: number;
    sort: string;
    status_code: string;
    status_text: string;
    thanks: string;
    total_pages: number;
    total_results: number;
    _cu5t0mP434m_: string;
}
