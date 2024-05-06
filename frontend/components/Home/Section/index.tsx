export interface ISectionProps {
    name: string;
    children: React.ReactNode;
}

export default function Section({ name, children }: ISectionProps) {
    return (
        <section className="mt-12 w-full">
            <h2 className="mb-2 pb-primary-mobile text-center text-2xl font-bold text-primary md:pb-primary md:text-section-heading">{name.toUpperCase()}</h2>
            {children}
        </section>
    );
}
