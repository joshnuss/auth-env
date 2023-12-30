export const providers = []

if (process.env['42_SCHOOL_CLIENT_ID']) {
  const { default: Oauth42School } = await import('@auth/core/providers/42-school')

  register(Oauth42School, {
    clientId: process.env['42_SCHOOL_CLIENT_ID'],
    clientSecret: process.env['42_SCHOOL_CLIENT_SECRET']
  })
}

if (process.env.APPLE_ID) {
  const { default: Apple } = await import('@auth/core/providers/apple')

  register(Apple, {
    clientId: process.env.APPLE_ID,
    clientSecret: process.env.APPLE_SECRET
  })
}

if (process.env.ASGARDEO_CLIENT_ID) {
  const { default: Asgardeo } = await import('@auth/core/providers/asgardeo')

  register(Asgardeo, {
    clientId: process.env.ASGARDEO_CLIENT_ID,
    clientSecret: process.env.ASGARDEO_CLIENT_SECRET,
  })
}

if (process.env.ATLASSIAN_ID) {
  const { default: Atlassian } = await import('@auth/core/providers/atlassian')

  register(Atlassian, {
    clientId: process.env.ATLASSIAN_ID,
    clientSecret: process.env.ATLASSIAN_SECRET,
  })
}

if (process.env.AUTH0_ID) {
  const { default: Auth0 } = await import('@auth/core/providers/auth0')

  register(Auth0, {
    clientId: process.env.AUTH0_ID,
    clientSecret: process.env.AUTH0_SECRET,
  })
}

if (process.env.AUTHENTIK_CLIENT_ID) {
  const { default: Authentik } = await import('@auth/core/providers/authentik')

  register(Authentik, {
    clientId: process.env.AUTHENTIK_CLIENT_ID,
    clientSecret: process.env.AUTHENTIK_CLIENT_SECRET
  })
}

if (process.env.AZURE_AD_CLIENT_ID) {
  const { default: AzureAd } = await import('@auth/core/providers/azure-ad')

  register(AzureAd, {
    clientId: process.env.AZURE_AD_CLIENT_ID,
    clientSecret: process.env.AZURE_AD_CLIENT_SECRET
  })
}

if (process.env.AZURE_AD_B2C_CLIENT_ID) {
  const { default: AzureADB2C } = await import('@auth/core/providers/azure-ad-b2c')

  register(AzureADB2C, {
    clientId: process.env.AZURE_AD_B2C_CLIENT_ID,
    clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET,
    issuer: process.env.AZURE_AD_B2C_ISSUER
  })
}

if (process.env.AZURE_DEVOPS_APP_ID) {
  const { default: AzureDevOpsProvider } = await import('@auth/core/providers/azure-devops')

  register(AzureDevOpsProvider, {
    clientId: process.env.AZURE_DEVOPS_APP_ID,
    clientSecret: process.env.AZURE_DEVOPS_CLIENT_SECRET,
    scope: process.env.AZURE_DEVOPS_SCOPE
  })
}

if (process.env.BATTLENET_CLIENT_ID) {
  const { default: BattleNet } = await import('@auth/core/providers/battlenet')

  register(BattleNet, {
    clientId: process.env.BATTLENET_CLIENT_ID,
    clientSecret: process.env.BATTLENET_CLIENT_SECRET
  })
}

if (process.env.BEYOND_IDENTITY_CLIENT_ID) {
  const { default: BeyondIdentity } = await import('@auth/core/providers/beyondidentity')

  register(BeyondIdentity, {
    clientId: process.env.BEYOND_IDENTITY_CLIENT_ID,
    clientSecret: process.env.BEYOND_IDENTITY_CLIENT_SECRET,
    issuer: process.env.BEYOND_IDENTITY_ISSUER
  })
}

if (process.env.BOX_CLIENT_ID) {
  const { default: Box } = await import('@auth/core/providers/box')

  register(Box, {
    clientId: process.env.BOX_CLIENT_ID,
    clientSecret: process.env.BOX_CLIENT_SECRET
  })
}

if (process.env.BOXYHQ_SAML_CLIENT_ID) {
  const { default: BoxyHQ } = await import('@auth/core/providers/boxyhq-saml')

  register(BoxyHQ, {
    clientId: process.env.BOXYHQ_SAML_CLIENT_ID,
    clientSecret: process.env.BOXYHQ_SAML_CLIENT_SECRET,
    issuer: process.env.BOXYHQ_SAML_ISSUER
  })
}

