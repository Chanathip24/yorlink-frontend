import { z } from 'zod'

import { urlShortSchema } from '@/constant'

export type urlShortSchemaType = z.infer<typeof urlShortSchema>
