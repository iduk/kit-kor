/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand"
import { type UseFormReturn } from "react-hook-form"

interface FormStore {
  forms: Record<string, UseFormReturn<any>>
  registerForm: (id: string, form: UseFormReturn<any>) => void
  unregisterForm: (id: string) => void
  getForm: (id: string) => UseFormReturn<any> | undefined
}

export const useFormStore = create<FormStore>((set, get) => ({
  forms: {},
  registerForm: (id, form) =>
    set(state => ({
      forms: { ...state.forms, [id]: form },
    })),
  unregisterForm: id =>
    set(state => {
      const { [id]: removed, ...rest } = state.forms
      return { forms: rest }
    }),
  getForm: id => get().forms[id],
}))
