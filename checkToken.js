const jwt = require('jsonwebtoken')
function verifyTokenWithKey(token) {
    try {
        const data = jwt.verify(token, `-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt3t6t6Y33EotrpUqVOCa
pq3nexkWXFBko+kcuAiMpaCcDiXCWso3DivXNjXbJ5YmBQvdOY7LZliDy3Fq9p9K
9X3rzVyGyJgHnqszFDP52ZrHHhZMqFtRJrjI8YgxKzoXBNaRsfbPzjhfMmFT2fOG
V3sgSyFDM5w27TiG6oXaAAtL5heHLoMqu4LaqS8LxRw8s+ZfnsejW7kQ/m8zVEkw
PW686Qr/veEz4UY246gM9iMeuyGMiKwZ4qt+Te+VS+/4NprZPHM0yjhtSGyyWlC7
UuooiOSdEdgSkUNdBhTJDBmiw3FPAuAlUlb9roHHVC1mgCQCEcep0FNcY58kau7v
uQIDAQAB\n-----END PUBLIC KEY-----`, {
            alg: 'RS256', type: 'JWT'
        })
        return {data}
    } catch (e) {
        if (e.name && e.name.includes('TokenExpiredError')) {
            // const data = decodeToken(token)
            // if (((Math.floor(Date.now() / 1000) - data.iat) / 3600) < 24) {
            //     return {data}
            // }
        }
        return {error: e}
    }
}

// const a = verifyTokenWithKey('eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmR2g3cld6eVE1VjZlaHFRbndwcFh6MzRLQU50WXB3LXhEY0FYY190a0Q4In0.eyJleHAiOjE3MDA3OTg0NzgsImlhdCI6MTY5OTkzNDQ3OCwiYXV0aF90aW1lIjoxNjk5OTM0NDc4LCJqdGkiOiIxMjMxYzA1OS03YTQzLTQyNjMtYTUxOS1lNmNiOWQzNGIzMTciLCJpc3MiOiJodHRwczovL2Rldi1zc28tYXBpLmNhcnBsYS52bi9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjQ2YjViNWRkLTY2OGMtNDVmOC05YzUxLTQxZDEwMGY2YTJmZiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImNhcnBsYS1iY2MtZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6ImVjNjE0NDBmLTYwZTktNGI0YS1hMWUwLTlhYzdlNjQwZTRlOCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiZWM2MTQ0MGYtNjBlOS00YjRhLWExZTAtOWFjN2U2NDBlNGU4IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyX2lkIjoiNDZiNWI1ZGQtNjY4Yy00NWY4LTljNTEtNDFkMTAwZjZhMmZmIiwibmFtZSI6IlBo4bqhbSDEkOG7qWMgUXXDvSIsInByZWZlcnJlZF91c2VybmFtZSI6InF1eXBkQGNhcnBsYS52biIsImdpdmVuX25hbWUiOiJQaOG6oW0gxJDhu6ljIFF1w70iLCJlbWFpbCI6InF1eXBkQGNhcnBsYS52biJ9.BvYt70AOCTikabU63BHZcnCxJxAf15hwxQ2ToQKk5aNPQ53lC116nrvttEkxoa2dRbBi8U_0lJYpfgi6GpM8KSRIj48VyrImRfSiRf4NmRbwNW2t7Kwy7WTY2vp7PqdXLEIxHK0yzDOWMyP6LIK1fzg_093p1HzA6IUmo71y2gZIWwoMqZUlecH3_iyXvmocsqPn6mEIyJoaNpnavWPMUE5UKgj5KOMEt068VJHd-RhqNLqaNa0HesbQCYXuNscOhpc5xADvwfkGlo3bhI3dk8hlkbwMaSt8W23wDXO7az9iRpk_cDDDXPoJSZvgnPDc9rV1cWqpaeXtSiqJGBClRw')
// console.log(a)
const b = verifyTokenWithKey('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDEzNTEzMDcsImV4cCI6MTcwMzk0MzMwNywidG9rZW4iOiJKRXVnNUhiN0tHSkFZZmhId3hidlB6TkQiLCJ1c2VySWQiOjI3LCJ1c2VybmFtZSI6IjhkZmU5MTc0ZGZmOTY3MTE4N2IyY2Q4NzJhZGM1Yzg1XzNiNjZmNThlLTI4YTAtNGMzMC1hOTBjLTNhZDk5ODJjZTE3ZiJ9.Z4mNIhGAkLKtgpV3AofdRJ1MxCfJQeXNQdCeEhakJUuz_bHLNNMcKgbpkHlXwrlAzEc6ctEF2hkr_N0Vd473ghaQkxuW1uHK5XwzUuPihvZqKrOCoke8DREoeC0gKJAyqPsDJvzBBGj48UqRE0Wdzk1U_roCKouGP2GOeOB1OTlR3tMPBdzecZjeEu69raCqCpPkQvxviUFxoeDqg3Rb53IUx2N1vwlZkNCfamIF5a2ZwNApwggOUtVUHwDqGTsGVe6vcJWCc_UW9KiB_0VHuAOSbzzjJgoyKjrwj40UBnQnDUgRv21Dy2b_8dTH2IeXbe6Bx7mJmH8_wYQdqaFMkA')
console.log(b)
