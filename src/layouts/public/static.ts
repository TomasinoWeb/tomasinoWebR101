import { implementLayoutStatic } from "@scinorandex/layout";
import { PublicLayoutOptions } from "./common";

export const PublicLayoutBackend = implementLayoutStatic<PublicLayoutOptions>({
});

export const createPublicStaticProps = PublicLayoutBackend.use;
