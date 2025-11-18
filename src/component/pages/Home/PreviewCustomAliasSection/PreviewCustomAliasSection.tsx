import { useMemo } from 'react'
import type { Control } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/component/common'
import { YORLINK_API_SHORTEN_URL } from '@/config'
import { block, flexColumn, theme } from '@/styles'
import type { Maybe, urlShortSchemaType } from '@/type'

import { previewCustomAliasSectionContainerStyle } from './PreviewCustom.style'

type IPreviewCustomAliasSectionProps = {
  isCustomAlias: Maybe<boolean>
  control: Control<urlShortSchemaType>
}
const PreviewCustomAliasSection = ({ isCustomAlias, control }: IPreviewCustomAliasSectionProps) => {
  if (!isCustomAlias) return null
  const baseUrl: string = useMemo(() => {
    return `${YORLINK_API_SHORTEN_URL}/`
  }, [])
  return (
    <div css={flexColumn}>
      <div css={previewCustomAliasSectionContainerStyle}>
        <div css={[block, flexColumn]}>
          <p style={{ fontWeight: theme.typography.fontWeight.medium }}>Your custom alias</p>
          <Input disabled css={block} value={baseUrl} />
        </div>
        <div>
          <FormField
            control={control}
            name="alias"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alias</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your custom alias" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default PreviewCustomAliasSection
