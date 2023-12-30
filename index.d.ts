import type { Provider } from '@auth/core/providers';

export const providers: Provider[];

type ProviderOptions<P> = P extends (options: infer O) => any ? O : never;

declare function register<P extends (options: any) => Provider>(
    provider: P,
    options: ProviderOptions<P>,
): void;

declare global {
    const process: { env: Record<string, string | undefined> };
}
