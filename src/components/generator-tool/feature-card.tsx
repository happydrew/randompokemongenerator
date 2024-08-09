import React from "react";
import NextLink from "next/link";
import ExportedImage from "next-image-export-optimizer";

interface FeatureCardProps {
    htmlId: string;
    withBackground: boolean;
    title: string;
    content: string;
    learnMoreLink?: string;
    imageUrl?: string;
    imageAlt?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    htmlId,
    withBackground,
    title,
    content,
    learnMoreLink,
    imageUrl,
    imageAlt
}: FeatureCardProps) => {
    return (
        <div className={`feature-card${withBackground ? " feature-background" : ""}`} id={htmlId}>
            <div className="feature-desc feature-block">
                <h3 className="feature-desc-title">{title}</h3>
                <p className="feature-desc-content">
                    {content}
                    {learnMoreLink && <NextLink href={learnMoreLink}>Learn More</NextLink>}
                </p>
            </div>
            {imageUrl && <ExportedImage src={imageUrl} alt={imageAlt!} className="feature-block" width={600} height={400} />}
        </div>
    )
}

export { FeatureCard };
export type { FeatureCardProps };