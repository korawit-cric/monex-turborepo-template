import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@repo/cric-ui/components/shadcn/ui/form";
import { Input } from "@repo/cric-ui/components/shadcn/ui/input";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
  name: string;
  placeholder?: string;
  label?: string;
  description?: string;
} & React.ComponentProps<"input">;

export function FormInput({
  name,
  placeholder,
  label,
  description,
  ...rest
}: FormInputProps): JSX.Element {
  // Try to get form context, but don't error if it doesn't exist
  const formContext = useFormContext();
  const control = formContext.control;
  const isSubmitting = formContext.formState.isSubmitting || false;

  // If no form context is available, render just the input with basic props
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!control) {
    return (
      <div>
        {label ? <div>{label}</div> : null}
        <Input
          disabled={rest.disabled === true}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
        {description ? (
          <div className="text-muted-foreground text-sm">{description}</div>
        ) : null}
      </div>
    );
  }

  // Normal render with form context
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
              disabled={isSubmitting || rest.disabled === true}
            />
          </FormControl>
          {description ? (
            <FormDescription>{description}</FormDescription>
          ) : null}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
