import { type UseFormReturn, type FieldValues } from "react-hook-form"
import { create } from "zustand"

interface FormStore {
  forms: Partial<Record<string, UseFormReturn<FieldValues>>>
  registerForm: (id: string, form: UseFormReturn<FieldValues> | undefined) => void
  unregisterForm: (id: string) => void
  getForm: (id: string) => UseFormReturn<FieldValues> | undefined
}

export const useFormStore = create<FormStore>((set, get) => ({
  forms: {},
  registerForm: (id, form) =>
    set(state => ({
      forms: { ...state.forms, [id]: form },
    })),
  unregisterForm: id =>
    set(state => {
      const rest = { ...state.forms }
      delete rest[id]
      return { forms: rest }
    }),
  getForm: id => get().forms[id],
}))
