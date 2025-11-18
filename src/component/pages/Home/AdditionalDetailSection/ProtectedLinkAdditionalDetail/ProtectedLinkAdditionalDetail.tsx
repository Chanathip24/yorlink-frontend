import { HelpCircleIcon, LockIcon } from 'lucide-react'
import type { UseFormReturn } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from '@/component/common'
import { iconSizeStyle, spaceYStyle } from '@/styles'
import type { urlShortSchemaType } from '@/type'

type IProtectedLinkAdditionalDetailProps = {
  form: UseFormReturn<urlShortSchemaType>
}
const ProtectedLinkAdditionalDetail = ({ form }: IProtectedLinkAdditionalDetailProps) => {
  return (
    <div css={spaceYStyle}>
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <LockIcon css={iconSizeStyle} /> Password
            </FormLabel>
            <FormControl>
              <Input type="password" placeholder="Enter the password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="passwordHint"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <HelpCircleIcon css={iconSizeStyle} /> Password Hint (Optional)
            </FormLabel>
            <FormControl>
              <Input type="text" placeholder="Enter the password hint" {...field} />
            </FormControl>
            <FormDescription>
              The password hint will be used to reset the password if the password is forgotten
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default ProtectedLinkAdditionalDetail
