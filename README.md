<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-white.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-black.png">
  <img alt="Siam Ahnaf" src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/logo/logo-black.png" height="auto" width="240">
</picture>
<br/> <br/>

# @siamf/iso3166
A tiny, zero-dependency dataset and utilities for ISO-3166 country codes (alpha-2/alpha-3/numeric) and names. Lookup by code or name, validate inputs, and map between formats—fast and tree-shakeable.

## Introduction
A simple but useful functional node packages with all country data. It includes all useful country data gives several function to complete your project.


## Countries

The data currently provided for each country is:

  * `id` The unique id number for the array
  * `name` The english name for the country
  * `isoAlpha2` The [ISO 3166-1 alpha 2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code
  * `isoAlpha3` The [ISO 3166-1 alpha 3](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code
  * `isoNumeric` The [ISO 3166-1 numeric](https://en.wikipedia.org/wiki/ISO_3166-1_numeric)
  * `currency` An object with currency info.
  
    - `code` The [ISO 4217 currency codes](http://en.wikipedia.org/wiki/ISO_4217)
    - `name` The currency name
    - `symbol` The currency symbol
  * `languages` An array of [ISO 639-2](http://en.wikipedia.org/wiki/ISO_639-2) codes for languages.
  * `countryCallingCodes` The international call prefixes for this country.
  * `emoji` The emoji of country's flag.

## Installation

```bash
$ npm i @siamf/iso3166
```
```bash
import { getCountryList } from "@siamf/iso3166";
or
const { getCountryList } = require("@siamf/iso3166")
```

Example

```bash
console.log(getCountryList()); //Returns all country list
```

## Methods
### getCurrency(countryCode)
Returns the country's currency info by providing country code.

Example
```bash
import { getCurrency, GetCurrencyTypes } from "@siamf/iso3166";

const currencyInfo: GetCurrencyTypes = getCurrency("BD"); // Here country code can be isoAlpha2 or isoAlpha3

console.log(currencyInfo)
```
Return values-
* `name` currency name
* `code` currency code
* `symbol` currency symbol

### getCallingCode(countryCode)
Returns the country's calling code. It returns an array of string.

Example
```bash
import { getCallingCode, GetCallingCodeTypes } from "@siamf/iso3166";

const dialingCode: GetCallingCodeTypes = getCallingCode("BD")

console.log(dialingCode) // Give the country code(isoAlpha2 or isoAlpha3)
//{
  code: "880",
  format: "+880",
  flag: "" //Flagmedia flag URL
}
```
### getLanguages(countryCode)
Returns the country's languages. It returns an array of string;

Example
```bash
import { getLanguages } from "@siamf/iso3166";

console.log(getLanguages("BD")) // Give the country code(isoAlpha2 or isoAlpha3)
//["ben"]
```

### getFlagBase64(countryCode)
Returns the country's flag image as base64 data

Example
```bash
import { getFlagBase64 } from "@siamf/iso3166";

const flag = getFlagBase64("BD") // Give the country code(isoAlpha2 or isoAlpha3)

//<img src=`data:image/png;base64, ${flag}`/>
```

### lookup(query)
You can search and find any country's data by any parameter, like-
* by `name`: You can search and find data by country name
* by `countryCode`: You can search and find data by country code
* by `callingCode`: You can search and find data by country calling code
* by `currencyName`: You can search and find data by country currency name
* by `currencyCode`: You can search and find data by country currency code
* by `currencySymbol`: You can search and find data by country currency symbol
* by `isoNumeric`: You can search and find data by country iso numeric

Example
```bash
import { lookup, CountryDataTypes } from "@siamf/iso3166";

const data: CountryDataTypes = lookup({name: "Bangladesh"})
const data: CountryDataTypes = lookup({countryCode: "BD"})
const data: CountryDataTypes = lookup({callingCode: "+880"})
const data: CountryDataTypes = lookup({currencyName: "taka"})
const data: CountryDataTypes = lookup({currencyCode: "BDT"})
const data: CountryDataTypes = lookup({currencySymbol: "৳"})
```

### removeDialCode()
You can remove dial code from a phone number and get a string value.

Example
```bash
import { removeDialCode } from "@siamf/iso3166";

const phone = removeDialCode("+8801611994404")

//undefined or
//01611994403
```

## Issues or correction
If you face any issues to any function or see any wrong information about country, please let me know.

## Connect with me
<div style="display: flex; align-items: center; gap: 3px;">
<a href="https://wa.me/8801611994403"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/whatsapp.png" width="40" height="40"></a>
<a href="https://siamahnaf.com/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/web.png" width="40" height="40"></a>
<a href="https://www.linkedin.com/in/siamahnaf/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/linkedin.png" width="40" height="40"></a>
<a href="https://x.com/siamahnaf198" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/x.png" width="40" height="40"></a>
<a href="https://www.facebook.com/siamahnaf198/" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/facebook.png" width="40" height="40"></a>
<a href="https://t.me/siamahnaf198" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/telegram.png" width="40" height="40"></a>
<a href="https://www.npmjs.com/~siamahnaf" style="margin-right: 8px"><img src="https://raw.githubusercontent.com/siamahnaf/assets-kit/main/icons/npm.png" width="40" height="40"></a>
</div>