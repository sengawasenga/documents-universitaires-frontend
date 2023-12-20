import React from "react";
import AdminCard from "./AdminCard";
import { GraduationCap, Shapes, UserRound } from "lucide-react";

const AdminStats = () => {
    return (
        <div className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            <AdminCard
                text="Facultés"
                number={5}
                icon={<GraduationCap color="#F5A524" strokeWidth={1} />}
            />
            <AdminCard
                text="Départements"
                number={15}
                icon={<GraduationCap color="#F5A524" strokeWidth={1} />}
            />
            <AdminCard
                text="Promotions"
                number={30}
                icon={<Shapes strokeWidth={1} color="#F5A524" />}
            />
            <AdminCard
                text="Professeurs"
                number={40}
                icon={<UserRound strokeWidth={1} color="#F5A524" />}
            />
            <AdminCard
                text="Etudiants"
                number={750}
                icon={<UserRound strokeWidth={1} color="#F5A524" />}
            />
        </div>
    );
};

export default AdminStats;
