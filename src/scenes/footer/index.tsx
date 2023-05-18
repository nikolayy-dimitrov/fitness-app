import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed commodo eros sed diam gravida, id aliquet risus interdum.
                        Vestibulum sed mauris at lorem euismod rhoncus.
                    </p>
                    <p>FitFUSION© ALL RIGHTS RESERVED</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5"><a href="https://instagram.com">Instagram</a></p>
                    <p className="my-5"><a href="https://facebook.com">Facebook</a></p>
                    <p><a href="https://linkedin.com/">LinkedIn</a></p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p>(555)123-4567</p>

                </div>

            </div>
        </footer>
    );
};
export default Footer;
