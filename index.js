export const providers = []

if (process.env.42_SCHOOL_CLIENT_ID) {
  const { default: 42-school } = await import('@auth/core/providers/42-school')

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
  const { default: asgardeo } = await import('@auth/core/providers/asgardeo')

  register(AsgardeoProvider, {
    clientId: process.env.ASGARDEO_CLIENT_ID,
    clientSecret: process.env.ASGARDEO_CLIENT_SECRET,
  })
}

if (process.env.ATLASSIAN_ID) {
  const { default: atlassian } = await import('@auth/core/providers/atlassian')

  register(AtlassianProvider, {
    clientId: process.env.ATLASSIAN_ID,
    clientSecret: process.env.ATLASSIAN_SECRET,
  })
}

if (process.env.AUTH0_ID) {
  const { default: auth0 } = await import('@auth/core/providers/auth0')

  register(Auth0Provider, {
    clientId: process.env.AUTH0_ID,
    clientSecret: process.env.AUTH0_SECRET,
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

