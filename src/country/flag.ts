import { countryData } from './data';

type RasterFormat = ".webp" | ".png";
type VectorFormat = ".svg";
type JpgFormat = ".jpg";

type RasterSizes =
    | "16x12" | "20x15" | "24x18" | "28x21" | "32x24" | "36x27" | "40x30"
    | "48x36" | "56x42" | "60x45" | "64x48" | "72x54" | "80x60" | "84x63"
    | "96x72" | "108x81" | "112x84" | "120x90" | "128x96" | "144x108"
    | "160x120" | "192x144" | "224x168" | "256x192";

type JpgSizes = "w20" | "w40" | "w80" | "w160" | "w320" | "w640" | "w1280" | "w2560";

type Props =
    | { format: RasterFormat; sizes: RasterSizes }
    | { format: VectorFormat; sizes?: never }
    | { format: JpgFormat; sizes: JpgSizes };


export function getFlagBase64(code: string, options: Props): string {
    const result = countryData.find((item) => item.isoAlpha2 === code || item.isoAlpha3 === code);
    const url = "https://flagcdn.com"
    if (options.format === ".png") {
        return `${url}/${options.sizes || "28x21"}/${result?.isoAlpha2.toLowerCase()}.png`
    } else if (options.format === ".webp") {
        return `${url}/${options.sizes || "28x21"}/${result?.isoAlpha2.toLowerCase()}.webp`
    } else if (options.format === ".jpg") {
        return `${url}/${options.sizes || "w20"}/${result?.isoAlpha2.toLowerCase()}.jpg`
    } else if (options.format === ".svg") {
        return `${url}/${result?.isoAlpha2.toLowerCase()}.svg`
    } else {
        return `${url}/${options.sizes || "28x21"}/${result?.isoAlpha2.toLowerCase()}.png`
    }
}

