import React from "react";
import AdminStats from "./AdminStats";

const MainContent = () => {
    return (
        <div className="w-[calc(100%-280px)]">
            <div className="mb-10">
                <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-3">
                    Heureux de vous revoir Mr Doe !
                </h1>
                <p className="text-lg">Passez une excellente journée !</p>
            </div>

            <AdminStats />
        </div>
    );
};

export default MainContent;
