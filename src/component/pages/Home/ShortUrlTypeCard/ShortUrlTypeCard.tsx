import { type ReactNode, useCallback, useMemo } from 'react'

import type { SHORTURL_TYPE } from '@/enum'

import {
  cardDescription,
  cardIcon,
  cardIconSelected,
  cardLabel,
  cardLabelSelected,
  cardStyle,
  cardWrapper,
  selectedCardStyle,
} from './ShortUrlType.style'

type IShortUrlTypeCard = {
  value: SHORTURL_TYPE
  label: string
  icon: ReactNode
  description: string
  onSelect: (value: SHORTURL_TYPE) => void
  selectedValue: SHORTURL_TYPE
}

const ShortUrlTypeCard = ({ value, label, icon, description, onSelect, selectedValue }: IShortUrlTypeCard) => {
  const handleSelect = useCallback((): void => {
    onSelect(value)
  }, [onSelect, value])
  const isSelected: boolean = useMemo(() => selectedValue === value, [selectedValue, value])
  return (
    <button key={value} type="button" onClick={handleSelect} css={[cardStyle, isSelected && selectedCardStyle]}>
      <div css={cardWrapper}>
        <div css={[cardIcon, isSelected && cardIconSelected]}>{icon}</div>
        <div style={{ flex: 1 }}>
          <div css={[cardLabel, isSelected && cardLabelSelected]}>{label}</div>
          <div css={[cardDescription]}>{description}</div>
        </div>
      </div>
    </button>
  )
}

export default ShortUrlTypeCard
