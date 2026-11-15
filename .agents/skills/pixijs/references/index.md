# PixiJS Skills: Full Index

Detailed routing table for the PixiJS v8 skill collection. Each entry lists the skill's full description and the trigger keywords that should match it. For a scannable short-form table, see the parent `SKILL.md`.

## Foundations

### pixijs-application
Create and configure a PixiJS v8 `Application`. Covers `new Application()` + async `app.init()` options (width, height, background, antialias, resolution, autoDensity, preference, resizeTo, autoStart, sharedTicker, canvas), `app.stage`/`renderer`/`canvas`/`screen` access, `ResizePlugin`, `TickerPlugin`, and `app.destroy()`.

**Triggers:** Application, app.init, app.stage, app.renderer, app.canvas, app.screen, ApplicationOptions, resizeTo, preference, autoStart, sharedTicker, app.destroy.

### pixijs-core-concepts
How PixiJS v8 renders frames: the systems-and-pipes renderer, the render loop, and how the library adapts to different environments. Covers `WebGLRenderer`/`WebGPURenderer`/`CanvasRenderer` selection, `renderer.render()` pipeline, environment detection, and pointers to per-topic deep dives.

**Triggers:** renderer, WebGL, WebGPU, Canvas, render loop, render pipeline, systems, environments, autoDetectRenderer, RenderTexture, RenderTarget, render to texture, flipY, mipLevel, layer, 3D texture, depth slice, renderTarget.bind, copyToTexture, copyDepthTexture, depth-only, WebGLLoader, WebGPULoader, CanvasLoader, RendererLoader, lazy-load renderer systems, context lost, webglcontextlost, device lost, GPUDevice.lost.

### pixijs-scene-core-concepts
The PixiJS v8 scene graph as a whole: how containers, leaves, transforms, and render order fit together. Covers leaf vs container distinction, local/world coordinates, culling, render groups, sortable children, masking, `RenderLayer`, and which leaf skill covers which display object.

**Triggers:** scene graph, display list, Container, Sprite, Graphics, Text, Mesh, ParticleContainer, DOMContainer, GifSprite, masking, mask texture destroyed, MaskFilter, render group, RenderLayer, world transform.

## Scene Objects

### pixijs-scene-container
Group, position, or transform display objects. Covers `Container` constructor options (`isRenderGroup`, `sortableChildren`, `boundsArea`), `addChild`/`removeChild`/`addChildAt`/`swapChildren`/`setChildIndex`, `position`/`scale`/`rotation`/`pivot`/`skew`/`alpha`/`tint`, `getBounds`/`getGlobalPosition`/`toLocal`/`toGlobal`, `zIndex` sorting, `cullable`, `destroy`.

**Triggers:** Container, addChild, removeChild, addChildAt, swapChildren, sortableChildren, zIndex, position, scale, rotation, pivot, getBounds, toGlobal, toLocal, destroy.

### pixijs-scene-graphics
Draw vector shapes and paths. Covers the `Graphics` shape-then-fill API (`rect`/`circle`/`ellipse`/`poly`/`roundRect`/`star`), path methods (`moveTo`/`lineTo`/`bezierCurveTo`/`arc`), `fill`/`stroke`/`cut`, `FillGradient`, `FillPattern`, `GraphicsContext` sharing, SVG markup.

**Triggers:** Graphics, GraphicsContext, rect, circle, poly, roundRect, fill, stroke, cut, FillGradient, FillPattern, FillPatternOptions, textureSpace, pattern fill, texture fill, spritesheet fill, radialGradient, linearGradient, svg gradient, moveTo, bezierCurveTo, svg.

## Utilities

### pixijs-events
Handle pointer, mouse, touch, or wheel input. Covers `eventMode` (none, passive, auto, static, dynamic), `FederatedEvent` types, propagation and capture phase, `hitArea`, `interactiveChildren`, `cursor` and `cursorStyles`, global move events for drag, `eventFeatures` config.

**Triggers:** eventMode, FederatedPointerEvent, pointerdown, click, tap, globalpointermove, drag, hitArea, cursor, stopPropagation, persistentDeviceId.

## Advanced

### pixijs-performance
Profile or optimize a PixiJS v8 app for FPS, draw calls, or GPU memory. Covers destroy patterns (`cacheAsTexture(false)`, `releaseGlobalResources`), `GCSystem` and `TextureGCSystem`, `PrepareSystem`, object pooling, batching rules, `BitmapText` for dynamic text, culling (`Culler`, `CullerPlugin`, `cullable`, `cullArea`), resolution/antialias tradeoffs.

**Triggers:** FPS, jank, draw calls, batching, object pool, GCSystem, PrepareSystem, Culler, cacheAsTexture, memory leak, destroy patterns, render bundle, transient, MSAA, Buffer.update, WebGPU performance, TexturePool, repeatEdgePixels, bind group.
