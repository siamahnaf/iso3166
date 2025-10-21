import { countryData } from './data';

interface CountryDataTypes {
    id: number;
    name: string;
    isoAlpha2: string;
    isoAlpha3: string;
    isoNumeric: number;
    currency: {
        code: string;
        name: string;
        symbol: string | boolean;
    };
    flag: string;
    callingCodes: string;
    languages: string[];
    emoji: string;
}

export function getCountryList(): CountryDataTypes[] {
    return countryData as CountryDataTypes[];
}
