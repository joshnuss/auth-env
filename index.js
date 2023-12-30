export const providers = []

if (process.env.42_SCHOOL_CLIENT_ID) {
  const { default: 42School } = await import('@auth/core/providers/42-school')

  register(42School, {
    clientId: process.env.42_SCHOOL_CLIENT_ID,
    clientSecret: process.env.42_SCHOOL_CLIENT_SECRET
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
    clientSecret: process.env.AUTHENTIK_CLIENT_ID
  })
}

if (process.env.AZURE_AD_CLIENT_ID) {
  const { default: AzureAd } = await import('@auth/core/providers/azure-ad')

  register(AzureAd, {
    clientId: process.env.AZURE_AD_CLIENT_ID,
    clientSecret: process.env.AZURE_AD_CLIENT_ID
  })
}

if (process.env.GITHUB_ID) {
  const { default: GitHub } = await import('@auth/core/providers/github')

  register(GitHub, {
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
}

if (process.env.GOOGLE_CLIENT_ID) {
  const { default: Google } = await import('@auth/core/providers/google')

  register(Google, {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
}

function register(provider, options) {
  providers.push(provider(options))
}
