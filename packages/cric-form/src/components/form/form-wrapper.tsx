/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable tsdoc/syntax */
"use client";

import type {
  DefaultValues,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import type { ReactElement } from "react";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type GenericOnSubmit = (
  data: Record<string, unknown>,
  event?: React.BaseSyntheticEvent,
) => void;

/**
 * @example:
 * const form = useCricForm<LoginFormType>({
 *   defaultValues: {
 *     email: '',
 *     password: '',
 *   },
 *   schema: loginFormSchema,
 * });
 */
export const useCricForm = <DataSchema extends Record<string, any>>({
  defaultValues,
  schema,
}: {
  defaultValues?: DefaultValues<DataSchema>;
  schema: z.Schema<any, any>;
} & UseFormProps<DataSchema>): UseFormReturn<DataSchema> => {
  return useForm<DataSchema>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
};

type FormWrapperProps<DataSchema extends Record<string, any>> = {
  formInstance: UseFormReturn<DataSchema>;
  onSubmit: (data: DataSchema) => void;
  children: React.ReactNode;
};

export function FormWrapper<DataSchema extends Record<string, any>>({
  formInstance,
  onSubmit,
  children,
}: FormWrapperProps<DataSchema>): ReactElement {
  const methods = formInstance;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit as GenericOnSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}

// With ImperativeHandle
// export const FormWrapper = forwardRef(
//   <DataSchema extends Record<string, any>>(
//     { formInstance, onSubmit, children }: FormWrapperProps<DataSchema>,
//     ref?: Ref<UseFormReturn<DataSchema>>, // This should be properly typed to match what you expose
//   ) => {
//     const methods = formInstance;
//     useImperativeHandle(ref, () => methods, [methods]);
//     return (
//       <FormProvider {...methods}>
//         <form onSubmit={methods.handleSubmit(onSubmit as GenericOnSubmit)}>
//           {children}
//         </form>
//       </FormProvider>
//     );
//   },
// ) as <DataSchema extends Record<string, any>>(
//   props: FormWrapperProps<DataSchema> & {
//     ref?: Ref<UseFormReturn<DataSchema>>;
//   }, // Match the ref type here
// ) => ReactElement;
