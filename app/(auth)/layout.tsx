import HomeNavbar from "../components/navbar/HomeNavbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <HomeNavbar />
            <div className="max-w-screen-2xl mx-auto px-5 flex items-center justify-center h-[calc(100vh-100px)]">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
