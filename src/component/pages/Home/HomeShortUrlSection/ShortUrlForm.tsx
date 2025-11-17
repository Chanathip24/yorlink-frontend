import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { Button, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/component/common'
import { urlShortSchema, urlTypeOptions } from '@/constant'
import { SHORTURL_TYPE } from '@/enum'
import type { urlShortSchemaType } from '@/type'

import { ShortUrlTypeCard } from '../ShortUrlTypeCard'
import { formContainerStyle, urlTypeOptionsContainerStyle } from './HomeShortUrl.style'

const ShortUrlForm = () => {
  const shortUrlForm = useForm<urlShortSchemaType>({
    resolver: zodResolver(urlShortSchema),
    defaultValues: {
      url: '',
      type: SHORTURL_TYPE.NORMAL,
    },
  })

  const [type]: [SHORTURL_TYPE] = shortUrlForm.watch(['type'])

  const handleFormSubmit = useCallback(() => {
    toast.success('URL shortened successfully')
  }, [])

  const handleUrlTypeSelect = useCallback(
    (value: SHORTURL_TYPE): void => {
      shortUrlForm.setValue('type', value)
    },
    [shortUrlForm],
  )

  return (
    <FormProvider {...shortUrlForm}>
      <form css={formContainerStyle} onSubmit={shortUrlForm.handleSubmit(handleFormSubmit)}>
        <FormField
          control={shortUrlForm.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your long URL</FormLabel>
              <FormControl>
                <Input placeholder="Paste your long URL here…" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div css={urlTypeOptionsContainerStyle}>
          {urlTypeOptions.map((option) => (
            <ShortUrlTypeCard key={option.value} {...option} onSelect={handleUrlTypeSelect} selectedValue={type} />
          ))}
        </div>

        <Button block size="lg" type="submit">
          Shorten URL
        </Button>
      </form>
    </FormProvider>
  )
}

export default ShortUrlForm
