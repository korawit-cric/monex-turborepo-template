import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@repo/cric-ui/components/shadcn/ui/form.tsx';
import { Input, type InputProps } from '@repo/cric-ui/components/shadcn/ui/input.tsx';
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
  name: string;
  placeholder?: string;
  label?: string;
  description?: string;
} & InputProps;

export function FormInput({
  name,
  placeholder,
  label,
  description,
  ...rest
}: FormInputProps): JSX.Element {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label ? <FormLabel>{label}</FormLabel> : null}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...rest}
              {...field}
              disabled={isSubmitting || rest.disabled}
            />
          </FormControl>
          {description ? <FormDescription>{description}</FormDescription> : null}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
