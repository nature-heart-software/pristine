import styled from '@emotion/styled'
import { GroupPropsDefinition } from './group.shared'
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

export const StGroup = styled(
    StBox,
    getStyledOptions()
)<StyledProps<GroupPropsDefinition>>(
    ({ theme: { spacing = _spacing }, styled: { direction = 'row', wrap = false, justify = 'left', align = 'center', gap = '3' } }) => ({
        display: 'inline-flex',
        justifyContent:
            direction === 'row'
                ? justify in POSITIONS
                    ? POSITIONS[justify as keyof typeof POSITIONS]
                    : justify
                : align in POSITIONS
                  ? POSITIONS[align as keyof typeof POSITIONS]
                  : align,
        alignItems:
            direction === 'row'
                ? align in POSITIONS
                    ? POSITIONS[align as keyof typeof POSITIONS]
                    : align
                : justify in POSITIONS
                  ? POSITIONS[justify as keyof typeof POSITIONS]
                  : justify,
        gap: getRemValue(gap, spacing),
        flexFlow: `${direction} ${wrap ? 'wrap' : 'nowrap'}`,
        '& > *': {
            minWidth: 0,
            minHeight: 0,
            flexGrow: 1,
        },
    })
)
