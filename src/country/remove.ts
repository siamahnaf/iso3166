import { countryData } from './data';

export function removeDialCode(phone: string): string | undefined {
    const result = countryData.find((item) => phone.includes(item.callingCodes));
    if (!result) return undefined;
    const update = phone.slice(result.callingCodes.length);
    return update;
}
