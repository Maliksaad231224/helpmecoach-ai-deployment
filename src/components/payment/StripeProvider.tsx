import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { StripePaymentForm } from './StripePaymentForm'

// This would normally come from environment variables
const stripePromise = loadStripe('pk_test_51PDMhDEZETpEWRKPTYQfJVZyxoLTfNmcGfS6kcrdO2PKyIgIj7VIUfQOEF2JQKQXxEFLGJcBJaFzw1jFXOjRXOHu005Qmt9oXl') // Test public key

interface StripeProviderProps {
  amount: number
  currency: string
  sponsorshipTier: string
  customerEmail: string
  sponsorId: string | null
  onPaymentSuccess: (paymentIntent: any) => void
  onPaymentError: (error: string) => void
}

export const StripeProvider: React.FC<StripeProviderProps> = (props) => {
  const options = {
    // Passing the client secret obtained from the server
    appearance: {
      theme: 'night' as const,
      variables: {
        colorPrimary: '#4169E1',
        colorBackground: '#1e293b',
        colorText: '#ffffff',
        colorDanger: '#ef4444',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        spacingUnit: '4px',
        borderRadius: '8px',
      }
    },
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <StripePaymentForm {...props} />
    </Elements>
  )
}