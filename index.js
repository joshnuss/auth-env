export const providers = []

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

if (process.env.APPLE_ID) {
  const { default: Apple } = await import('@auth/core/providers/apple')

  register(Apple, {
    clientId: process.env.APPLE_ID,
    clientSecret: process.env.APPLE_SECRET
  })
}

function register(provider, options) {
  providers.push(provider(options))
}

