export const negativeSpacing = {
    '-13': -160,
    '-12': -96,
    '-11': -80,
    '-10': -64,
    '-9': -48,
    '-8': -40,
    '-7': -32,
    '-6': -24,
    '-5': -16,
    '-4': -12,
    '-3': -8,
    '-2': -4,
    '-1': -2,
} as const

export const positiveSpacing = {
    '0': 0,
    '1': 2,
    '2': 4,
    '3': 8,
    '4': 12,
    '5': 16,
    '6': 24,
    '7': 32,
    '8': 40,
    '9': 48,
    '10': 64,
    '11': 80,
    '12': 96,
    '13': 160,
} as const

export const spacing = {
    ...negativeSpacing,
    ...positiveSpacing,
} as const

export type Spacing = keyof typeof spacing

export type NegativeSpacing = keyof typeof negativeSpacing
export type PositiveSpacing = keyof typeof positiveSpacing

declare module '@emotion/react' {
    export interface Theme {
        spacing: typeof spacing
        negativeSpacing: typeof negativeSpacing
        positiveSpacing: typeof positiveSpacing
    }
}
