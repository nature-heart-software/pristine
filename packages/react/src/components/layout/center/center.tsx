import { forwardRef } from 'react'
import { StCenter } from './center.styled.tsx'
import { CenterProps, exclusiveCenterProps } from './center.shared.ts'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component.ts'

export const Center = forwardRef<HTMLDivElement, CenterProps>(function Center({ children, asChild, ...initialProps }, forwardedRef) {
    const [centerProps, props] = useExtractProps(initialProps, exclusiveCenterProps)
    const Comp = asChild ? StCenter.withComponent(Slot) : StCenter
    return (
        <Comp
            data-part={'center'}
            ref={forwardedRef}
            {...props}
            styled={{
                ...centerProps,
            }}
        >
            {children}
        </Comp>
    )
})
