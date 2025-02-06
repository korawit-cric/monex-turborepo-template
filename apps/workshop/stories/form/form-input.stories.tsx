import type { Meta, StoryObj } from "@storybook/react";
import {
  FormWrapper,
  useCustomForm,
} from "@repo/cric-form/components/form/form-wrapper.jsx";
import { z } from "zod";
import { FormInput } from "@repo/cric-form/components/form/form-input.jsx";

const meta: Meta<typeof FormInput> = {
  component: FormInput,
};

export default meta;

type Story = StoryObj<typeof FormInput>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => {
    const formSchema = z.object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    });

    type FormType = z.infer<typeof formSchema>;

    // eslint-disable-next-line react-hooks/rules-of-hooks -- using a hook inside a render function for Storybook
    const form = useCustomForm<FormType>({
      schema: formSchema,
    });

    return (
      <FormWrapper<FormType>
        formInstance={form}
        onSubmit={(formValue) => {
          // eslint-disable-next-line no-alert -- using alert to display form values for demonstration purposes
          alert(JSON.stringify(formValue));
        }}
      >
        <FormInput
          description={props.description}
          label={props.label}
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
        />
      </FormWrapper>
    );
  },
  name: "FormInput",
  args: {
    label: "Email",
    name: "email",
    placeholder: "m@example.com",
    type: "email",
  },
};
