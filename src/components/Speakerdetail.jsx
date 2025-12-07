import React from "react";
import { useParams } from "react-router-dom";

export default function SpeakerDetail() {
    const { id } = useParams();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">
                Speaker Details: {id}
            </h1>
        </div>
    );
}
