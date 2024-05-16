import { Button } from "@/components/ui/button";
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card";
import { ViewPaasword } from "@/components/viewPaasword";
import { Search, SearchCheck } from "lucide-react";

export default function Login() {
return (

<form className="w-full min-h-screen flex items-center justify-center">
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
              className="bg-transparent flex-1 text-sm border border-white/10 rounded-lg p-2"
            />
</div>

          <div className="flex flex-col mb-3">
            <label
              htmlFor="password"
              className="font-bold text-sm mb-2 text-zinc-50/90"
            >
              Senha
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Sua senha"
              className="bg-transparent flex-1 text-sm border border-white/10 rounded-lg p-2 w-full"
            />

            <SearchCheck />
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
          <Button type="submit" className="w-full" variant={"secondary"}>
            Entrar
          </Button>
        </CardFooter>
      </Card>

      {/* <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
        <input
          type="search"
          placeholder="Buscar participante..."
          className="bg-transparent flex-1 p-0 text-sm"
        />
        <Search className="size-4 text-emerald-300" />
      </div> */}

      {/* <ViewPaasword className="absolute" /> */}
    </form>

);
}

---

import { Button } from "@/components/ui/button";
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card";
import { ViewPaasword } from "@/components/viewPaasword";

export default function Login() {
return (
<form className="w-full min-h-screen flex items-center justify-center">
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
              className="bg-transparent flex-1 text-sm border border-white/10 rounded-lg p-2"
            />
</div>

          <div className="flex flex-col mb-3">
            <label
              htmlFor="password"
              className="font-bold text-sm mb-2 text-zinc-50/90"
            >
              Senha
            </label>

            <div className="group flex flex-1 text-sm border border-white/10 rounded-lg p-2 w-full gap-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Sua senha"
                className="bg-transparent w-full outline-none border-none"
              />

              <span className="flex justify-center items-center">
                <ViewPaasword />
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
          <Button type="submit" className="w-full" variant={"secondary"}>
            Entrar
          </Button>
        </CardFooter>
      </Card>
    </form>

);
}
