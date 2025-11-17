import { Calendar } from 'lucide-react'
import type { UseFormReturn } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from '@/component/common'
import { iconSizeStyle } from '@/styles'
import type { urlShortSchemaType } from '@/type'

type IScheduleAdditionalDetailProps = {
  form: UseFormReturn<urlShortSchemaType>
}
const ScheduleAdditionalDetail = ({ form }: IScheduleAdditionalDetailProps) => {
  return (
    <div>
      <FormField
        control={form.control}
        name="activationDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <Calendar css={iconSizeStyle} /> Activation Date
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
            <FormDescription>Link will become active at this date and time</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default ScheduleAdditionalDetail
