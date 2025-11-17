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

export const urlShortSchema = z
  .object({
    url: z.string().url('Please enter a valid URL'),
    type: z.enum(SHORTURL_TYPE),
    activationDate: z.date().optional(), // require if type is scheduled
    expirationDate: z.date().optional(), // require if type is expiring link
    maximumClicks: z.number().optional(), // require if type is expiring link
    password: z.string().optional(), // require if type is protected
    passwordHint: z.string().optional(), // require if type is protected
    isCustomAlias: z.boolean().optional(),
    alias: z.string().optional(), //require if isCustomAlias is true
  })
  .refine((data) => data.type !== SHORTURL_TYPE.SCHEDULED || data.activationDate instanceof Date, {
    message: 'Activation date is required when scheduled link type is selected',
    path: ['activationDate'],
  })

  .refine(
    (data) =>
      data.type !== SHORTURL_TYPE.EXPIRED ||
      (data.expirationDate instanceof Date && typeof data.maximumClicks === 'number'),
    {
      message: 'Expiration date and maximum clicks are required when expired link type is selected',
      path: ['expirationDate'],
    },
  )

  .refine((data) => data.type !== SHORTURL_TYPE.PROTECTED || (!!data.password && !!data.passwordHint), {
    message: 'Password and password hint are required when protected link type is selected',
    path: ['password'],
  })

  .refine((data) => !data.isCustomAlias || !!data.alias, {
    message: 'Alias is required when custom alias is enable',
    path: ['alias'],
  })
