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
- [AzureAD](https://authjs.dev/reference/core/providers/azure-ad): `AZURE_AD_CLIENT_ID` & `AZURE_AD_CLIENT_SECRET`
- [AzureAD B2C](https://authjs.dev/reference/core/providers/azure-ad-b2c): `AZURE_AD_B2C_CLIENT_ID`, `AZURE_AD_B2C_CLIENT_SECRET` & `AZURE_AD_B2C_ISSUER`
- [Azure DevOps](https://authjs.dev/reference/core/providers/azure-devops): `AZURE_DEVOPS_APP_ID`, `AZURE_DEVOPS_CLIENT_SECRET` & `AZURE_DEVOPS_SCOPE`
- [BattleNet](https://authjs.dev/reference/core/providers/battlenet): `BATTLENET_CLIENT_ID` & `BATTLENET_CLIENT_SECRET`
- [BeyondIdentity](https://authjs.dev/reference/core/providers/beyondidentity): `BEYOND_IDENTITY_CLIENT_ID`, `BEYOND_IDENTITY_CLIENT_SECRET` & `BEYOND_IDENTITY_ISSUER`
- [Box](https://authjs.dev/reference/core/providers/box): `BOX_CLIENT_ID` & `BOX_CLIENT_SECRET`
- [BoxyHQ](https://authjs.dev/reference/core/providers/boxyhq-saml): `BOXYHQ_SAML_CLIENT_ID`, `BOXYHQ_SAML_CLIENT_SECRET` & `BOXYHQ_SAML_ISSUER`
- [Bungie](https://authjs.dev/reference/core/providers/bungie): `BUNGIE_CLIENT_ID`, `BUNGIE_CLIENT_SECRET` & `BUNGIE_API_KEY`
- [ClickUp](https://authjs.dev/reference/core/providers/click-up): `CLICKUP_CLIENT_ID` & `CLICKUP_CLIENT_SECRET`
- [Cognito](https://authjs.dev/reference/core/providers/cognito): `COGNITO_CLIENT_ID`, `COGNITO_CLIENT_SECRET` & `COGNITO_ISSUER`
- [Coinbase](https://authjs.dev/reference/core/providers/coinbase): `COINBASE_CLIENT_ID` & `COINBASE_CLIENT_SECRET`
- [Descope](https://authjs.dev/reference/core/providers/descope): `DESCOPE_ID` & `DESCOPE_SECRET`
- [Discord](https://authjs.dev/reference/core/providers/discord): `DISCORD_CLIENT_ID` & `DISCORD_CLIENT_SECRET`
- [Dribbble](https://authjs.dev/reference/core/providers/dribbble): `DRIBBBLE_CLIENT_ID` & `DRIBBBLE_CLIENT_SECRET`
- [Dropbox](https://authjs.dev/reference/core/providers/dropbox): `DROPBOX_CLIENT_ID` & `DROPBOX_CLIENT_SECRET`
- [DuendeIdentityServer6](https://authjs.dev/reference/core/providers/duende-identity-server6): `DIS6_CLIENT_ID`, `DIS6_CLIENT_SECRET` & `DIS6_ISSUER`
- [Email](https://authjs.dev/reference/core/providers/email): `EMAIL_SERVER` & `EMAIL_FROM`
- [EveOnline](https://authjs.dev/reference/core/providers/eveonline): `EVEONLINE_CLIENT_ID` & `EVEONLINE_CLIENT_SECRET`
- [Facebook](https://authjs.dev/reference/core/providers/facebook): `FACEBOOK_CLIENT_ID` & `FACEBOOK_CLIENT_SECRET`
- [FACEIT](https://authjs.dev/reference/core/providers/faceit): `FACEIT_CLIENT_ID` & `FACEIT_CLIENT_SECRET`
- [FourSquare](https://authjs.dev/reference/core/providers/foursquare): `FOURSQUARE_CLIENT_ID` & `FOURSQUARE_CLIENT_SECRET`
- [FreshBooks](https://authjs.dev/reference/core/providers/freshbooks): `FRESHBOOKS_CLIENT_ID` & `FRESHBOOKS_CLIENT_SECRET`
- [FusionAuth](https://authjs.dev/reference/core/providers/fusionauth): `FUSIONAUTH_CLIENT_ID`, `FUSIONAUTH_CLIENT_SECRET`, `FUSIONAUTH_TENANT_ID` & `FUSIONAUTH_ISSUER`
- [GitHub](https://authjs.dev/reference/core/providers/github): `GITHUB_ID` & `GITHUB_SECRET`
- [GitLab](https://authjs.dev/reference/core/providers/gitlab): `GITLAB_CLIENT_ID` & `GITLAB_CLIENT_SECRET`
- [Google](https://authjs.dev/reference/core/providers/google): `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`
- [HubSpot](https://authjs.dev/reference/core/providers/hubspot): `HUBSPOT_CLIENT_ID` & `HUBSPOT_CLIENT_SECRET`
- [IdentityServer4](https://authjs.dev/reference/core/providers/identity-server4): `IDENTITY_SERVER4_CLIENT_ID`, `IDENTITY_SERVER4_CLIENT_SECRET` & `IDENTITY_SERVER4_ISSUER`
- [Instagram](https://authjs.dev/reference/core/providers/instagram): `INSTAGRAM_CLIENT_ID` & `INSTAGRAM_CLIENT_SECRET`
- [Kakao](https://authjs.dev/reference/core/providers/kakao): `KAKAO_CLIENT_ID` & `KAKAO_CLIENT_SECRET`
- [Keycloak](https://authjs.dev/reference/core/providers/keycloak): `KEYCLOAK_CLIENT_ID`, `KEYCLOAK_CLIENT_SECRET` & `KEYCLOAK_ISSUER`
- [LINE](https://authjs.dev/reference/core/providers/line): `LINE_CLIENT_ID` & `LINE_CLIENT_SECRET`
- [LinkedIn](https://authjs.dev/reference/core/providers/linkedin): `LINKEDIN_CLIENT_ID` & `LINKEDIN_CLIENT_SECRET`
- [Mailchimp](https://authjs.dev/reference/core/providers/mailchimp): `MAILCHIMP_CLIENT_ID` & `MAILCHIMP_CLIENT_SECRET`
- [Mailru](https://authjs.dev/reference/core/providers/mailru): `MAILRU_CLIENT_ID` & `MAILRU_CLIENT_SECRET`
- [Mastodon](https://authjs.dev/reference/core/providers/mastodon): `MASTODON_CLIENT_ID`, `MASTODON_CLIENT_SECRET` & `MASTODON_ISSUER`
- [Mattermost](https://authjs.dev/reference/core/providers/mattermost): `MATTERMOST_CLIENT_ID`, `MATTERMOST_CLIENT_SECRET` & `MATTERMOST_ISSUER`
- [Medium](https://authjs.dev/reference/core/providers/medium): `MEDIUM_CLIENT_ID` & `MEDIUM_CLIENT_SECRET`
[Naver](https://authjs.dev/reference/core/providers/naver): `NAVER_CLIENT_ID` & `NAVER_CLIENT_SECRET`
[Netlify](https://authjs.dev/reference/core/providers/netlify): `NETLIFY_CLIENT_ID` & `NETLIFY_CLIENT_SECRET`
[Notion](https://authjs.dev/reference/core/providers/notion): `NOTION_CLIENT_ID`, `NOTION_CLIENT_SECRET` & `NOTION_CLIENT_REDIRECT_URI`

The aim is to support all providers! Feel free to open a PR if anything is missing.

## License

MIT
