import { Text } from "@react-three/drei";
import { Universe } from "../../../0000_concept/universe";

export interface TextH3Props {
    children: React.ReactNode;
    color?: string;
    scaling?: number;
    position?: [number, number, number];
    
    justify?: "left" | "center" | "right";

    meshRef?: React.RefObject<THREE.Mesh>;

    onPointerOver?: () => void;
    onPointerOut?: () => void;

}

export const TextH3 = (p: TextH3Props) => {
    return (
        <Text      ref={p.meshRef}
              position={p.position || [0, 0, 0]}
                 scale={[0.25 * (p.scaling||1) , 0.25 * (p.scaling||1), 0.25 * (p.scaling||1)]}
                 color={p.color || Universe.colors._foreground} // default
               anchorX={p.justify || "left"}
               anchorY="middle" // default
               onPointerOver={(event) => p.onPointerOver && p.onPointerOver()}
                onPointerOut={(event) => p.onPointerOut && p.onPointerOut()}
        >
            {p.children}    
        </Text>
    )
}