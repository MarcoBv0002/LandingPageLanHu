# Tigre Azul — Mobile hero asset

Asset recomendado para reutilizar en código:

- `tigre-azul-mobile-hero-bg.webp` → fondo mobile optimizado. No contiene textos ni botones horneados.
- `tigre-azul-mobile-hero-bg.png` → versión PNG alta calidad.
- `tigre-azul-mobile-reference-mockup.png` → mockup visual de referencia, no usar como UI final.

## Uso recomendado

Usa la imagen solo como fondo. El logo, menú, títulos, botones y textos deben ir en HTML/CSS para que sea responsive, editable y accesible.

### Ejemplo Next.js

```tsx
import Image from 'next/image';

export function MobileHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#020813] text-white md:hidden">
      <Image
        src="/assets/tigre-azul-mobile-hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 px-6 pt-8">
        <header className="flex items-center justify-between">
          {/* Logo + hamburguesa */}
        </header>

        <div className="mt-24 max-w-[340px]">
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight">
            La actitud se entrena.<br />
            <span className="text-[#eca83c]">El carácter se forja.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/85">
            Artes marciales para niños, jóvenes y adultos.
          </p>

          <a
            href="#contacto"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-2xl bg-[#eca83c] px-7 font-black uppercase tracking-wide text-[#061022] shadow-lg shadow-[#eca83c]/25"
          >
            Reserva tu clase
          </a>
        </div>
      </div>
    </section>
  );
}
```

## Paleta sugerida

- Azul base: `#020813`
- Azul intenso: `#06306c`
- Azul acento: `#0084ff`
- Amarillo CTA: `#eca83c`
- Blanco texto: `#ffffff`

## Nota

Evita usar el mockup completo como una sola imagen de portada. Eso se ve bonito, pero luego es incómodo de mantener: no escala bien, no es accesible y Google no lee los textos.
