import Image from "next/image";
import RepeatingHeader from '../../components/RepeatHeader';
import styles from './index.module.scss'
import AboutBox from "../../components/AboutBox";
import { PublicLayoutFrontend } from "../../layouts/public/frontend";
import { PublicLayoutBackend } from "../../layouts/public/static";

const aboutBoxContents = [
    {
        iconURL: "/assets/GHIBLI ICONS/totoro.png",
        imageURL: "/assets/about/departments.jpg",
        title: "Departments",
        linkURL: "/about/departments"
    },
    {
        iconURL: "/assets/GHIBLI ICONS/calcifer v2.png",
        imageURL: "/assets/about/the people.jpg",
        title: "The People",
        linkURL: "/about/people" // idk if this is correct
    },
    {
        iconURL: "/assets/GHIBLI ICONS/susuwatari v2.png",
        imageURL: "/assets/about/culture.jpg",
        title: "Org Culture",
        linkURL: "/org" // double check nalang
    }
]

interface PageProps {}

export default PublicLayoutFrontend.use<PageProps>(() => {
  return {
    header: "full",
    footer_disable: false,
    children: 
    <div className={styles.container}>
        <section>
            <RepeatingHeader title="About"/>
            <span className={styles.hero}>
                <Image 
                        alt="tomweb" 
                        src={"/assets/about/gen_assembly.png"}
                        width={1440}
                        height={376}        
                />
            </span>
        </section>
        

        <section className={`${styles.flexCentered} ${styles.flexColumn}`}>
            <h2 className={styles.title}>
                <div className={styles.subtitle}>WHAT IS </div> TOMASINOWEB? {/* the formatting here is important*/}
            </h2>
            <p className={styles.description}>
                <strong>TomasinoWeb</strong> is the premier digital media organization of the University of Santo Tomas joined by students who are immensely interested in multimedia journalism.
            </p>
            <p className={styles.description}>
            Its primary goal as a student publication is to deliver relevant information to the Thomasian community through online media.
            </p>
        </section>

        <section className={`${styles.links} ${styles.flexCentered}`}>
            {
                aboutBoxContents.map(
                    (box) => (
                        <AboutBox 
                            iconURL={box.iconURL} 
                            imageURL={box.imageURL} 
                            title={box.title} 
                            linkURL={box.linkURL}                        
                        />
                    )
                )
            }
        </section>
    </div>
  };
});

export const getStaticProps = PublicLayoutBackend.use<PageProps>({});
