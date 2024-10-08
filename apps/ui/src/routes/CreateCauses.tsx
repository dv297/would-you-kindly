import { useState } from "react";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";

import ImageUpload from "@/components/ImageUpload/ImageUpload.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

type Inputs = {
  title: string;
  description: string;
  body: string;
};

interface InputProps {
  register: UseFormRegister<Inputs>;
  field: keyof Inputs;
  label: string;
}

const FormTextInput = ({ register, field, label }: InputProps) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={field}>{label}</Label>
      <Input type="text" id={field} {...register(field)} />
    </div>
  );
};

const FormTextArea = ({ register, field, label }: InputProps) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={field}>{label}</Label>
      <Textarea id={field} {...register(field)} />
    </div>
  );
};

const FormImageInput = (props: { onImageUploaded: (cid: string) => void }) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <ImageUpload onImageUploaded={props.onImageUploaded} />
    </div>
  );
};

const CreateCause = () => {
  const { handleSubmit, register } = useForm<Inputs>();
  const [cid, setSid] = useState("");
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: ["causes"],
    mutationFn: async (data: Inputs) => {
      const response = await fetch("/api/causes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, cid }),
      });

      if (!response.ok) {
        console.log(response.statusText);
        throw new Error("Could not create cause");
      }

      const responseJson = await response.json();

      if (import.meta.env.VITE_ENABLE_AI_SUGGESTION) {
        navigate(`/causes/${responseJson.id}/suggestion`);
      } else {
        navigate("/");
      }
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-xl flex flex-col px-4 py-4 rounded-2xl border-2 border-slate-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-normal items-start gap-4"
          >
            <FormTextInput register={register} field="title" label="Title" />
            <FormTextInput
              register={register}
              field="description"
              label="Description"
            />
            <FormImageInput
              register={register}
              field="body"
              label="Image URL"
              onImageUploaded={setSid}
            />
            <FormTextArea register={register} field="body" label="Body" />
            <div className="mt-4">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCause;
