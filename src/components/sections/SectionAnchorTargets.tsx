import { sectionNavItems } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function SectionAnchorTargets() {
  const remainingSections = sectionNavItems.filter(
    (item) => item.href !== "#quienes-somos"
  );

  return (
    <section
      aria-label="Secciones de Tigre Azul"
      className="bg-brand-950 py-14 text-white md:py-20"
    >
      <Container className="border-y border-white/10">
        {remainingSections.map((item, index) => (
          <section
            id={item.href.slice(1)}
            key={item.href}
            className="scroll-mt-[104px] border-b border-white/10 py-6 last:border-b-0 lg:scroll-mt-[150px] lg:py-8"
            aria-labelledby={`${item.href.slice(1)}-title`}
          >
            <div className="grid gap-4 md:grid-cols-[96px_1fr] md:gap-8">
              <span className="text-sm font-black text-brand-yellow">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="max-w-4xl">
                <h2
                  id={`${item.href.slice(1)}-title`}
                  className="text-2xl font-black tracking-normal md:text-3xl"
                >
                  {item.label}
                </h2>
                {"description" in item ? (
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#b8c6e8] md:text-base">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          </section>
        ))}
      </Container>
    </section>
  );
}
