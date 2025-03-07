import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClerkClient } from '@clerk/backend';

export const CLERK_TOKEN_PROVIDER = "CLERK_CLIENT"

export const ClerkClientProvider: Provider = {
    provide: CLERK_TOKEN_PROVIDER,
    useFactory: (configService: ConfigService) => {
        return createClerkClient({
            publishableKey: configService.get('CLERK_PUBLISHABLE_KEY'),
            secretKey: configService.get('CLERK_SECRET_KEY'),
        })
    },
    inject: [ConfigService]
}