import { Button } from "@nextui-org/button";
import HomeNavbar from "../components/navbar/HomeNavbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen overflow-hidden relative">
            <HomeNavbar />

            {/* the circles image */}
            <Image
                src="/images/circles.svg"
                alt=""
                width={1313}
                height={1313}
                className="absolute w-[1313px] h-[1313px] right-0 top-0 z-0"
            />

            {/* the home page content */}
            <div className="max-w-screen-2xl mx-auto px-5 flex h-[calc(100vh-100px)]">
                <div className="self-center w-full pr-0 md:w-[50%] md:pr-6">
                    <h1 className="mb-4 lg:mb-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
                        Gérez vos documents universitaires électroniquement
                        maintenant!
                    </h1>
                    <p className="mb-4 lg:mb-6 md:text-lg">
                        Vous n&apos;avez plus à vous promener partout avec vos
                        documents universitaires, tout se passe électroniquement
                        maintenant! Créez un compte pour votre université pour
                        commencer et gérons vos documents !
                    </p>
                    <Button href="/register" as={Link} color="warning" size="lg" radius="full">
                        Commencer
                    </Button>
                </div>
                <div className="self-end w-full pl-0 md:w-[50%] md:pl-6 overflow-visible relative z-10 h-[700px]">
                    <Image
                        src="/images/bannerImage.png"
                        alt=""
                        width={1200}
                        height={1500}
                        className="absolute left-0 bottom-0 w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
