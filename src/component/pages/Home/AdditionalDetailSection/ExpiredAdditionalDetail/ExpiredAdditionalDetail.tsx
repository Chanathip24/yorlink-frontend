import { Timer, TimerOff } from 'lucide-react'
import type { UseFormReturn } from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  InputNumber,
} from '@/component/common'
import { iconSizeStyle, spaceYStyle } from '@/styles'
import type { urlShortSchemaType } from '@/type'

type IExpiredAdditionalDetailProps = {
  form: UseFormReturn<urlShortSchemaType>
}
const ExpiredAdditionalDetail = ({ form }: IExpiredAdditionalDetailProps) => {
  return (
    <div css={spaceYStyle}>
      <FormField
        control={form.control}
        name="expirationDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <TimerOff css={iconSizeStyle} /> Expiration Date (Optional)
            </FormLabel>
            <FormControl>
              <Input
                type="date"
                placeholder="Select a date"
                {...field}
                value={field.value instanceof Date ? field.value.toISOString().slice(0, 10) : (field.value ?? '')}
                onChange={(e) => {
                  const value = e.target.value
                  field.onChange(value ? new Date(value) : undefined)
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* maximum clicks */}
      <FormField
        control={form.control}
        name="maximumClicks"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <Timer css={iconSizeStyle} />
              Maximum Clicks (Optional)
            </FormLabel>
            <FormControl>
              <InputNumber maxLength={8} placeholder="Enter the maximum number of clicks" {...field} />
            </FormControl>
            <FormDescription>The link will expire after the maximum number of clicks is reached</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default ExpiredAdditionalDetail
