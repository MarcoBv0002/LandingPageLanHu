import { sectionNavItems } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function SectionAnchorTargets() {
  const remainingSections = sectionNavItems.filter(
    (item) =>
      item.href !== "#quienes-somos" &&
      item.href !== "#disciplinas" &&
      item.href !== "#profesores"
  );

  return (
    <section
      aria-label="Secciones de Tigre Azul"
      className="bg-brand-950 py-14 text-white md:py-20 lg:py-0"
    >
      <Container className="border-y border-white/10">
        {remainingSections.map((item, index) => (
          <section
            id={item.href.slice(1)}
            key={item.href}
            className="scroll-mt-[104px] border-b border-white/10 py-6 last:border-b-0 lg:flex lg:min-h-[100svh] lg:scroll-mt-[150px] lg:items-center lg:py-0"
            aria-labelledby={`${item.href.slice(1)}-title`}
          >
            <div className="grid gap-4 md:grid-cols-[96px_1fr] md:gap-8 lg:w-full">
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
                {"subItems" in item ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.subItems.map((subItem) => (
                      <article
                        id={subItem.href.slice(1)}
                        key={subItem.href}
                        className="scroll-mt-[104px] rounded-[12px] border border-[#0b65ff]/35 bg-[#061f59]/[0.24] p-4 lg:scroll-mt-[150px]"
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-black uppercase tracking-normal text-white">
                            {subItem.label}
                          </h3>
                          {subItem.principal ? (
                            <span className="rounded-full border border-[#0b65ff]/45 px-3 py-1 text-[10px] font-black uppercase tracking-normal text-[#7fb0ff]">
                              Principal
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[#b8c6e8]">
                          {subItem.description}
                        </p>
                      </article>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ))}
      </Container>
    </section>
  );
}
