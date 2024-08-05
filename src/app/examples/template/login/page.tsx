"use client";

import Button from "@/components/buttons/button";
import Helper from "@/components/forms/helper";
import Input from "@/components/forms/input";
import Label from "@/components/forms/label";
import Card, { CardBody, CardHeader } from "@/components/ui/card";
import route from "@/utils/router";
import { LoginSchema, LoginValidation } from "@/validations/auth.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginValidation) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50 md:items-baseline md:pt-[7%]">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="space-y-4 text-center">
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-4">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
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
              <Helper color="error">
                {errors.email && errors.email.message}
              </Helper>
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
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
              <Helper color="error">
                {errors.password && errors.password.message}
              </Helper>
            </div>

            <Button type="submit" color="primary" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-8 mb-2 flex flex-col justify-between space-y-2 px-4 text-blue-500 sm:flex-row sm:items-center sm:space-y-0">
            <Link
              href={route("auth.register")}
              className="relative text-sm after:block after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Don&apos;t have an account?
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
