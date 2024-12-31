export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-29'
  
export const token =
  process.env.NEXT_PUBLIC_SANITY_TOKEN || 'skzuFp70Ol2AzxULIQJkcPI8d29YK1k6IcDwoaGnVWi0GEoUxUJCA8MoZzJBhCrL3Ks8b1CujT21UjXx5GEn7Lf99U7tTZGNio61QG1dNHxh8VzxMpfhofkQm4d4KSyHDl0mEBkFozqmQy9FNZNws3iKya1LNGUPPEeAHX1z7cOZhLgP0fvp'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
