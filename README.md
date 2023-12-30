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
- [Apple](https://authjs.dev/reference/core/providers/apple): `APPLE_ID` & `APPLE_SECRET`
- [Asgardeo](https://authjs.dev/reference/core/providers/asgardeo): `ASGARDEO_CLIENT_ID` & `ASGARDEO_CLIENT_SECRET`
- [Atlassian](https://authjs.dev/reference/core/providers/atlassian): `ATLASSIAN_ID` & `ATLASSIAN_SECRET`
- [Auth0](https://authjs.dev/reference/core/providers/auth0): `AUTH0_ID` & `AUTH0_SECRET`
- [Authentik](https://authjs.dev/reference/core/providers/authentik): `AUTHENTIK_CLIENT_ID` & `AUTHENTIK_CLIENT_SECRET`
- [AzureAD](https://authjs.dev/reference/core/providers/azure-ad): `AZURE_AD_CLIENT_ID` & `AZURE_AD_CLIENT_ID`
- [AzureAD B2C](https://authjs.dev/reference/core/providers/azure-ad-b2c): `AZURE_AD_B2C_CLIENT_ID`, `AZURE_AD_B2C_CLIENT_SECRET` & `AZURE_AD_B2C_ISSUER`
- [Azure DevOps](https://authjs.dev/reference/core/providers/azure-devops): `AZURE_DEVOPS_APP_ID`, `AZURE_DEVOPS_CLIENT_SECRET` & `AZURE_DEVOPS_SCOPE`
- [BattleNet](https://authjs.dev/reference/core/providers/battlenet): `BATTLENET_CLIENT_ID` & `BATTLENET_CLIENT_ID`
- [BeyondIdentity](https://authjs.dev/reference/core/providers/beyondidentity): `BEYOND_IDENTITY_CLIENT_ID`, `BEYOND_IDENTITY_CLIENT_SECRET` & `BEYOND_IDENTITY_ISSUER`
- [Box](https://authjs.dev/reference/core/providers/box): `BOX_CLIENT_ID` & `BOX_CLIENT_ID`
- [BoxyHQ](https://authjs.dev/reference/core/providers/boxyhq-saml): `BOXYHQ_SAML_CLIENT_ID`, `BOXYHQ_SAML_CLIENT_SECRET` & `BOXYHQ_SAML_ISSUER`
- [Bungie](https://authjs.dev/reference/core/providers/bungie): `BUNGIE_CLIENT_ID`, `BUNGIE_CLIENT_SECRET` & `BUNGIE_API_KEY`
- [ClickUp](https://authjs.dev/reference/core/providers/click-up): `CLICKUP_CLIENT_ID` & `CLICKUP_CLIENT_ID`
- [Cognito](https://authjs.dev/reference/core/providers/cognito): `COGNITO_CLIENT_ID`, `COGNITO_CLIENT_SECRET` & `COGNITO_ISSUER`
- [Coinbase](https://authjs.dev/reference/core/providers/coinbase): `COINBASE_CLIENT_ID` & `COINBASE_CLIENT_SECRET`
- [Descope](https://authjs.dev/reference/core/providers/descope): `DESCOPE_ID` & `DESCOPE_SECRET`
- [Discord](https://authjs.dev/reference/core/providers/discord): `DISCORD_CLIENT_ID` & `DISCORD_CLIENT_SECRET`

- [Google](https://authjs.dev/reference/core/providers/google): `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`
- [GitHub](https://authjs.dev/reference/core/providers/github): `GITHUB_ID` & `GITHUB_SECRET`

The aim is to support all providers! Feel free to open a PR if anything is missing.

## License

MIT
