import { Image } from "@nextui-org/image"
import Link from "next/link"

const HomeNavbar = () => {
  return (
      <div className="w-full h-[100px] d-flex max-w-screen-2xl mx-auto px-5 flex items-center justify-between">
          <Link href={'/'}>
              <Image
                  src="/images/logo.svg"
                  width={200}
                  height={52}
                  alt="Logo documents universitaires App"
                  draggable="false"
              />
          </Link>
      </div>
  );
}

export default HomeNavbar