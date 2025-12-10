import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useIncrement } from './useIncrement'

describe('useIncrement', () => {
  it('initializes with default value of 0', () => {
    const { result } = renderHook(() => useIncrement())
    expect(result.current.value).toBe(0)
  })

  it('initializes with custom initial value', () => {
    const { result } = renderHook(() => useIncrement({ initialValue: 10 }))
    expect(result.current.value).toBe(10)
  })

  it('increments the value by default step (1)', () => {
    const { result } = renderHook(() => useIncrement())

    act(() => {
      result.current.increment()
    })

    expect(result.current.value).toBe(1)
  })

  it('decrements the value by default step (1)', () => {
    const { result } = renderHook(() => useIncrement({ initialValue: 5 }))

    act(() => {
      result.current.decrement()
    })

    expect(result.current.value).toBe(4)
  })

  it('increments by custom step value', () => {
    const { result } = renderHook(() => useIncrement({ step: 5 }))

    act(() => {
      result.current.increment()
    })

    expect(result.current.value).toBe(5)
  })

  it('decrements by custom step value', () => {
    const { result } = renderHook(() =>
      useIncrement({ initialValue: 10, step: 3 })
    )

    act(() => {
      result.current.decrement()
    })

    expect(result.current.value).toBe(7)
  })

  it('respects minimum value constraint', () => {
    const { result } = renderHook(() =>
      useIncrement({ initialValue: 1, min: 0 })
    )

    act(() => {
      result.current.decrement()
      result.current.decrement()
    })

    expect(result.current.value).toBe(0)
  })

  it('respects maximum value constraint', () => {
    const { result } = renderHook(() =>
      useIncrement({ initialValue: 9, max: 10 })
    )

    act(() => {
      result.current.increment()
      result.current.increment()
    })

    expect(result.current.value).toBe(10)
  })

  it('resets to initial value', () => {
    const { result } = renderHook(() => useIncrement({ initialValue: 5 }))

    act(() => {
      result.current.increment()
      result.current.increment()
    })

    expect(result.current.value).toBe(7)

    act(() => {
      result.current.reset()
    })

    expect(result.current.value).toBe(5)
  })

  it('sets value directly', () => {
    const { result } = renderHook(() => useIncrement())

    act(() => {
      result.current.setValue(42)
    })

    expect(result.current.value).toBe(42)
  })

  it('clamps setValue to min constraint', () => {
    const { result } = renderHook(() => useIncrement({ min: 0, max: 100 }))

    act(() => {
      result.current.setValue(-10)
    })

    expect(result.current.value).toBe(0)
  })

  it('clamps setValue to max constraint', () => {
    const { result } = renderHook(() => useIncrement({ min: 0, max: 100 }))

    act(() => {
      result.current.setValue(150)
    })

    expect(result.current.value).toBe(100)
  })

  it('handles multiple increment operations', () => {
    const { result } = renderHook(() => useIncrement({ step: 2 }))

    act(() => {
      result.current.increment()
      result.current.increment()
      result.current.increment()
    })

    expect(result.current.value).toBe(6)
  })

  it('handles mixed increment and decrement operations', () => {
    const { result } = renderHook(() => useIncrement({ initialValue: 10 }))

    act(() => {
      result.current.increment()
      result.current.increment()
      result.current.decrement()
    })

    expect(result.current.value).toBe(11)
  })
})
