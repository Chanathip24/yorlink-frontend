import { Slot } from '@radix-ui/react-slot'
import { type ComponentProps, useId } from 'react'
import { createContext, useContext } from 'react'
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
  useFormState,
} from 'react-hook-form'

import { Label } from '@/component/common'
import type { IExtraStyles } from '@/type'

import { formDescriptionStyle, formItemStyle, formLabelStyle, formMessageStyle } from './Form.style'

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue)

type FormItemContextValue = {
  id: string
}

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue)

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

const Form = FormProvider

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

function FormItem({ extraStyles, ...props }: ComponentProps<'div'> & IExtraStyles) {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" css={[formItemStyle, extraStyles]} {...props} />
    </FormItemContext.Provider>
  )
}

function FormLabel({ extraStyles, ...props }: ComponentProps<typeof Label> & IExtraStyles) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      css={[formLabelStyle, extraStyles]}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ extraStyles, ...props }: ComponentProps<'p'> & IExtraStyles) {
  const { formDescriptionId } = useFormField()

  return <p data-slot="form-description" id={formDescriptionId} css={[formDescriptionStyle, extraStyles]} {...props} />
}

function FormMessage({ extraStyles, ...props }: ComponentProps<'p'> & IExtraStyles) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? '') : props.children

  if (!body) {
    return null
  }

  return (
    <p data-slot="form-message" id={formMessageId} css={[formMessageStyle, extraStyles]} {...props}>
      {body}
    </p>
  )
}

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage }
