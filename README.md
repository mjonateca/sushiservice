# Sushi Service Landing

Landing one-page premium para Sushi Service, restaurante de sushi/comida japonesa en Envigado, Antioquia.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui-style local components
- Framer Motion
- Deploy-ready en Vercel

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Configuracion para deploy

1. Crea el proyecto en Vercel.
2. Define `NEXT_PUBLIC_SITE_URL` con el dominio final.
3. Reemplaza los placeholders del menu, combos y galeria en `data/sushi-service.ts`.
4. Valida el numero de WhatsApp antes de publicar campanas.
5. Agrega fotos reales solo cuando el restaurante las autorice.

## Donde editar contenido

Todo el contenido comercial esta centralizado en:

```txt
data/sushi-service.ts
```

No se incluyo email porque el CRM indica "No encontrado". Tampoco se inventaron platos, precios ni fotos reales.
