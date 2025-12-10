import { useCallback, useState } from 'react'

export interface UseIncrementOptions {
  /**
   * Initial value for the counter
   * @default 0
   */
  initialValue?: number
  /**
   * Minimum value the counter can reach
   * @default -Infinity
   */
  min?: number
  /**
   * Maximum value the counter can reach
   * @default Infinity
   */
  max?: number
  /**
   * Step value for increment/decrement operations
   * @default 1
   */
  step?: number
}

export interface UseIncrementReturn {
  /**
   * Current counter value
   */
  value: number
  /**
   * Increment the counter by the step value
   */
  increment: () => void
  /**
   * Decrement the counter by the step value
   */
  decrement: () => void
  /**
   * Reset the counter to the initial value
   */
  reset: () => void
  /**
   * Set the counter to a specific value
   */
  setValue: (value: number) => void
}

/**
 * A custom hook for managing a numeric counter with increment and decrement functionality.
 *
 * @param options - Configuration options for the counter
 * @returns An object containing the current value and control functions
 *
 * @example
 * ```tsx
 * const { value, increment, decrement, reset } = useIncrement({
 *   initialValue: 0,
 *   min: 0,
 *   max: 10,
 *   step: 1
 * })
 *
 * return (
 *   <div>
 *     <button onClick={decrement}>-</button>
 *     <span>{value}</span>
 *     <button onClick={increment}>+</button>
 *     <button onClick={reset}>Reset</button>
 *   </div>
 * )
 * ```
 */
export const useIncrement = (
  options: UseIncrementOptions = {}
): UseIncrementReturn => {
  const {
    initialValue = 0,
    min = -Infinity,
    max = Infinity,
    step = 1,
  } = options

  const [value, setValue] = useState(initialValue)

  const clamp = useCallback(
    (val: number) => Math.min(Math.max(val, min), max),
    [min, max]
  )

  const increment = useCallback(() => {
    setValue((prev) => clamp(prev + step))
  }, [step, clamp])

  const decrement = useCallback(() => {
    setValue((prev) => clamp(prev - step))
  }, [step, clamp])

  const reset = useCallback(() => {
    setValue(initialValue)
  }, [initialValue])

  const setValueClamped = useCallback(
    (newValue: number) => {
      setValue(clamp(newValue))
    },
    [clamp]
  )

  return {
    value,
    increment,
    decrement,
    reset,
    setValue: setValueClamped,
  }
}
