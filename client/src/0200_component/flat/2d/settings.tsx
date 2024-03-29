import { useState } from "react";
import { VisualThemeManager } from "../../../1000_aesthetic/visual-theme.manager";
import { AntialiasingButton } from "./antialiasing-button";
import { AnimationButton } from "./animation-button";
import { XRRenderScaleButton } from "./xr-render-scale-button";

export function Settings() {
    
    const [settingsOpen, settingsOpenSet] = useState(false);
    function settingsOpenToggle() {
        settingsOpenSet(!settingsOpen);
    }

    if (settingsOpen) {
        
        return (
            <div className="ui_2d__settings table"
                style={{backgroundColor: 'rgba(0,0,0, 0.2)'}}>
                <div className="row">
                    <div className="cell">
                        <VisualThemeManager />
                    </div>
                    <div className="cell">
                        Lighting
                    </div>
                    <div className="cell">
                        <input  type="button" 
                                value="✕" 
                                onClick={() => settingsOpenToggle()} 
                                className="ui_2d__button close-button"
                                style={{marginLeft: "1em"}}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="cell">
                        <AntialiasingButton />
                    </div>
                    <div className="cell">
                        Quality
                    </div>
                    <div className="cell">
                    </div>
                </div>
                <div className="row">
                    <div className="cell">
                        <AnimationButton />
                    </div>
                    <div className="cell">
                        Animation
                    </div>
                    <div className="cell">

                    </div>
                </div>
                <div className="row">
                    <div className="cell">
                        <XRRenderScaleButton />
                    </div>
                    <div className="cell">
                        XR Render Scale
                    </div>
                    <div className="cell">

                    </div>
                </div>
            </div>
        )
    }


    return (
        <button className={'ui_2d__button'}
                    style={{backgroundColor: 'rgba(0,0,0, 0.1)'}}
                  onClick={() => settingsOpenToggle()} 
        >
            ⚙
        </button>
    )


}