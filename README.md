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
- [Naver](https://authjs.dev/reference/core/providers/naver): `NAVER_CLIENT_ID` & `NAVER_CLIENT_SECRET`
- [Netlify](https://authjs.dev/reference/core/providers/netlify): `NETLIFY_CLIENT_ID` & `NETLIFY_CLIENT_SECRET`
- [Notion](https://authjs.dev/reference/core/providers/notion): `NOTION_CLIENT_ID`, `NOTION_CLIENT_SECRET` & `NOTION_CLIENT_REDIRECT_URI`
- [Okta](https://authjs.dev/reference/core/providers/okta): `OKTA_CLIENT_ID`, `OKTA_CLIENT_SECRET` & `OKTA_ISSUER`
- [OneLogin](https://authjs.dev/reference/core/providers/onelogin): `ONELOGIN_CLIENT_ID` & `ONELOGIN_CLIENT_SECRET`
- [Osso](https://authjs.dev/reference/core/providers/osso): `OSSO_CLIENT_ID`, `OSSO_CLIENT_SECRET` & `OSSO_ISSUER`
- [Osu](https://authjs.dev/reference/core/providers/osu): `OSU_CLIENT_ID` & `OSU_CLIENT_SECRET`
- [Passage](https://authjs.dev/reference/core/providers/passage): `PASSAGE_ID`, `PASSAGE_SECRET` & `PASSAGE_ISSUER`
- [Patreon](https://authjs.dev/reference/core/providers/patreon): `PATREON_CLIENT_ID` & `PATREON_CLIENT_SECRET`
- [Pinterest](https://authjs.dev/reference/core/providers/pinterest): `PINTEREST_CLIENT_ID` & `PINTEREST_CLIENT_SECRET`
- [Pipedrive](https://authjs.dev/reference/core/providers/pipedrive): `PIPEDRIVE_CLIENT_ID` & `PIPEDRIVE_CLIENT_SECRET`
- [Reddit](https://authjs.dev/reference/core/providers/reddit): `REDDIT_CLIENT_ID` & `REDDIT_CLIENT_SECRET`
- [SaleForce](https://authjs.dev/reference/core/providers/salesforce): `SALEFORCE_CLIENT_ID` & `SALEFORCE_CLIENT_SECRET`
- [Slack](https://authjs.dev/reference/core/providers/slack): `SLACK_CLIENT_ID` & `SLACK_CLIENT_SECRET`
- [Spotify](https://authjs.dev/reference/core/providers/spotify): `SPOTIFY_CLIENT_ID` & `SPOTIFY_CLIENT_SECRET`
- [Strava](https://authjs.dev/reference/core/providers/strava): `STRAVA_CLIENT_ID` & `STRAVA_CLIENT_SECRET`
- [Tiktok](https://authjs.dev/reference/core/providers/tiktok): `TIKTOK_CLIENT_KEY` & `TIKTOK_CLIENT_SECRET`
- [Todoist](https://authjs.dev/reference/core/providers/todoist): `TODOIST_CLIENT_ID` & `TODOIST_CLIENT_SECRET`
- [Trakt](https://authjs.dev/reference/core/providers/trakt): `TRAKT_CLIENT_ID` & `TRAKT_CLIENT_SECRET`
- [Twitch](https://authjs.dev/reference/core/providers/twitch): `TWITCH_CLIENT_ID` & `TWITCH_CLIENT_SECRET`
- [Twitter](https://authjs.dev/reference/core/providers/twitter): `TWITTER_CLIENT_ID` & `TWITTER_CLIENT_SECRET`
- [UnitedEffects](https://authjs.dev/reference/core/providers/united-effects): `UE_CLIENT_ID` & `UE_CLIENT_SECRET`
- [VK](https://authjs.dev/reference/core/providers/vk): `VK_CLIENT_ID` & `VK_CLIENT_SECRET`
- [Wikimedia](https://authjs.dev/reference/core/providers/wikimedia): `WIKIMEDIA_CLIENT_ID` & `WIKIMEDIA_CLIENT_SECRET`
- [WordPress](https://authjs.dev/reference/core/providers/wordpress): `WORKPRESS_CLIENT_ID` & `WORKPRESS_CLIENT_SECRET`
- [WorkOS](https://authjs.dev/reference/core/providers/workos): `WORKOS_CLIENT_ID`, `WORKOS_CLIENT_SECRET` & `WORKOS_ISSUER`
- [Yandex](https://authjs.dev/reference/core/providers/yandex): `YANDEX_CLIENT_ID` & `YANDEX_CLIENT_SECRET`
- [ZITADEL](https://authjs.dev/reference/core/providers/zitadel): `ZITADEL_CLIENT_ID` & `ZITADEL_CLIENT_SECRET`
- [ZOHO](https://authjs.dev/reference/core/providers/zoho): `ZOHO_CLIENT_ID` & `ZOHO_CLIENT_SECRET`
- [Zoom](https://authjs.dev/reference/core/providers/zoom): `ZOOM_CLIENT_ID` & `ZOOM_CLIENT_SECRET`

The aim is to support all providers.
Feel free to open a PR if anything is missing.

## License

MIT
