import React, { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Button } from '../ui/button'
// Firebase functions will be called via HTTP
import { CreditCard, Loader2 } from 'lucide-react'

interface StripePaymentFormProps {
  amount: number
  currency: string
  sponsorshipTier: string
  customerEmail: string
  sponsorId: string | null
  onPaymentSuccess: (paymentIntent: any) => void
  onPaymentError: (error: string) => void
}

export const StripePaymentForm: React.FC<StripePaymentFormProps> = ({
  amount,
  currency,
  sponsorshipTier,
  customerEmail,
  sponsorId,
  onPaymentSuccess,
  onPaymentError
}) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      setPaymentError('Stripe has not loaded yet. Please try again.')
      return
    }

    const cardElement = elements.getElement(CardElement)
    if (!cardElement) {
      setPaymentError('Card element not found. Please refresh and try again.')
      return
    }

    setIsProcessing(true)
    setPaymentError(null)

    try {
      // Create payment intent via Firebase Cloud Function
      const response = await fetch(`${import.meta.env.VITE_FIREBASE_FUNCTIONS_URL || ''}/sponsorPaymentIntent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          currency,
          sponsorshipTier,
          customerEmail,
          sponsorId
        })
      })

      const intentData = await response.json()

      if (!response.ok) {
        throw new Error(intentData.error || 'Failed to create payment intent')
      }

      const clientSecret = intentData?.clientSecret
      if (!clientSecret) {
        throw new Error('Failed to create payment intent')
      }

      // Confirm payment
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: customerEmail,
          },
        }
      })

      if (confirmError) {
        throw new Error(confirmError.message || 'Payment confirmation failed')
      }

      if (paymentIntent && paymentIntent.status === 'succeeded') {
        onPaymentSuccess(paymentIntent)
      } else {
        throw new Error('Payment was not successful')
      }
    } catch (error: any) {
      console.error('Payment error:', error)
      const errorMessage = error.message || 'Payment processing failed'
      setPaymentError(errorMessage)
      onPaymentError(errorMessage)
    } finally {
      setIsProcessing(false)
    }
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        '::placeholder': {
          color: '#94a3b8',
        },
        backgroundColor: 'transparent',
      },
      invalid: {
        color: '#ef4444',
        iconColor: '#ef4444'
      }
    },
    hidePostalCode: false,
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-navy-light/30 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-4">
          <CreditCard className="w-5 h-5 text-accent-blue" />
          <h4 className="text-text-primary font-semibold">Payment Information</h4>
        </div>
        
        <div className="bg-navy-light/50 rounded-lg p-4 border border-navy-light">
          <CardElement options={cardElementOptions} />
        </div>
      </div>

      {paymentError && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
          <p className="text-red-400 text-sm">{paymentError}</p>
        </div>
      )}

      <div className="bg-accent-blue/10 rounded-lg p-4 border border-accent-blue/20">
        <div className="flex justify-between items-center mb-2">
          <span className="text-text-primary font-medium">Total Amount:</span>
          <span className="text-accent-blue font-bold text-xl">
            ${amount.toLocaleString()} {currency.toUpperCase()}
          </span>
        </div>
        <p className="text-text-secondary text-sm">
          {sponsorshipTier.charAt(0).toUpperCase() + sponsorshipTier.slice(1)} Sponsorship Tier
        </p>
      </div>

      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-[#4169E1] text-white hover:bg-[#4169E1]/90 text-lg py-4 font-semibold"
      >
        {isProcessing ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processing Payment...
          </>
        ) : (
          `Pay $${amount.toLocaleString()}`
        )}
      </Button>

      <p className="text-text-secondary text-xs text-center">
        Your payment is secured by Stripe. We do not store your card information.
      </p>
    </form>
  )
}