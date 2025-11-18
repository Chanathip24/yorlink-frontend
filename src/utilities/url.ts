import { YORLINK_API_SHORTEN_URL } from '@/config'

/**
 * Returns the suffix URL for a given alias.
 *
 * @function getShortenSuffixUrl
 * @param {string} alias - The alias to get the suffix URL for.
 * @returns {string} The suffix URL for the given alias.
 */
export const getShortenSuffixUrl = (alias: string) => {
  return `shorten/${alias}`
}

/**
 * Returns the full URL for a given alias.
 *
 * @function getFullShortenUrl
 * @param {string} alias - The alias to get the full URL for.
 * @returns {string} The full URL for the given alias.
 */
export const getFullShortenUrl = (alias: string) => {
  return `${YORLINK_API_SHORTEN_URL}/${alias}`
}
