import { Calendar, Link2, Lock, TimerOff } from 'lucide-react'
import { z } from 'zod'

import { SHORTURL_TYPE } from '@/enum'

export const urlTypeOptions: Array<{
  value: SHORTURL_TYPE
  label: string
  icon: React.ReactNode
  description: string
}> = [
    { value: SHORTURL_TYPE.NORMAL, label: 'Normal Link', icon: <Link2 />, description: 'Standard shortened URL' },
    {
      value: SHORTURL_TYPE.SCHEDULED,
      label: 'Scheduled Link',
      icon: <Calendar />,
      description: 'Activate at a specific date/time',
    },
    {
      value: SHORTURL_TYPE.EXPIRED,
      label: 'Expiring Link',
      icon: <TimerOff />,
      description: 'Set expiry date or click limit',
    },
    {
      value: SHORTURL_TYPE.PROTECTED,
      label: 'Protected Link',
      icon: <Lock />,
      description: 'Require password to access',
    },
  ]

/**
 * Zod schema for validating short URL form input.
 *
 * Fields:
 * - url: The original URL to be shortened (must be a valid URL).
 * - type: The type of shortened URL ('NORMAL', 'SCHEDULED', 'EXPIRED', or 'PROTECTED').
 * - activationDate: Optional. Required if type is 'SCHEDULED'. Date/time when the link becomes active.
 * - expirationDate: Optional. Required if type is 'EXPIRED'. Date/time when the link expires.
 * - maximumClicks: Optional. Required if type is 'EXPIRED'. Maximum allowed clicks before expiration.
 * - password: Optional. Required if type is 'PROTECTED'. Password for accessing the link.
 * - passwordHint: Optional. Required if type is 'PROTECTED'. Hint for the password.
 * - isCustomAlias: Optional. If true, custom alias is used.
 * - alias: Optional. Required if isCustomAlias is true. Custom alias for the shortened link.
 *
 * Field requirements are enforced via .refine() statements based on dependency between values.
 */
export const urlShortSchema = z
  .object({
    url: z.string().url('Please enter a valid URL'),
    type: z.enum(SHORTURL_TYPE),
    activationDate: z.date().optional(), // Required if type is scheduled
    expirationDate: z.date().optional(), // Required if type is expiring link
    maximumClicks: z.string().optional(), // Required if type is expiring link
    password: z.string().optional(), // Required if type is protected
    passwordHint: z.string().optional(), // Required if type is protected
    isCustomAlias: z.boolean().optional(),
    alias: z.string().optional(), // Required if isCustomAlias is true
  })
  /**
   * Checks that activationDate is defined if the link type is 'SCHEDULED'.
   */
  .refine((data) => data.type !== SHORTURL_TYPE.SCHEDULED || data.activationDate instanceof Date, {
    message: 'Activation date is required when scheduled link type is selected',
    path: ['activationDate'],
  })
  /**
   * Checks that password and passwordHint are defined if the link type is 'PROTECTED'.
   */
  .refine((data) => data.type !== SHORTURL_TYPE.PROTECTED || !!data.password, {
    message: 'Password is required when protected link type is selected',
    path: ['password'],
  })
  /**
   * Checks that alias is defined if isCustomAlias is true.
   */
  .refine((data) => !data.isCustomAlias || !!data.alias, {
    message: 'Alias is required when custom alias is enable',
    path: ['alias'],
  })
