import { countryData } from './data';

export interface GetCallingCodeTypes {
    code: string;
    format: string;
    flag: string;
}

export function getCallingCode(code: string): GetCallingCodeTypes {
    const result = countryData.find((item) => item.isoAlpha2 === code || item.isoAlpha3 === code);
    return {
        code: result?.callingCodes.toString().replace('+', '') as string,
        format: result?.callingCodes as string,
        flag: `https://flagcdn.com/256x192/${result?.isoAlpha2.toLowerCase()}.png`
    };
}
