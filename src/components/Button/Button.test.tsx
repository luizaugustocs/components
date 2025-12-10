import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>)
    expect(screen.getByText('Primary')).toHaveClass('btn--primary')

    rerender(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByText('Secondary')).toHaveClass('btn--secondary')

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByText('Outline')).toHaveClass('btn--outline')
  })

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size="small">Small</Button>)
    expect(screen.getByText('Small')).toHaveClass('btn--small')

    rerender(<Button size="medium">Medium</Button>)
    expect(screen.getByText('Medium')).toHaveClass('btn--medium')

    rerender(<Button size="large">Large</Button>)
    expect(screen.getByText('Large')).toHaveClass('btn--large')
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)
    await user.click(screen.getByText('Click me'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    )

    await user.click(screen.getByText('Disabled'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('accepts custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    expect(screen.getByText('Custom')).toHaveClass('custom-class')
  })

  it('passes through HTML button attributes', () => {
    render(<Button type="submit">Submit</Button>)
    expect(screen.getByText('Submit')).toHaveAttribute('type', 'submit')
  })
})
