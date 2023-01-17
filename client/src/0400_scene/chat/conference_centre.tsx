import { Html } from "@react-three/drei";
import { Sequence } from "../../0100_element/200_sequence/sequence";
import { TextDiv } from "../../0200_component/flat/typography/div";
import { TextH1 } from "../../0200_component/flat/typography/h1";
import { GroupMain } from "../../0200_component/flat/typography/main";

export let conference_centre = () => {
    return (
        <group>
            <TextH1 position={[0,2.4,-1.5]}>Hi</TextH1>
            <GroupMain>
                <Sequence direction="z">
                    <TextDiv>
                        My name is ultr7a.com 
                    </TextDiv>
                    
                    <TextDiv>    
                        Let's chat!
                    </TextDiv>
                    
                    <TextDiv>    
                        Send funny questions to ultr7a@gmail.com
                    </TextDiv>

                    <TextDiv>    
                        I'll answer them as a song ♫
                    </TextDiv>

                    <TextDiv>    
                        Follow me on Twitter @ultr7A
                    </TextDiv>
                    
                    <TextDiv>        
                        I like to make sounds <Html><a href="https://soundcloud.com/ultr7a">here</a>.</Html>
                        I love attaching <Html><a href="https://github.com/ultr7A">things</a></Html> to stuff.
                    </TextDiv>    
                </Sequence>
            </GroupMain>
        </group>       
    );
}