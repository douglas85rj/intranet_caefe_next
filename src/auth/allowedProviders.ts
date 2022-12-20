export type AllowedProvider =
  typeof allowedProviders[keyof typeof allowedProviders];

export const allowedProviders = {
  credentials: "credentials",
  
} as const;

export const allowedProvidersList: string[] = Object.values(allowedProviders);
