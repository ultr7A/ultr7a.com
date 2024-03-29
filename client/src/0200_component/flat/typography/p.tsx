import { Text } from "@react-three/drei";
import { Universe } from "../../../0000_concept/universe";

export interface TextPProps {
    children: React.ReactNode;
    color?: string;
    scaling?: number;
    position?: [number, number, number];
}

export const TextP = (p: TextPProps) => {

    return (
        <Text
            position={p.position || [0, 0, 0]}
            scale={[0.2 * (p?.scaling || 1), 0.2 * (p?.scaling || 1), 0.2 * (p?.scaling || 1)]}
            color={p?.color || Universe.colors._foreground} // default
            anchorX="left"   // default
            anchorY="middle" // default
        >
            {p?.children}
        </Text>
    );
}