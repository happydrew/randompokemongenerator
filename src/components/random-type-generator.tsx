import React, { useState, useEffect } from "react";
import Head from "next/head";
import { generateRandomType } from "@/code/generator-tool/utils";
import { GeneratorButton } from "./GeneratorButton";


const RandomTypeGenerator = () => {
    const [generatedType, setGeneratedType] = useState("");

    const handleClick = () => {
        const types: string[] = generateRandomType("r")
        setGeneratedType(types.join(" / "));
    }

    // Generate a random type on page load  
    useEffect(() => {
        handleClick()
    }, [])
    return (
        <div className="flex flex-col items-center justify-center py-2">
            <main className="flex flex-col items-center justify-center px-0 w-full flex-1 text-center">
                <h1 className="text-2xl font-bold mb-8">
                    Random Pokemon Type Generator
                </h1>
                <GeneratorButton onClick={handleClick} />
                <div className="mt-4 p-2 border border-gray-300 rounded font-mono font-bold text-2xl">
                    {generatedType}
                </div>
            </main>
        </div>
    )
};

export { RandomTypeGenerator };