import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/component/common'
import {
  AdditionalDetailSection,
  CustomAliasSection,
  PreviewCustomAliasSection,
  ShortUrlTypeCard,
} from '@/component/pages/Home'
import { urlShortSchema, urlTypeOptions } from '@/constant'
import { SHORTURL_TYPE } from '@/enum'
import type { Maybe, urlShortSchemaType } from '@/type'

import { formContainerStyle, urlTypeOptionsContainerStyle } from './HomeShortUrl.style'

type IShortUrlFormProps = {
  isShorteningUrl: boolean
  handleShortenUrl: (request: urlShortSchemaType) => Promise<void>
}
const ShortUrlForm = ({ isShorteningUrl, handleShortenUrl }: IShortUrlFormProps) => {
  const shortUrlForm = useForm<urlShortSchemaType>({
    resolver: zodResolver(urlShortSchema),
    defaultValues: {
      url: '',
      type: SHORTURL_TYPE.NORMAL,
    },
  })

  const [type, isCustomAlias]: [SHORTURL_TYPE, Maybe<boolean>] = shortUrlForm.watch(['type', 'isCustomAlias'])

  const isButtonDisabled: boolean = useMemo(() => {
    return isShorteningUrl || shortUrlForm.formState.isSubmitting
  }, [isShorteningUrl, shortUrlForm.formState.isSubmitting])
  /**
   * Handles the short URL form submission.
   * On successful submission, displays a success toast.
   * Currently, just mocks the success state.
   *
   * @function handleToggleCustomAlias
   * @param {boolean} checked - The checked state of the switch.
   * @returns {void}
   */
  const handleToggleCustomAlias = useCallback(
    (checked: boolean) => {
      shortUrlForm.setValue('isCustomAlias', checked)
    },
    [shortUrlForm],
  )

  /**
   * Handles the URL type selection.
   * Updates the form value with the selected URL type.
   *
   * @function handleUrlTypeSelect
   * @param {SHORTURL_TYPE} value - The selected URL type.
   * @returns {void}
   */
  const handleUrlTypeSelect = useCallback(
    (value: SHORTURL_TYPE): void => {
      shortUrlForm.setValue('type', value)
    },
    [shortUrlForm],
  )

  return (
    <FormProvider {...shortUrlForm}>
      <form css={formContainerStyle} onSubmit={shortUrlForm.handleSubmit(handleShortenUrl)}>
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

        <AdditionalDetailSection form={shortUrlForm} />

        <CustomAliasSection isCustomAlias={isCustomAlias} onToggleCustomAlias={handleToggleCustomAlias} />
        <PreviewCustomAliasSection isCustomAlias={isCustomAlias} control={shortUrlForm.control} />

        <Button disabled={isButtonDisabled} block size="lg" type="submit">
          Shorten URL
        </Button>
      </form>
    </FormProvider>
  )
}

export default ShortUrlForm
