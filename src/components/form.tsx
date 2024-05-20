"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EyeOff, Eye } from "lucide-react";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Form() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const [isShow, setIsShow] = useState(false);
  const handlePassword = () => setIsShow(!isShow);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-zinc-800 mb-2">
          <TabsTrigger
            className="data-[state=active]:bg-zinc-950/85 data-[state=active]:text-zinc-50 font-medium text-sm text-zinc-400"
            value="account"
          >
            Entrar
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-zinc-950/85 data-[state=active]:text-zinc-50 font-medium text-sm text-zinc-400"
            value="createAccount"
          >
            Cadastre-se
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="h-96">
          <Card className="bg-zinc-950 border-white/10 text-zinc-50">
            <CardHeader>
              <CardTitle className="font-roboto font-bold text-3xl mb-1 text-zinc-50/90">
                Login
              </CardTitle>
              <CardDescription className="text-base mb-2">
                Insira suas credenciais para efefutar o login.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="mb-4 flex flex-col">
                <label
                  htmlFor="email"
                  className="font-bold text-sm mb-2 text-zinc-50/90"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Seu e-mail"
                  className="bg-transparent flex-1 border border-white/10 rounded-lg p-2 text-base font-normal"
                />
              </div>

              <div className="flex flex-col mb-3">
                <label
                  htmlFor="password"
                  className="font-bold text-sm mb-2 text-zinc-50/90"
                >
                  Senha
                </label>

                <div className="flex flex-1 text-sm border-white/10 rounded-lg p-2 w-full gap-2 border focus-within:outline focus-within:outline-1">
                  <input
                    id="password"
                    name="password"
                    type={isShow ? "text" : "password"}
                    placeholder="Sua senha"
                    className="bg-transparent w-full outline-none border-none text-base font-normal"
                  />

                  <span className="flex justify-center items-center">
                    <button
                      onClick={handlePassword}
                      type="button"
                      className="text-zinc-50 hover:text-zinc-50/80 duration-200 hover:scale-110"
                    >
                      {isShow && <EyeOff size={20} />}
                      {!isShow && <Eye size={20} />}
                    </button>
                  </span>
                </div>
              </div>

              <a
                href="#"
                target="_blank"
                className="font-semibold text-sm text-zinc-50/80 hover:underline"
              >
                Esqueceu sua senha?
              </a>
            </CardContent>

            <CardFooter>
              <Button type="submit" variant={"secondary"} className="w-full">
                Entrar
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="createAccount" className="h-96">
          <Card className="bg-zinc-950 border-white/10 text-zinc-50">
            <CardHeader>
              <CardTitle className="font-roboto font-bold text-3xl mb-1 text-zinc-50/90">
                Cadastre-se
              </CardTitle>
              <CardDescription className="text-base mb-2">
                Preencha os campos abaixo com suas informações para se registrar
              </CardDescription>
            </CardHeader>
            <TabsContent value="createAccount">
              <CardContent>
                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="name"
                    className="font-bold text-sm mb-2 text-zinc-50/90"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    className="bg-transparent flex-1 border border-white/10 rounded-lg p-2 text-base font-normal"
                  />
                </div>

                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="email"
                    className="font-bold text-sm mb-2 text-zinc-50/90"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Seu e-mail"
                    className="bg-transparent flex-1 border border-white/10 rounded-lg p-2 text-base font-normal"
                  />
                </div>

                <div className="flex flex-col mb-3">
                  <label
                    htmlFor="password"
                    className="font-bold text-sm mb-2 text-zinc-50/90"
                  >
                    Senha
                  </label>

                  <div className="flex flex-1 text-sm border-white/10 rounded-lg p-2 w-full gap-2 border focus-within:outline focus-within:outline-1">
                    <input
                      id="password"
                      name="password"
                      type={isShow ? "text" : "password"}
                      placeholder="Sua senha"
                      className="bg-transparent w-full outline-none border-none text-base font-normal"
                    />

                    <span className="flex justify-center items-center">
                      <button
                        onClick={handlePassword}
                        type="button"
                        className="text-zinc-50 hover:text-zinc-50/80 duration-200 hover:scale-110"
                      >
                        {isShow && <EyeOff size={20} />}
                        {!isShow && <Eye size={20} />}
                      </button>
                    </span>
                  </div>
                </div>
              </CardContent>
            </TabsContent>
            <CardFooter>
              <Button type="submit" variant={"secondary"} className="w-full">
                Cadastrar
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </form>
  );
}
