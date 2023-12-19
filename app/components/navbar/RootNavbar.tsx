import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import { Search, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

const RootNavbar = () => {
    return (
        <div className="w-full h-[100px] d-flex max-w-screen-2xl mx-auto px-5 flex items-center justify-between">
            <Link href={"/"}>
                <Image
                    src="/images/logo.svg"
                    width={200}
                    height={52}
                    alt="Logo documents universitaires App"
                    draggable="false"
                />
            </Link>
            <div className="flex items-center gap-2">
                <Button isIconOnly radius="full" as={Link} href="/search" aria-label="Search">
                    <Search size={20} strokeWidth={1} />
                </Button>

                <Button isIconOnly radius="full" as={Link} href="/profile" aria-label="Search">
                    <UserRound size={20} strokeWidth={1} />
                </Button>
            </div>
        </div>
    );
};

export default RootNavbar;
