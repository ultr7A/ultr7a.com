import { ReactNode } from "react";
import { MagneticField } from "../../0700_life/physical/magnetic-field";
import { SyntaxHighlight } from "../../1000_aesthetic/syntax-highlight";

export interface SkyIslandProps {
    children?: ReactNode
    position: [number, number, number]
}

export const SkyIsland = (p: SkyIslandProps) => {
    return (
        <group position={p.position}>

            { p.children }

            <MagneticField>
                <mesh position={[5, 2, 5]}>
                    <boxBufferGeometry attach="geometry" args={[3,2,3]} />
                    <meshLambertMaterial attach="material" color={SyntaxHighlight.Structure} />
                </mesh>
            </MagneticField>

            <MagneticField>
                <mesh>
                    <boxBufferGeometry  attach="geometry" args={[10,2,10]} />
                    <meshLambertMaterial attach="material" color={SyntaxHighlight.Structure} />
                </mesh>
            </MagneticField>
            <MagneticField>
                <mesh position={[-3, 0, -7]}>
                    <boxBufferGeometry attach="geometry" args={[3,2,3]} />
                    <meshLambertMaterial attach="material" color={SyntaxHighlight.Structure} />
                </mesh>
            </MagneticField>
            <MagneticField>
                <mesh position={[3, 0, 7]}>
                    <boxBufferGeometry attach="geometry" args={[3,2,3]} />
                    <meshLambertMaterial attach="material" color={SyntaxHighlight.Structure} />
                </mesh>
            </MagneticField>
        </group>
    )
}