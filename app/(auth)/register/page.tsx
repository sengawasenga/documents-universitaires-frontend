"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { useState } from "react";
import Link from "next/link";

const accountType = [
    {
        id: 1,
        label: "Etudiant",
        value: "student",
    },
    {
        id: 2,
        label: "Professeur",
        value: "professor",
    },
    {
        id: 3,
        label: "Propriétaire d'Université",
        value: "owner",
    },
];

const RegisterPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // Convert form data to JSON
        const jsonData: { [key: string]: string } = {};
        formData.forEach((value, key) => {
            jsonData[key] = value.toString();
        });

        console.log('json data:', jsonData);

        try {
            setError(null);
            setIsLoading(true);

            // Make API request with JSON data
            // const response = await fetch("your-api-endpoint-url", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(jsonData),
            // });

            // if (response.ok) {
            //     // Handle successful response
            //     console.log("Registration successful");
            // } else {
            //     // Handle error response
            //      setError(errorData.message || 'Registration failed')
            //     console.error("Registration failed");
            // }
        } catch (error) {
            console.error("Error during registration:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-screen-md mx-auto py-10 px-5">
            <h1 className="mb-6 lg:mb-10 font-semibold text-2xl md:text-4xl lg:text-5xl">
                Créez un compte !
            </h1>

            <form
                onSubmit={handleSubmit}
                className="flex gap-3 flex-col items-center mb-6 lg:mb-10"
            >
                <Select
                    label="Type de compte"
                    className="max-w-xs"
                    radius="full"
                    name="accountType"
                >
                    {accountType.map((account) => (
                        <SelectItem key={account.value} value={account.value}>
                            {account.label}
                        </SelectItem>
                    ))}
                </Select>
                <Input
                    className="max-w-xs"
                    type="text"
                    label="Nom d'utilisateur"
                    radius="full"
                    name="username"
                />
                <Input
                    className="max-w-xs"
                    type="email"
                    label="Email"
                    radius="full"
                    name="email"
                />
                <Input
                    className="max-w-xs"
                    type="password"
                    label="Mot de passe"
                    radius="full"
                    name="password"
                />
                <Input
                    className="max-w-xs"
                    type="password"
                    label="Confirmer mot de passe"
                    radius="full"
                />
                <Button
                    className="max-w-xs"
                    color="warning"
                    size="lg"
                    radius="full"
                    type="submit"
                    isLoading={isLoading}
                >
                    Créer un compte
                </Button>

                {error && (
                    <p className="text-red-500 text-center text-sm mb-4">
                        {error}
                    </p>
                )}
            </form>

            <p className="text-center">
                Vous avez déjà un compte ?{" "}
                <Link href="/login" className="font-medium">
                    Connectez-vous
                </Link>
            </p>
        </div>
    );
};

export default RegisterPage;