if (process.env.BUNGIE_CLIENT_ID) {
  const { default: Bungie } = await import('@auth/core/providers/bungie')

  register(Bungie, {
    clientId: process.env.BUNGIE_CLIENT_ID,
    clientSecret: process.env.BUNGIE_CLIENT_SECRET,
    headers: { "X-API-Key": process.env.BUNGIE_API_KEY }
  })
}

if (process.env.CLICKUP_CLIENT_ID) {
  const { default: ClickUp } = await import('@auth/core/providers/click-up')

  register(ClickUp, {
    clientId: process.env.CLICKUP_CLIENT_ID,
    clientSecret: process.env.CLICKUP_CLIENT_SECRET
  })
}

if (process.env.COGNITO_CLIENT_ID) {
  const { default: Cognito } = await import('@auth/core/providers/cognito')

  register(Cognito, {
    clientId: process.env.COGNITO_CLIENT_ID,
    clientSecret: process.env.COGNITO_CLIENT_SECRET,
    issuer: process.env.COGNITO_ISSUER
  })
}

if (process.env.COINBASE_CLIENT_ID) {
  const { default: Coinbase } = await import('@auth/core/providers/coinbase')

  register(Coinbase, {
    clientId: process.env.COINBASE_CLIENT_ID,
    clientSecret: process.env.COINBASE_CLIENT_SECRET
  })
}

if (process.env.DESCOPE_ID) {
  const { default: Descope } = await import('@auth/core/providers/descope')

  register(Descope, {
    clientId: process.env.DESCOPE_ID,
    clientSecret: process.env.DESCOPE_SECRET
  })
}

if (process.env.DISCORD_CLIENT_ID) {
  const { default: Discord } = await import('@auth/core/providers/discord')

  register(Discord, {
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET
  })
}

if (process.env.DRIBBBLE_CLIENT_ID) {
  const { default: Dribbble } = await import('@auth/core/providers/dribbble')

  register(Dribbble, {
    clientId: process.env.DRIBBBLE_CLIENT_ID,
    clientSecret: process.env.DRIBBBLE_CLIENT_SECRET
  })
}

if (process.env.DROPBOX_CLIENT_ID) {
  const { default: Dropbox } = await import('@auth/core/providers/dropbox')

  register(Dropbox, {
    clientId: process.env.DROPBOX_CLIENT_ID,
    clientSecret: process.env.DROPBOX_CLIENT_SECRET
  })
}

if (process.env.DIS6_CLIENT_ID) {
  const { default: DuendeIdentityServer6 } = await import('@auth/core/providers/duende-identity-server6')

  register(DuendeIdentityServer6, {
    clientId: process.env.DIS6_CLIENT_ID,
    clientSecret: process.env.DIS6_CLIENT_SECRET,
    issuer: process.env.DIS6_ISSUER
  })
}

if (process.env.EMAIL_SERVER) {
  const { default: EmailProvider } = await import('@auth/core/providers/email')

  register(EmailProvider, {
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM
  })
}

if (process.env.EVEONLINE_CLIENT_ID) {
  const { default: EveOnline } = await import('@auth/core/providers/eveonline')

  register(EveOnline, {
    clientId: process.env.EVEONLINE_CLIENT_ID,
    clientSecret: process.env.EVEONLINE_CLIENT_SECRET
  })
}

if (process.env.FACEBOOK_CLIENT_ID) {
  const { default: Facebook } = await import('@auth/core/providers/facebook')

  register(Facebook, {
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  })
}

if (process.env.FACEIT_CLIENT_ID) {
  const { default: FACEIT } = await import('@auth/core/providers/faceit')

  register(FACEIT, {
    clientId: process.env.FACEIT_CLIENT_ID,
    clientSecret: process.env.FACEIT_CLIENT_SECRET
  })
}

if (process.env.FOURSQUARE_CLIENT_ID) {
  const { default: FourSquare } = await import('@auth/core/providers/foursquare')

  register(FourSquare, {
    clientId: process.env.FOURSQUARE_CLIENT_ID,
    clientSecret: process.env.FOURSQUARE_CLIENT_SECRET
  })
}

if (process.env.FRESHBOOKS_CLIENT_ID) {
  const { default: FreshBooks } = await import('@auth/core/providers/freshbooks')

  register(FreshBooks, {
    clientId: process.env.FRESHBOOKS_CLIENT_ID,
    clientSecret: process.env.FRESHBOOKS_CLIENT_SECRET
  })
}

