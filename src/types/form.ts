export interface UserFormData {
  name: string
  email: string
  age: number
}

export interface FormState<T = unknown> {
  data: T | null
  isSubmitting: boolean
  errors: Record<string, string>
}
