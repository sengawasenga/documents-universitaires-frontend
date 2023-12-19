"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { useState } from "react";
import Link from "next/link";

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
                Connectez-vous !
            </h1>

            <form
                onSubmit={handleSubmit}
                className="flex gap-3 flex-col items-center mb-6 lg:mb-10"
            >
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
                <Button
                    className="max-w-xs"
                    color="warning"
                    size="lg"
                    radius="full"
                    type="submit"
                    isLoading={isLoading}
                >
                    Se connecter
                </Button>

                {error && (
                    <p className="text-red-500 text-center text-sm mb-4">
                        {error}
                    </p>
                )}
            </form>

            <p className="text-center">
                Vous n&apos;avez pas de compte ?{" "}
                <Link href="/register" className="font-medium">
                    Créez un compte !
                </Link>
            </p>
        </div>
    );
};

export default RegisterPage;
