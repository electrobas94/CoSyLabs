﻿// Blend4Web - singleton

class Blend4Web {
	 protected _Appliction: any;
	 protected _Data: any;
	 protected _Geometry: any;
	 protected _Scenes: any;
	 protected _Objects: any;
	 protected _Transform: any;
	 protected _Config: any;
	 protected _Camera: any;
	 protected _Version: any;
	 protected _Container: any;
	 protected _Controls: any;
	 protected _Mouse: any;
	 protected _Math: any;
	 protected _Preloader: any;
	 protected _Physics: any;
	 protected _Utilities: any;
	 

	 Init()
	 {
		  if ( !this.CheckLoadModules() )
				return;

		  this._Appliction.init({
				canvas_container_id: "main_canvas_container",
				callback: ( canvasElement: HTMLElement, isSuccess: boolean ) => { this.CanvasInit( canvasElement, isSuccess ); },
				physics_enabled: true,
				//show_fps: false,
				alpha: false,
				//assets_dds_available: !DEBUG,
				//assets_min50_available: !DEBUG,
				background_color: [1.0, 1.0, 1.0, 0.0]
		  });
	 }

	 private CanvasInit(canvasElement: HTMLElement, isSuccess: boolean) {

		  if (!isSuccess) {
				console.log(" Blend4Web init failure");
				return;
		  }

		  //m_preloader.create_preloader();

		  //canvas_elem.addEventListener("mousedown", main_canvas_down);
		  //canvas_elem.addEventListener("touchstart", main_canvas_down);

		  //canvas_elem.addEventListener("mouseup", main_canvas_up);
		  //canvas_elem.addEventListener("touchend", main_canvas_up);

		  //canvas_elem.addEventListener("mousemove", main_canvas_move);
		  //canvas_elem.addEventListener("touchmove", main_canvas_move);

		  window.onresize = () => { this._Container.resize_to_container(); };
		  this._Container.resize_to_container();

		  //load();
		  this._Data.load("/Data/monkey.json", null, null);
	 }

	 private CheckLoadModules(): boolean
	 {
		  let isAllModuleLoad = true;

		  if (!this._Appliction) {
				console.log("Blend4Web module 'app' is not loaded!");
				isAllModuleLoad = false;
		  }

		  if (!this._Data) {
				console.log("Blend4Web module 'data' is not loaded!");
				isAllModuleLoad = false;
		  }

		  if (!this._Geometry) {
				console.log("Blend4Web module 'geometry' is not loaded!");
				isAllModuleLoad = false;
		  }

		  if (!this._Scenes) {
				console.log("Blend4Web module 'scenes' is not loaded!");
				isAllModuleLoad = false;
		  }


		  if (!this._Container) {
				console.log("Blend4Web module 'container' is not loaded!");
				isAllModuleLoad = false;
		  }


		  return isAllModuleLoad;
	 }
}

b4w.register("Render3d", function (exports: any, require: any)
{
	 /*
		 1) We created new child class (Blend4WebTmp) of Blend4Web class, but in bw4 scope.
		 2) Next we Create object this class
		 3) And we Return object in out scope b4w, but how object of Blend4Web class
		 4) Finally we can to use the object how simple TypeScript object, but with encapsulated scope of b4w.
	 */
	 class Blend4WebTmp extends Blend4Web
	 {
		  constructor()
		  {
				super();

				// Link submodules
				this._Appliction = require("app");
				this._Data       = require("data");
				this._Geometry   = require("geometry");
				this._Scenes     = require("scenes");
				this._Objects    = require("objects");
				this._Transform  = require("transform");
				this._Config     = require("config");
				this._Version    = require("version");
				this._Camera     = require("camera");
				this._Container  = require("container");
				this._Controls   = require("controls");
				this._Mouse      = require("mouse");
				this._Math       = require("math");
				this._Physics    = require("physics");
				this._Preloader  = require("preloader");
				this._Utilities  = require("util");
		  }
	 }

	 exports.Init = function (): Blend4Web
	 {
		  let B4W = new Blend4WebTmp();

		  return B4W;
	 }

});

var blend4WebEngine: Blend4Web = b4w.require("Render3d").Init();
