import styled from '@emotion/styled'
import { StackPropsDefinition } from './stack.shared'
import { getRemValue, getStyledOptions, StyledProps } from '@/utils/css-in-js'
import { spacing as _spacing } from '@/tokens/spacing'
import { StBox } from '@/components/layout/box'

const POSITIONS = {
    top: 'flex-start',
    left: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
    right: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    stretch: 'stretch',
    apart: 'space-between',
} as const

export const StStack = styled(
    StBox,
    getStyledOptions()
)<StyledProps<StackPropsDefinition>>(({ theme: { spacing = _spacing }, styled: { justify = 'stretch', align = 'top', gap = '3' } }) => ({
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: align in POSITIONS ? POSITIONS[align as keyof typeof POSITIONS] : align,
    alignItems: justify in POSITIONS ? POSITIONS[justify as keyof typeof POSITIONS] : justify,
    gap: getRemValue(gap, spacing),
    '& > *': {
        minWidth: 0,
        minHeight: 0,
        flexGrow: align === 'stretch' ? 1 : undefined,
    },
}))
