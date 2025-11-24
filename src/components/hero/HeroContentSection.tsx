'use client';

import Link from 'next/link';

export function HeroContentSection() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
            {/* Main Headline */}
            <h1 className="mb-4 max-w-4xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl pointer-events-none">
                Cómo Programar en Java usando estructuras de datos
            </h1>

            {/* Sub-headline */}
            <p className="mb-8 max-w-2xl text-base text-white/90 md:text-lg pointer-events-none">
                Domina los conceptos fundamentales de programación. Este portafolio
                reúne temas esenciales desde recursividad hasta estructuras de datos
                avanzadas, diseñado para tu crecimiento profesional.
            </p>

             {/* CTA Button */}
             <Link
                 href="/temas"
                 className="pointer-events-auto rounded-lg border border-white/30 bg-black px-8 py-4 text-base font-semibold text-white transition-all hover:bg-zinc-900 hover:border-white/50 hover:shadow-lg"
             >
                 Ver Temas
             </Link>
        </div>
    );
}