if (process.env.FUSIONAUTH_CLIENT_ID) {
  const { default: FusionAuth } = await import('@auth/core/providers/fusionauth')

  register(FusionAuth, {
    clientId: process.env.FUSIONAUTH_CLIENT_ID,
    clientSecret: process.env.FUSIONAUTH_CLIENT_SECRET,
    tenantId: process.env.FUSIONAUTH_TENANT_ID,
    issuer: process.env.FUSIONAUTH_ISSUER
  })
}

if (process.env.GITHUB_ID) {
  const { default: GitHub } = await import('@auth/core/providers/github')

  register(GitHub, {
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
}

if (process.env.GITLAB_CLIENT_ID) {
  const { default: GitLab } = await import('@auth/core/providers/gitlab')

  register(GitLab, {
    clientId: process.env.GITLAB_CLIENT_ID,
    clientSecret: process.env.GITLAB_CLIENT_SECRET
  })
}

if (process.env.GOOGLE_CLIENT_ID) {
  const { default: Google } = await import('@auth/core/providers/google')

  register(Google, {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
}

if (process.env.HUBSPOT_CLIENT_ID) {
  const { default: HubSpot } = await import('@auth/core/providers/hubspot')

  register(HubSpot, {
    clientId: process.env.HUBSPOT_CLIENT_ID,
    clientSecret: process.env.HUBSPOT_CLIENT_SECRET
  })
}

if (process.env.IDENTITY_SERVER4_CLIENT_ID) {
  const { default: IdentityServer4 } = await import('@auth/core/providers/identity-server4')

  register(IdentityServer4, {
    clientId: process.env.IDENTITY_SERVER4_CLIENT_ID,
    clientSecret: process.env.IDENTITY_SERVER4_CLIENT_SECRET,
    issuer: process.env.IDENTITY_SERVER4_ISSUER,
  })
}

if (process.env.INSTAGRAM_CLIENT_ID) {
  const { default: Instagram } = await import('@auth/core/providers/instagram')

  register(Instagram, {
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
  })
}

if (process.env.KAKAO_CLIENT_ID) {
  const { default: Kakao } = await import('@auth/core/providers/kakao')

  register(Kakao, {
    clientId: process.env.KAKAO_CLIENT_ID,
    clientSecret: process.env.KAKAO_CLIENT_SECRET
  })
}

if (process.env.KEYCLOAK_CLIENT_ID) {
  const { default: Keycloak } = await import('@auth/core/providers/keycloak')

  register(Keycloak, {
    clientId: process.env.KEYCLOAK_CLIENT_ID,
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
    issuer: process.env.KEYCLOAK_ISSUER
  })
}

if (process.env.LINE_CLIENT_ID) {
  const { default: LINE } = await import('@auth/core/providers/line')

  register(LINE, {
    clientId: process.env.LINE_CLIENT_ID,
    clientSecret: process.env.LINE_CLIENT_SECRET
  })
}

if (process.env.LINKEDIN_CLIENT_ID) {
  const { default: LinkedIn } = await import('@auth/core/providers/linkedin')

  register(LinkedIn, {
    clientId: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET
  })
}

if (process.env.MAILCHIMP_CLIENT_ID) {
  const { default: Mailchimp } = await import('@auth/core/providers/mailchimp')

  register(Mailchimp, {
    clientId: process.env.MAILCHIMP_CLIENT_ID,
    clientSecret: process.env.MAILCHIMP_CLIENT_SECRET
  })
}

if (process.env.MAILRU_CLIENT_ID) {
  const { default: Mailru } = await import('@auth/core/providers/mailru')

  register(Mailru, {
    clientId: process.env.MAILRU_CLIENT_ID,
    clientSecret: process.env.MAILRU_CLIENT_SECRET
  })
}

if (process.env.MASTODON_CLIENT_ID) {
  const { default: Mastodon } = await import('@auth/core/providers/mastodon')

  register(Mastodon, {
    clientId: process.env.MASTODON_CLIENT_ID,
    clientSecret: process.env.MASTODON_CLIENT_SECRET,
    issuer: process.env.MASTODON_ISSUER
  })
}

if (process.env.MATTERMOST_CLIENT_ID) {
  const { default: Mattermost } = await import('@auth/core/providers/mattermost')

  register(Mattermost, {
    clientId: process.env.MATTERMOST_CLIENT_ID,
    clientSecret: process.env.MATTERMOST_CLIENT_SECRET,
    issuer: process.env.MATTERMOST_ISSUER
  })
}

if (process.env.MEDIUM_CLIENT_ID) {
  const { default: Medium } = await import('@auth/core/providers/medium')

  register(Medium, {
    clientId: process.env.MEDIUM_CLIENT_ID,
    clientSecret: process.env.MEDIUM_CLIENT_SECRET
  })
}

if (process.env.NAVER_CLIENT_ID) {
  const { default: Naver } = await import('@auth/core/providers/naver')

  register(Naver, {
    clientId: process.env.NAVER_CLIENT_ID,
    clientSecret: process.env.NAVER_CLIENT_SECRET
  })
}

if (process.env.NETLIFY_CLIENT_ID) {
  const { default: Netlify } = await import('@auth/core/providers/netlify')

  register(Netlify, {
    clientId: process.env.NETLIFY_CLIENT_ID,
    clientSecret: process.env.NETLIFY_CLIENT_SECRET
  })
}

if (process.env.NOTION_CLIENT_ID) {
  const { default: Notion } = await import('@auth/core/providers/notion')

  register(Notion, {
    clientId: process.env.NOTION_CLIENT_ID,
    clientSecret: process.env.NOTION_CLIENT_SECRET,
    redirectUri: process.env.NOTION_CLIENT_REDIRECT_URI
  })
}

if (process.env.OKTA_CLIENT_ID) {
  const { default: Okta } = await import('@auth/core/providers/okta')

  register(Okta, {
    clientId: process.env.OKTA_CLIENT_ID,
    clientSecret: process.env.OKTA_CLIENT_SECRET,
    issuer: process.env.OKTA_ISSUER
  })
}

if (process.env.ONELOGIN_CLIENT_ID) {
  const { default: OneLogin } = await import('@auth/core/providers/onelogin')

  register(OneLogin, {
    clientId: process.env.ONELOGIN_CLIENT_ID,
    clientSecret: process.env.ONELOGIN_CLIENT_SECRET
  })
}

if (process.env.OSSO_CLIENT_ID) {
  const { default: Osso } = await import('@auth/core/providers/osso')

  register(Osso, {
    clientId: process.env.OSSO_CLIENT_ID,
    clientSecret: process.env.OSSO_CLIENT_SECRET,
    issuer: process.env.OSSO_ISSUER
  })
}

if (process.env.OSU_CLIENT_ID) {
  const { default: Osu } = await import('@auth/core/providers/osu')

  register(Osu, {
    clientId: process.env.OSU_CLIENT_ID,
    clientSecret: process.env.OSU_CLIENT_SECRET
  })
}

if (process.env.PASSAGE_ID) {
  const { default: Passage } = await import('@auth/core/providers/passage')

  register(Passage, {
    clientId: process.env.PASSAGE_ID,
    clientSecret: process.env.PASSAGE_SECRET,
    issuer: process.env.PASSAGE_ISSUER
  })
}

if (process.env.PATREON_CLIENT_ID) {
  const { default: Patreon } = await import('@auth/core/providers/patreon')

  register(Patreon, {
    clientId: process.env.PATREON_CLIENT_ID,
    clientSecret: process.env.PATREON_CLIENT_SECRET
  })
}

if (process.env.PINTEREST_CLIENT_ID) {
  const { default: Pinterest } = await import('@auth/core/providers/pinterest')

  register(Pinterest, {
    clientId: process.env.PINTEREST_CLIENT_ID,
    clientSecret: process.env.PINTEREST_CLIENT_SECRET
  })
}

if (process.env.PIPEDRIVE_CLIENT_ID) {
  const { default: Pipedrive } = await import('@auth/core/providers/pipedrive')

  register(Pipedrive, {
    clientId: process.env.PIPEDRIVE_CLIENT_ID,
    clientSecret: process.env.PIPEDRIVE_CLIENT_SECRET
  })
}

if (process.env.REDDIT_CLIENT_ID) {
  const { default: Reddit } = await import('@auth/core/providers/reddit')

  register(Reddit, {
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET
  })
}

if (process.env.SALEFORCE_CLIENT_ID) {
  const { default: SaleForce } = await import('@auth/core/providers/saleforce')

  register(SaleForce, {
    clientId: process.env.SALEFORCE_CLIENT_ID,
    clientSecret: process.env.SALEFORCE_CLIENT_SECRET
  })
}

if (process.env.SLACK_CLIENT_ID) {
  const { default: Slack } = await import('@auth/core/providers/slack')

  register(Slack, {
    clientId: process.env.SLACK_CLIENT_ID,
    clientSecret: process.env.SLACK_CLIENT_SECRET
  })
}

if (process.env.SPOTIFY_CLIENT_ID) {
  const { default: Spotify } = await import('@auth/core/providers/spotify')

  register(Spotify, {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET
  })
}

if (process.env.STRAVA_CLIENT_ID) {
  const { default: Strava } = await import('@auth/core/providers/strava')

  register(Strava, {
    clientId: process.env.STRAVA_CLIENT_ID,
    clientSecret: process.env.STRAVA_CLIENT_SECRET
  })
}

if (process.env.TIKTOK_CLIENT_KEY) {
  const { default: Tiktok } = await import('@auth/core/providers/tiktok')

  register(Tiktok, {
    clientId: process.env.TIKTOK_CLIENT_KEY,
    clientSecret: process.env.TIKTOK_CLIENT_SECRET
  })
}

if (process.env.TODOIST_CLIENT_ID) {
  const { default: Todoist } = await import('@auth/core/providers/todoist')

  register(Todoist, {
    clientId: process.env.TODOIST_CLIENT_ID,
    clientSecret: process.env.TODOIST_CLIENT_SECRET
  })
}

if (process.env.TRAKT_CLIENT_ID) {
  const { default: Trakt } = await import('@auth/core/providers/trakt')

  register(Trakt, {
    clientId: process.env.TRAKT_CLIENT_ID,
    clientSecret: process.env.TRAKT_CLIENT_SECRET
  })
}

if (process.env.TWITCH_CLIENT_ID) {
  const { default: Twitch } = await import('@auth/core/providers/twitch')

  register(Twitch, {
    clientId: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_CLIENT_SECRET
  })
}

if (process.env.TWITTER_CLIENT_ID) {
  const { default: Twitter } = await import('@auth/core/providers/twitter')

  register(Twitter, {
    clientId: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET
  })
}

if (process.env.UE_CLIENT_ID) {
  const { default: UnitedEffects } = await import('@auth/core/providers/united-effects')

  register(UnitedEffects, {
    clientId: process.env.UE_CLIENT_ID,
    clientSecret: process.env.UE_CLIENT_SECRET
  })
}

if (process.env.WIKIMEDIA_CLIENT_ID) {
  const { default: Wikimedia } = await import('@auth/core/providers/wikimedia')

  register(Wikimedia, {
    clientId: process.env.WIKIMEDIA_CLIENT_ID,
    clientSecret: process.env.WIKIMEDIA_CLIENT_SECRET
  })
}

if (process.env.VK_CLIENT_ID) {
  const { default: VK } = await import('@auth/core/providers/vk')

  register(VK, {
    clientId: process.env.VK_CLIENT_ID,
    clientSecret: process.env.VK_CLIENT_SECRET
  })
}

if (process.env.WORKPRESS_CLIENT_ID) {
  const { default: WordPress } = await import('@auth/core/providers/wordpress')

  register(WordPress, {
    clientId: process.env.WORKPRESS_CLIENT_ID,
    clientSecret: process.env.WORKPRESS_CLIENT_SECRET
  })
}

if (process.env.WORKOS_CLIENT_ID) {
  const { default: WorkOS } = await import('@auth/core/providers/workos')

  register(WorkOS, {
    clientId: process.env.WORKOS_CLIENT_ID,
    clientSecret: process.env.WORKOS_CLIENT_SECRET,
    issuer: process.env.WORKOS_ISSUER
  })
}

if (process.env.YANDEX_CLIENT_ID) {
  const { default: Yandex } = await import('@auth/core/providers/yandex')

  register(Yandex, {
    clientId: process.env.YANDEX_CLIENT_ID,
    clientSecret: process.env.YANDEX_CLIENT_SECRET
  })
}

if (process.env.ZITADEL_CLIENT_ID) {
  const { default: ZITADEL } = await import('@auth/core/providers/zitadel')

  register(ZITADEL, {
    clientId: process.env.ZITADEL_CLIENT_ID,
    clientSecret: process.env.ZITADEL_CLIENT_SECRET
  })
}

if (process.env.ZOHO_CLIENT_ID) {
  const { default: ZOHO } = await import('@auth/core/providers/zoho')

  register(ZOHO, {
    clientId: process.env.ZOHO_CLIENT_ID,
    clientSecret: process.env.ZOHO_CLIENT_SECRET
  })
}

if (process.env.ZOOM_CLIENT_ID) {
  const { default: Zoom } = await import('@auth/core/providers/zoom')

  register(Zoom, {
    clientId: process.env.ZOOM_CLIENT_ID,
    clientSecret: process.env.ZOOM_CLIENT_SECRET
  })
}

function register(provider, options) {
  providers.push(provider(options))
}

if (providers.length == 0) {
  throw new Error('No Auth.js providers configured.\n\nThis is happening because environment variables are missing.\n\nFor more information on configuring your provider, see: https://github.com/joshnuss/authjs-env#supported-providers')
}
