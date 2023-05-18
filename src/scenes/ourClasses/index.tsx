import {SelectedPage, ClassType} from "@/shared/types";
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import Class from "./Class"

const classes = [
    {
        name: "Strength Circuit",
        description: "Build lean muscle and increase overall strength in our Strength Circuit class. " +
            "Using a combination of resistance training and bodyweight exercises, " +
            "this class targets different muscle groups for a full-body workout. " +
            "With the guidance of our expert trainers, you'll improve muscular endurance, " +
            "enhance functional strength, and sculpt your physique.",
        image: image1,
    },
    {
        name: "HIIT Blast",
        description: "Ignite your metabolism and push your limits with our high-intensity interval training (HIIT) class. " +
            "Combining bursts of intense exercises with short recovery periods, " +
            "this heart-pumping workout will torch calories, improve cardiovascular fitness, " +
            "and boost overall strength.",
        image: image2,
    },
    {
        name: "Yoga Flow",
        description: "Find balance and inner peace in our Yoga Flow class. " +
            "Through a series of fluid movements, controlled breathing, and mindful meditation, " +
            "you'll improve flexibility, enhance mind-body connection, and promote relaxation. " +
            "Suitable for all fitness levels, " +
            "this class offers a serene escape from the demands of daily life.",
        image: image3,
    },
    {
        name: "Dance Fusion",
        description: "Let loose and groove to the rhythm in our Dance Fusion class. " +
            "This energetic and fun-filled session combines various dance styles with cardio movements to enhance coordination," +
            "endurance, and core stability. Get ready to break a sweat while having a blast on the dance floor.",
        image: image4,
    },
    {
        name: "Pilates Fusion",
        description: "Strengthen your core, improve flexibility, " +
            "and enhance overall body alignment in our Pilates Fusion class. " +
            "Combining traditional Pilates exercises with elements of strength training and stretching, " +
            "this low-impact workout focuses on developing a strong and stable core " +
            "while toning and lengthening your muscles.",
        image: image5,
    },
    {
        name: "Mindful Meditation",
        description: "Find tranquility and cultivate inner peace in our Mindful Meditation class. " +
            "Led by experienced instructors, this class offers a guided journey to relax your mind," +
            " reduce stress, and enhance mental clarity. Through breathing exercises, visualization," +
            " and mindfulness techniques, you'll discover the power of stillness " +
            "and learn valuable tools for managing everyday challenges. Take this opportunity to recharge, " +
            "restore balance, and nurture your overall well-being.",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
    return <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, scale: 0},
                    visible: { opacity: 1, scale: 1},
                }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">Join a dynamic community of fitness enthusiasts as you challenge your limits
                        and achieve new heights together. Led by our skilled instructors,
                        each class is designed to ignite your energy, improve your endurance,
                        and push you towards your fitness goals.
                        From high-intensity interval training to uplifting dance workouts and calming yoga sessions,
                        our diverse range of group classes caters to all fitness levels and preferences.
                        Experience the electrifying atmosphere, feed off the collective energy,
                        and unlock your full potential as you sweat, smile,
                        and thrive in our inspiring group workout sessions.</p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>

        </motion.div>
    </section>;
};
export default OurClasses;
