import type { Meta, StoryObj } from '@storybook/react'
import { useIncrement } from './useIncrement'

// Demo component to showcase the hook
const IncrementDemo = ({
  initialValue,
  min,
  max,
  step,
}: {
  initialValue?: number
  min?: number
  max?: number
  step?: number
}) => {
  const { value, increment, decrement, reset, setValue } = useIncrement({
    initialValue,
    min,
    max,
    step,
  })

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <div
        style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        {value}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <button
          onClick={decrement}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            cursor: 'pointer',
            borderRadius: '6px',
            border: '1px solid #ccc',
            background: '#f0f0f0',
          }}
        >
          -
        </button>
        <button
          onClick={increment}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            cursor: 'pointer',
            borderRadius: '6px',
            border: '1px solid #ccc',
            background: '#f0f0f0',
          }}
        >
          +
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={reset}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            cursor: 'pointer',
            borderRadius: '6px',
            border: '1px solid #3b82f6',
            background: '#3b82f6',
            color: 'white',
          }}
        >
          Reset
        </button>
        <button
          onClick={() => setValue(0)}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            cursor: 'pointer',
            borderRadius: '6px',
            border: '1px solid #6b7280',
            background: '#6b7280',
            color: 'white',
          }}
        >
          Set to 0
        </button>
        <button
          onClick={() => setValue(50)}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            cursor: 'pointer',
            borderRadius: '6px',
            border: '1px solid #6b7280',
            background: '#6b7280',
            color: 'white',
          }}
        >
          Set to 50
        </button>
      </div>
      <div
        style={{
          marginTop: '20px',
          padding: '10px',
          background: '#f9fafb',
          borderRadius: '6px',
          fontSize: '12px',
          color: '#6b7280',
        }}
      >
        <div>
          <strong>Config:</strong>
        </div>
        <div>Initial: {initialValue ?? 0}</div>
        <div>Min: {min ?? '-∞'}</div>
        <div>Max: {max ?? '∞'}</div>
        <div>Step: {step ?? 1}</div>
      </div>
    </div>
  )
}

const meta = {
  title: 'Hooks/useIncrement',
  component: IncrementDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialValue: {
      control: 'number',
      description: 'Initial value for the counter',
    },
    min: {
      control: 'number',
      description: 'Minimum value the counter can reach',
    },
    max: {
      control: 'number',
      description: 'Maximum value the counter can reach',
    },
    step: {
      control: 'number',
      description: 'Step value for increment/decrement',
    },
  },
} satisfies Meta<typeof IncrementDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const CustomInitialValue: Story = {
  args: {
    initialValue: 10,
  },
}

export const WithMinMax: Story = {
  args: {
    initialValue: 5,
    min: 0,
    max: 10,
  },
}

export const CustomStep: Story = {
  args: {
    initialValue: 0,
    step: 5,
  },
}

export const Timer: Story = {
  args: {
    initialValue: 60,
    min: 0,
    max: 120,
    step: 1,
  },
}

export const Volume: Story = {
  args: {
    initialValue: 50,
    min: 0,
    max: 100,
    step: 10,
  },
}
