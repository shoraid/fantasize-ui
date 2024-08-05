"use client";

import Button from "@/components/buttons/button";
import Helper from "@/components/forms/helper";
import Input from "@/components/forms/input";
import Label from "@/components/forms/label";
import Card, { CardBody, CardHeader } from "@/components/ui/card";
import route from "@/utils/router";
import {
  RegisterSchema,
  RegisterValidation,
} from "@/validations/auth.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = async (data: RegisterValidation) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50 md:items-baseline md:pt-[7%]">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="space-y-4 text-center">
          <h3 className="text-xl font-semibold">Sign Up</h3>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-4">
            <div className="space-y-1">
              <Label htmlFor="firstName" required>
                First Name
              </Label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="John"
                    color={errors.firstName ? "error" : "base"}
                    {...field}
                  />
                )}
              />
              <Helper color="error">{errors.firstName?.message}</Helper>
            </div>

            <div className="space-y-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="Doe"
                    color={errors.lastName ? "error" : "base"}
                    {...field}
                  />
                )}
              />
              <Helper color="error">{errors.lastName?.message}</Helper>
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" required>
                Email
              </Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    color={errors.email ? "error" : "base"}
                    {...field}
                  />
                )}
              />
              <Helper color="error">{errors.email?.message}</Helper>
            </div>

            <div className="space-y-1">
              <Label htmlFor="phoneNumber" required>
                Phone Number
              </Label>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="08123456789"
                    color={errors.phoneNumber ? "error" : "base"}
                    {...field}
                  />
                )}
              />
              <Helper color="error">{errors.phoneNumber?.message}</Helper>
            </div>

            <div className="space-y-1">
              <Label htmlFor="password" required>
                Password
              </Label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    type="password"
                    placeholder="Your Password"
                    color={errors.password ? "error" : "base"}
                    {...field}
                  />
                )}
              />
              <Helper color="error">{errors.password?.message}</Helper>
            </div>

            <div className="space-y-1">
              <Label htmlFor="passwordConfirmation" required>
                Password Confirmation
              </Label>
              <Controller
                name="passwordConfirmation"
                control={control}
                render={({ field }) => (
                  <Input
                    type="password"
                    placeholder="Retype Password"
                    color={errors.passwordConfirmation ? "error" : "base"}
                    {...field}
                  />
                )}
              />
              <Helper color="error">
                {errors.passwordConfirmation?.message}
              </Helper>
            </div>

            <Button type="submit" color="primary" className="w-full">
              Sign Up
            </Button>
          </form>

          <div className="mt-8 mb-2 flex flex-col justify-between space-y-2 px-4 text-blue-500 sm:flex-row sm:items-center sm:space-y-0">
            <Link
              href={route("auth.login")}
              className="relative text-sm after:block after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Already have an account?
            </Link>
            <Link
              href={route("auth.forgotPassword")}
              className="relative text-sm after:block after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Forgot the Password?
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
