var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Blend4Web = (function () {
    function Blend4Web() {
    }
    Object.defineProperty(Blend4Web.prototype, "CameraManager", {
        get: function () {
            return this._CameraManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Blend4Web.prototype, "SceneManager", {
        get: function () {
            return this._SceneManager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Blend4Web.prototype, "TransformManager", {
        get: function () {
            return this._Transform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Blend4Web.prototype, "ApplicationManager", {
        get: function () {
            return this._Appliction;
        },
        enumerable: true,
        configurable: true
    });
    Blend4Web.prototype.TrySelectObjectInScene = function (x, y) {
        if (this._SelectedObjects) {
            this._SceneManager.clear_outline_anim(this._SelectedObjects);
            this._Transform.rotate_x_local(this._SelectedObjects, 0.01);
        }
        this._SelectedObjects = this._SceneManager.pick_object(x, y);
    };
    Blend4Web.prototype.rotateLol = function (x) {
        if (this._SelectedObjects) {
            this._Transform.rotate_x_local(this._SelectedObjects, x / 1000.0);
        }
    };
    Blend4Web.prototype.Init = function () {
        var _this = this;
        if (!this.CheckLoadModules())
            return;
        this._Appliction.init({
            canvas_container_id: "main_canvas_container",
            callback: function (canvasElement, isSuccess) { _this.CanvasInit(canvasElement, isSuccess); },
            physics_enabled: false,
            alpha: false,
            background_color: [0.6, 0.6, 0.6, 0.0]
        });
    };
    Blend4Web.prototype.CanvasInit = function (canvasElement, isSuccess) {
        var _this = this;
        if (!isSuccess) {
            console.log(" Blend4Web init failure");
            return;
        }
        window.onresize = function () { _this._Container.resize_to_container(); };
        this._Container.resize_to_container();
        this._Data.load("/Data/monkey.json", null, null);
    };
    Blend4Web.prototype.CheckLoadModules = function () {
        var isAllModuleLoad = true;
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
        if (!this._SceneManager) {
            console.log("Blend4Web module 'scenes' is not loaded!");
            isAllModuleLoad = false;
        }
        if (!this._Container) {
            console.log("Blend4Web module 'container' is not loaded!");
            isAllModuleLoad = false;
        }
        return isAllModuleLoad;
    };
    return Blend4Web;
}());
b4w.register("Render3d", function (exports, require) {
    var Blend4WebTmp = (function (_super) {
        __extends(Blend4WebTmp, _super);
        function Blend4WebTmp() {
            _super.call(this);
            this._Appliction = require("app");
            this._Data = require("data");
            this._Geometry = require("geometry");
            this._SceneManager = require("scenes");
            this._Objects = require("objects");
            this._Transform = require("transform");
            this._Config = require("config");
            this._Version = require("version");
            this._CameraManager = require("camera");
            this._Container = require("container");
            this._Controls = require("controls");
            this._Mouse = require("mouse");
            this._Math = require("math");
            this._Physics = require("physics");
            this._Preloader = require("preloader");
            this._Utilities = require("util");
        }
        return Blend4WebTmp;
    }(Blend4Web));
    exports.Init = function () {
        var B4W = new Blend4WebTmp();
        return B4W;
    };
});
var blend4WebEngine = b4w.require("Render3d").Init();
