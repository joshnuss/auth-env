# authjs-env

Load [Auth.js](https://authjs.dev) providers dynamically, by detecting environment variables.

## Usage

Install the package:

```sh
pnpm install -D authjs-env
```

Define env vars in your `.env` or in your hosting settings.

For example, for Github, define a `GITHUB_ID` & `GITHUB_SECRET`.

```
# in .env
GITHUB_ID=...
GITHUB_SECRET=...
```

### SvelteKit

Import `providers` in `src/hooks.server.js`:

```javascript
import { SvelteKitAuth } from "@auth/sveltekit"
import { providers } from "authjs-env"

export const handle = SvelteKitAuth({ providers })
```

### Next.js

Import `providers` in `auth.ts`:

```javascript
import NextAuth from "next-auth"
import { providers } from "authjs-env"

export const { handlers, auth } = NextAuth({ providers })
```

## Supported Providers

- [42-school](https://authjs.dev/reference/core/providers/42-school): `42_SCHOOL_CLIENT_ID` & `42_SCHOOL_CLIENT_SECRET`
- [Apple](https://authjs.dev/reference/core/providers/apple)
- [Asgardeo](https://authjs.dev/reference/core/providers/asgardeo): `ASGARDEO_CLIENT_ID` & `ASGARDEO_CLIENT_SECRET`
- [Atlassian](https://authjs.dev/reference/core/providers/atlassian): `ATLASSIAN_ID` & `ATLASSIAN_SECRET`
- [Auth0](https://authjs.dev/reference/core/providers/auth0): `AUTH0_ID` & `AUTH0_SECRET`
- [Authentik](https://authjs.dev/reference/core/providers/authentik): `AUTHENTIK_CLIENT_ID` & `AUTHENTIK_CLIENT_ID`
- [AzureAd](https://authjs.dev/reference/core/providers/azure-ad): `AZURE_AD_CLIENT_ID` & `AZURE_AD_CLIENT_ID`
- [Google](https://authjs.dev/reference/core/providers/google)
- [GitHub](https://authjs.dev/reference/core/providers/github)

The aim is to support all providers! Please open a PR if the one you want is missing.

## License

MIT
