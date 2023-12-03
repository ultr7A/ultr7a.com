import React, { createContext, useEffect, useRef } from 'react';

import { Route, Router, Switch } from "wouter";

import './App.css';

import { Controllers, Hands, useController, useXR, VRButton, XR, XREvent, XRManagerEvent } from '@react-three/xr';
import { Canvas, useFrame } from '@react-three/fiber';

import { ResizeObserver } from '@juggle/resize-observer';

import { ThreeJSContext } from './0000_api/three-ctx';
import { Universe } from './0000_concept/universe';
import { ResizeCanvas } from './0000_concept/resize-canvas';
import { themeIdx, VisualThemeManager } from './1000_aesthetic/visual-theme.manager';

import { RouterNavigationSurface } from './0200_component/flat/navigation-surface/RouterNavigationSurface';

import { NoToneMapping } from 'three';
import { ScrollingBuffer } from './0200_component/meta/scrolling-buffer';
import { Settings } from './0200_component/flat/2d/settings';
import { settingsState } from './0000/settings-state';
import { HudPortal } from './0200_component/hud/hud.portal';
import { R3FDiagnosticText } from './0000/r3f-debug';
import { XRControlls } from './0700_life/control/xr-controlls';
import { Cursor } from './0200_component/hud/cursor';
import { ScrollBar } from './0300_entity/scroll-bar';
import { DefaultScene } from './0400_scene/default';


const R3FCanvas = Canvas as any;

export const UniverseContext = createContext(Universe);
export const MagnetismContext = createContext(Universe.magnetism);



function App() {
  return (

    <div className={"fullScreen theme _"+themeIdx}>

      <div id="ui_2d__button_container">
          <Settings />
          <VRButton className="ui_2d__button" />
      </div>

        <R3FCanvas        id="r3f-canvas"
                   className="fullScreen"
                      resize={{ polyfill: ResizeObserver }} 
                          gl={{ alpha: false, toneMapping: NoToneMapping, antialias: settingsState.controls.aa.state }}
                   frameloop={ settingsState.controls.animation.state ? "always" : "demand" }
        >
          <color attach="background" 
                   args={Universe.colors.background} />
          
          { !Universe.ctx3 ? <ThreeJSContext /> : null }
          <XR
            onSessionStart={(event) => {
              Universe.xrMode = true;
              Universe.state.cursor.$parent.next(Universe.ctx3.scene);
              Universe.state.scrolling.$parent.next(Universe.ctx3.scene);
              Universe.state.scrolling.$position.next(Universe.ctx3.camera.position.toArray());
             
              const scaleFactor = 0.75;

              if (Universe.gl.xr.isPresenting) {
                const session = Universe.gl.xr.getSession();
                
                session.updateRenderState({
                  baseLayer: new XRWebGLLayer(session, Universe.gl, { framebufferScaleFactor: scaleFactor })
                });
              }
           
            }}
            onSessionEnd={(event: XREvent<XRManagerEvent>) => {
              Universe.state.cursor.$parent.next(Universe.ctx3.camera);
              Universe.state.scrolling.$parent.next(Universe.ctx3.camera);
              Universe.state.scrolling.$position.next([5, 0, -1]);
              Universe.xrMode = false;
            }}
          >
            <ResizeCanvas />
            
            <Controllers hideRaysOnBlur={true} />
            <Hands />
            
            <pointLight   position={[0, 15, 10]} 
                          intensity={Universe.colors.celestialLight.intensity}
                          distance={100000} 
                          color={Universe.colors.celestialLight.color} />
            <ambientLight intensity={Universe.colors.ambientLight.intensity} 
                          color={Universe.colors.ambientLight.color} />

            <UniverseContext.Provider value={Universe}>
              
              <XRControlls />
              <R3FDiagnosticText />
                {
                  <HudPortal
                    parent={Universe.state.cursor.$parent}
                    renderHudComponent={
                      () => <Cursor position={Universe?.user_controls?.cursorPosition || [0, 0, -1]} hide={false} />} />
                }   
                {
                  <HudPortal
                    parent={Universe.state.scrolling.$parent}
                    renderHudComponent={ () => <ScrollBar position={[5, 0, -5]} />}  />
                }  
                
                <MagnetismContext.Provider value={Universe.magnetism}>
                  <ScrollingBuffer>
                      <Router>
                          <RouterNavigationSurface />
                          <Switch>
                            <Route path="/"             component={DefaultScene} />
                            <Route path="/:thing"       component={DefaultScene} />
                            <Route path="/:list/:thing" component={DefaultScene} />
                          </Switch>
                      </Router>
                  </ScrollingBuffer>
	          	  </MagnetismContext.Provider>
              
            </UniverseContext.Provider>

          </XR>
        </R3FCanvas>
      </div>
    
  );
}

export default App;
