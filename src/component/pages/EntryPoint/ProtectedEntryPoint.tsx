import { AlertCircle, Clock, LockIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/component/common'
import { useYorLinkAccessProtectedUrl } from '@/hook'
import { iconSizeForegroundStyle } from '@/styles'
import type { IAccessProtectedUrlPayload, IShortUrlDetail } from '@/type'

import { EmptyPage } from '../EmptyPage'
import {
  cardStyle,
  containerStyle,
  descriptionStyle,
  formContainerStyle,
  headingStyle,
  hintBoxStyle,
  hintLabelStyle,
  hintTextStyle,
  iconContainerStyle,
} from './EntryPoint.style'

type IProtectedEntryPointProps = {
  urlDetail: IShortUrlDetail
}

const ProtectedEntryPoint = ({ urlDetail }: IProtectedEntryPointProps) => {
  const { originalUrl, isActive, activationDate, passwordHint, id }: IShortUrlDetail = urlDetail

  const form = useForm<{ password: string }>({
    defaultValues: {
      password: '',
    },
  })

  const { mutateAsync: verifyPassword, isPending: isVerifyingPassword } = useYorLinkAccessProtectedUrl()

  const handleSubmit = form.handleSubmit(async (data) => {
    const { password } = data
    const payload: IAccessProtectedUrlPayload = {
      password,
      id: id,
    }
    try {
      await verifyPassword(payload)
      toast.success('Password verified successfully')
      window.location.replace(originalUrl)
      //eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      form.setError('password', { message: "Oops! That password didn't work. Please try again 😊" })
      toast.error("Oops! That password didn't work. Please try again 😊")
    }
  })

  if (!isActive || new Date(activationDate) > new Date()) {
    return (
      <EmptyPage
        title="This URL is not yet active"
        description="Oops! This link is not yet active. Please check back after the activation date."
        icon={<Clock css={iconSizeForegroundStyle} />}
      />
    )
  }

  return (
    <div css={containerStyle}>
      <div css={cardStyle}>
        <div css={iconContainerStyle}>
          <LockIcon css={iconSizeForegroundStyle} />
        </div>
        <h1 css={headingStyle}>This link is protected</h1>
        <p css={descriptionStyle}>Please provide the password to access the link</p>

        {passwordHint && (
          <div css={hintBoxStyle}>
            <AlertCircle size={20} color="#f59e0b" style={{ marginTop: '2px', flexShrink: 0 }} />
            <div css={hintTextStyle}>
              <div css={hintLabelStyle}>Password Hint:</div>
              {passwordHint}
            </div>
          </div>
        )}

        <Form {...form}>
          <form css={formContainerStyle} onSubmit={handleSubmit}>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormDescription>Enter the password to access the link</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button block type="submit" disabled={isVerifyingPassword}>
              {isVerifyingPassword ? 'Verifying...' : 'Submit'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ProtectedEntryPoint
