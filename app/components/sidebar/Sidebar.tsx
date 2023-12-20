import Link from "next/link";
import React from "react";

const Sidebar = () => {
    return (
        <div className="w-60 bg-black/5 rounded-xl h-[calc(100vh-140px)] px-6 py-12 flex flex-col gap-6">
            <Link href="/dashboard" className="font-medium">Dashboard</Link>
            <Link href="/faculties">Facultes</Link>
            <Link href="/departments">Departement</Link>
            <Link href="/classrooms">Promotions</Link>
            <Link href="/professors">Professeurs</Link>
            <Link href="/students">Etudiants</Link>
            <Link href="/courses">Cours</Link>
            <Link href="/cotations">Cotations</Link>
        </div>
    );
};

export default Sidebar;
