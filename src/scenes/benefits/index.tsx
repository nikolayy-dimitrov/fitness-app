import {BenefitType, SelectedPage} from "@/shared/types";
import {HomeModernIcon, UserGroupIcon, LightBulbIcon} from "@heroicons/react/24/solid";
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "@/scenes/benefits/Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Cutting-Edge Facilities",
        description: "Experience fitness like never before with our state-of-the-art facilities. " +
            "Equipped with the latest technology and modern amenities, " +
            "our gym offers an unrivaled environment for your workouts. " +
            "From advanced cardio machines to premium strength training equipment, " +
            "unleash your potential in a space designed to inspire and elevate your fitness journey.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Unlimited Class Variety",
        description: "Immerse yourself in a world of fitness possibilities with our extensive range of diverse classes. " +
            "From high-intensity cardio to peaceful yoga sessions and everything in between, " +
            "our gym offers a wide selection of classes to cater to all interests and fitness levels. " +
            "With expert instructors and a supportive community, " +
            "you'll never run out of exciting ways to challenge yourself and achieve your fitness goals.",
    },
    {
        icon: <LightBulbIcon className="h-6 w-6" />,
        title: "Elite Fitness Coaching",
        description: "Gain an edge in your fitness journey with our team of expert and pro trainers. " +
            "With their extensive knowledge, personalized guidance, and unwavering support, " +
            "you'll tap into your full potential and achieve remarkable results. " +
            "Whether you're a beginner or a seasoned athlete, " +
            "our trainers are dedicated to helping you surpass your limits, optimize your workouts, " +
            "and make your fitness goals a reality.",
    },
];

const container = {
    hidden: {

        },
    visible: {
        transition: {staggerChildren: 0.2},
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >

            {/* HEADER */}
            <motion.div
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                }}
            >
                <HText>UNLEASH.TRANSCEND.EXCEL.</HText>
                <p className="my-5 text-sm">Experience the epitome of fitness excellence with our world-class equipment,
                    exceptional trainers, and invigorating classes.
                    We are dedicated to ensuring your success in reaching your ultimate fitness goals effortlessly.
                    With genuine care for each and every member,
                    we create an environment that nurtures your well-being,
                    making your fitness journey a truly remarkable and rewarding experience.</p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: {opacity: 0, x: -50},
                                    visible: {opacity: 1, x: 0},
                                }}
                            >
                                <HText>
                                    IGNITE YOUR INNER FIRE, EMBRACE FITNESS{" "}
                                    <span className="text-primary-500">FUSION</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESC */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2 , duration: 0.5 }}
                        variants={{
                            hidden: {opacity: 0, x: 50},
                                visible: {opacity: 1, x: 0},
                        }}
                    >
                        <p className="my-5">We are not just a gym; we are a thriving community of individuals passionate
                            about embracing a healthier lifestyle.
                            Our state-of-the-art facilities, equipped with cutting-edge equipment,
                            provide the perfect environment for your workouts.
                            Whether you're a beginner or a seasoned fitness enthusiast,
                            our team of dedicated trainers is ready to customize a program that suits your goals
                            and abilities. From intense group classes to personalized one-on-one sessions,
                            we offer a variety of options to keep you motivated and engaged on your path to success.</p>
                        <p className="mb-5">Our holistic approach integrates wellness services such as nutrition counseling and recovery
                            therapies to complement your fitness routine. We believe in creating a supportive and
                            inclusive environment where you can connect with like-minded individuals who share your
                            passion for self-improvement. From the moment you step through our doors,
                            you'll feel the energy and enthusiasm that permeates our vibrant community.</p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
};
export default Benefits;
