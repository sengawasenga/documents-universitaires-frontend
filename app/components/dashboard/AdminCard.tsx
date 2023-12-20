import React from "react";

interface Props {
    icon: any;
    text: string;
    number: number;
}

const AdminCard = ({icon, text, number}: Props) => {
    return (
        <div className="rounded-lg border border-gray-300 px-5 py-10 flex gap-3 items-start w-full">
            <div className="border rounded-full border-warning-300 flex items-center justify-center w-12 h-12">
                {icon}
            </div>
            <div>
                <p className="text-5xl font-semibold">{number}</p>
                <p className="opacity-60">{text}</p>
            </div>
        </div>
    );
};

export default AdminCard;
