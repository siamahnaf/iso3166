import { countryData } from './data';

export function getLanguages(code: string): string[] {
    const result = countryData.find((item) => item.isoAlpha2 === code || item.isoAlpha3 === code);
    return result?.languages || [];
}
