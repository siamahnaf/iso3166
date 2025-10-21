import { countryData } from './data';

export interface GetCurrencyTypes {
    code: string;
    name: string;
    symbol: string | boolean;
}

export function getCurrency(code: string): GetCurrencyTypes {
    const result = countryData.find((item) => item.isoAlpha2 === code || item.isoAlpha3 === code);
    return result?.currency || ({} as GetCurrencyTypes);
}
