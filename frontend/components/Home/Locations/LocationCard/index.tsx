export interface ILocationCardProps {
    iframeSrc: string;
    name: string;
    address: string;
}

export default function LocationCard({ iframeSrc, name, address }: ILocationCardProps) {
    return (
        <div className="border-2 border-primary bg-white p-primary-mobile lg:p-primary">
            <h3 className="w-full text-center text-2xl font-bold text-primary lg:text-3xl">{name}</h3>
            <span className="mb-primary-mobile block w-full text-center lg:mb-primary">{address}</span>
            <iframe
                src={iframeSrc}
                width="100%"
                className="h-[250px] lg:row-start-2 lg:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
