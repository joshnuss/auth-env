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

function register(provider, options) {
  providers.push(provider(options))
}

if (providers.length == 0) {
  throw new Error('No Auth.js providers configured.\n\nThis is happening because environment variables are missing.\n\nFor more information on configuring your provider, see: https://github.com/joshnuss/authjs-env?tab=readme-ov-file#supported-providers')
}
