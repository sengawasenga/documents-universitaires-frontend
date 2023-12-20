import MainContent from "@/app/components/dashboard/MainContent";
import RootNavbar from "@/app/components/navbar/RootNavbar";
import Sidebar from "@/app/components/sidebar/Sidebar";
import React from "react";

const DashboardPage = () => {
    return (
        <div>
            <RootNavbar />

            <main className="max-w-screen-2xl mx-auto px-5">
                <div className="min-h-[calc(100vh-100px)] flex gap-10">
                    {/* the sidebar */}
                    <Sidebar />

                    {/* the main-content */}
                    <MainContent />
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
