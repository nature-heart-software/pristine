import { forwardRef } from 'react'
import { StContainer } from './container.styled.tsx'
import { ContainerProps, exclusiveContainerProps } from './container.shared.ts'
import { Slot } from '@radix-ui/react-slot'
import { useExtractProps } from '@/utils/component.ts'

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container({ children, asChild, ...initialProps }, forwardedRef) {
    const [containerProps, props] = useExtractProps(initialProps, exclusiveContainerProps)
    const Comp = asChild ? StContainer.withComponent(Slot) : StContainer
    return (
        <Comp
            data-part={'container'}
            ref={forwardedRef}
            {...props}
            styled={{
                ...containerProps,
            }}
        >
            {children}
        </Comp>
    )
})