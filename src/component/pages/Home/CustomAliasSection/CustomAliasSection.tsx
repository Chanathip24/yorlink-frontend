import { Sparkles } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Switch } from '@/component/common'
import type { Maybe } from '@/type'

import {
  customAliasHeaderIconStyle,
  customAliasHeaderStyle,
  customAliasSectionContainerStyle,
} from './CustomAliasSection.style'

type ICustomAliasSectionProps = {
  isCustomAlias: Maybe<boolean>
  onToggleCustomAlias: (checked: boolean) => void
}
const CustomAliasSection = ({ isCustomAlias, onToggleCustomAlias }: ICustomAliasSectionProps) => {
  return (
    <Card css={customAliasSectionContainerStyle}>
      <CardHeader css={customAliasHeaderStyle}>
        <div css={customAliasHeaderIconStyle}>
          <Sparkles />
        </div>
        <div>
          <CardTitle>Custom Alias</CardTitle>
          <CardDescription>Create a memorable branded link</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Switch checked={isCustomAlias ?? false} onCheckedChange={onToggleCustomAlias} />
      </CardContent>
    </Card>
  )
}

export default CustomAliasSection
