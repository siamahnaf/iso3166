import { countryData } from './data';

export interface CountryDataTypes {
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
interface Props {
    name?: string;
    countryCode?: string;
    callingCode?: string;
    currencyName?: string;
    currencyCode?: string;
    currencySymbol?: string;
    isoNumeric?: number;
}

export function lookup(data: Props): CountryDataTypes {
    const result = countryData.find((d) => {
        return (
            d.name === data?.name ||
            d.isoAlpha2 === data?.countryCode ||
            d.isoAlpha3 === data?.countryCode ||
            data.callingCode?.includes(data?.callingCode) ||
            d.currency.name === data?.currencyName ||
            d.currency.code === data?.currencyCode ||
            d.currency.symbol === data?.currencySymbol ||
            d.isoNumeric === data.isoNumeric
        );
    });
    return (result as CountryDataTypes) || ({} as CountryDataTypes);
}
