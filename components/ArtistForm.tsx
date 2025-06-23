"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["Hindi", "English", "Tamil", "Punjabi"];
const fees = ["₹5,000 - ₹10,000", "₹10,000 - ₹20,000", "₹15,000 - ₹25,000"];

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  location: yup.string().required("Location is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee is required"),
  image: yup.mixed().nullable(),
});

export default function ArtistForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      location: "",
      category: [],
      languages: [],
      fee: "",
      image: null,
    },
  });

  const [preview, setPreview] = useState("");

  const onSubmit = (data: any) => {
    console.log("Form Submitted: ", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl mx-auto"
    >
      <Input placeholder="Name" {...register("name")} />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      <Textarea placeholder="Bio" {...register("bio")} />
      {errors.bio && (
        <p className="text-red-500 text-sm">{errors.bio.message}</p>
      )}

      <Input placeholder="Location" {...register("location")} />
      {errors.location && (
        <p className="text-red-500 text-sm">{errors.location.message}</p>
      )}

      <div>
        <p className="font-medium">Category</p>
        <div className="flex flex-wrap gap-3 mt-2">
          {categories.map((cat) => (
            <label key={cat} className="flex gap-2 items-center">
              <input type="checkbox" value={cat} {...register("category")} />
              {cat}
            </label>
          ))}
        </div>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>

      <div>
        <p className="font-medium">Languages Spoken</p>
        <div className="flex flex-wrap gap-3 mt-2">
          {languages.map((lang) => (
            <label key={lang} className="flex gap-2 items-center">
              <input type="checkbox" value={lang} {...register("languages")} />
              {lang}
            </label>
          ))}
        </div>
        {errors.languages && (
          <p className="text-red-500 text-sm">{errors.languages.message}</p>
        )}
      </div>

      <div>
        <p className="font-medium">Fee Range</p>
        <select {...register("fee")} className="border p-2 rounded-md mt-1">
          <option value="">Select Fee</option>
          {fees.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        {errors.fee && (
          <p className="text-red-500 text-sm">{errors.fee.message}</p>
        )}
      </div>

      <div>
        <p className="font-medium">Profile Image (optional)</p>
        <Input
          type="file"
          accept="image/*"
          {...register("image")}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setPreview(reader.result as string);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        {preview && (
          <Image
            src={preview}
            alt="preview"
            className="mt-4 w-32 h-32 object-cover rounded-md"
          />
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
