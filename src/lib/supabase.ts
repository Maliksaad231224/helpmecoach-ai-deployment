import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://yobcxsjmwrrdofckrzbo.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvYmN4c2ptd3JyZG9mY2tyemJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4NjMwNDcsImV4cCI6MjA3MDQzOTA0N30.7GDufUZgVEGj8tCfGfsH1ydbr8kY_hOur4oABillvDk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)