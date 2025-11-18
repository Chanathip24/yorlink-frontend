import type { UseFormReturn } from 'react-hook-form'

import { SHORTURL_TYPE } from '@/enum'
import type { urlShortSchemaType } from '@/type'

import { ExpiredAdditionalDetail } from './ExpiredAdditionalDetail'
import { ProtectedLinkAdditionalDetail } from './ProtectedLinkAdditionalDetail'
import { ScheduleAdditionalDetail } from './ScheduleAdditionalDetail'

type IAddtionalDetailSectionProps = {
  form: UseFormReturn<urlShortSchemaType>
}

const AddtionalDetailSection = ({ form }: IAddtionalDetailSectionProps) => {
  const [type]: [SHORTURL_TYPE] = form.watch(['type'])

  if (type === SHORTURL_TYPE.EXPIRED) {
    return <ExpiredAdditionalDetail form={form} />
  } else if (type === SHORTURL_TYPE.PROTECTED) {
    return <ProtectedLinkAdditionalDetail form={form} />
  } else if (type === SHORTURL_TYPE.SCHEDULED) {
    return <ScheduleAdditionalDetail form={form} />
  }
  return null
}

export default AddtionalDetailSection
