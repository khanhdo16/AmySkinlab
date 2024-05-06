import { LOCATIONS } from "@/components/util/constants";
import Section from "../Section";
import LocationCard from "./LocationCard";

export default function Locations() {
    return (
        <Section name="Chi nhánh của Amy">
            <div className="grid grid-cols-1 gap-primary-mobile lg:grid-cols-2 lg:gap-primary">
                <LocationCard
                    iframeSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1782583685194!2d105.81187611209006!3d21.0255522878055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abff21de32cf%3A0xc28eb92a72f2eec8!2sAmy%20SkinLab!5e0!3m2!1svi!2sus!4v1703043721180!5m2!1svi!2sus"
                    name={LOCATIONS.HaNoi.Name}
                    address={LOCATIONS.HaNoi.Address}
                />
                <LocationCard
                    iframeSrc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14869.184424950277!2d105.5591829!3d21.299313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134f1d16c270283%3A0x95e2f9027d3ffc59!2sAmy%20SkinLab!5e0!3m2!1svi!2sus!4v1703220556241!5m2!1svi!2sus"
                    name={LOCATIONS.VinhPhuc.Name}
                    address={LOCATIONS.VinhPhuc.Address}
                />
            </div>
        </Section>
    );
}
