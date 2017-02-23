b4w.register("dynamic_geometry", function (exports, require) {
    var Blend4Web = (function () {
        function Blend4Web() {
            this.m_app = require("app");
            this.m_data = require("data");
            this.m_geom = require("geometry");
            this.m_scs = require("scenes");
            this.m_obj = require("objects");
            this.m_trans = require("transform");
            this.m_cfg = require("config");
            this.m_version = require("version");
            this.DEBUG = (this.m_version.type() == "DEBUG");
            this.APP_ASSETS_PATH = this.m_cfg.get_assets_path("dynamic_geometry");
            this.m_app.init({
                canvas_container_id: "main_canvas_container",
                callback: this.init_cb,
                physics_enabled: false,
                show_fps: true,
                alpha: false,
                autoresize: true,
                assets_dds_available: !this.DEBUG,
                assets_min50_available: !this.DEBUG,
                console_verbose: true
            });
        }
        Blend4Web.prototype.init_cb = function (canvas_elem, success) {
            var _this = this;
            if (!success) {
                console.log("b4w init failure");
                return;
            }
            console.log("I am loading");
            this.m_data = require("data");
            this.m_data.load(this.APP_ASSETS_PATH + "/example.json", function (data_id) { _this.load_cb(data_id); });
        };
        Blend4Web.prototype.load_cb = function (data_id) {
            this.m_app.enable_camera_controls();
            this.make_some_copies();
            this.remove_some_copies();
            this.geometry_change();
        };
        Blend4Web.prototype.make_some_copies = function () {
            var src_obj = this.m_scs.get_object_by_name("Plane");
            var deep_copy = this.m_obj.copy(src_obj, "deep_copy", true);
            var deep_copy2 = this.m_obj.copy(src_obj, "deep_copy2", true);
            var shallow_copy = this.m_obj.copy(src_obj, "shallow_copy", false);
            var shallow_copy2 = this.m_obj.copy(src_obj, "shallow_copy2", false);
            this.m_scs.append_object(deep_copy);
            this.m_scs.append_object(deep_copy2);
            this.m_scs.append_object(shallow_copy);
            this.m_scs.append_object(shallow_copy2);
            this.m_trans.set_translation(deep_copy, -2, -2, 0);
            this.m_trans.set_translation(deep_copy2, 2, -2, 0);
            this.m_trans.set_translation(shallow_copy, 2, 2, 0);
            this.m_trans.set_translation(shallow_copy2, -2, 2, 0);
        };
        Blend4Web.prototype.remove_some_copies = function () {
            var deep_copy = this.m_scs.get_object_by_name("deep_copy2");
            var shallow_copy = this.m_scs.get_object_by_name("shallow_copy2");
            this.m_scs.remove_object(deep_copy);
            this.m_scs.remove_object(shallow_copy);
        };
        Blend4Web.prototype.geometry_change = function (indices, positions) {
            var plane_blue = this.m_scs.get_object_by_name("Plane");
            var plane_red = this.m_scs.get_object_by_name("Plane.002");
            var indices = new Uint16Array([0, 1, 2, 3, 4, 5]);
            var positions_blue = new Float32Array([0, 0, 1, -1, -1, 0, 1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0]);
            var positions_red = new Float32Array([-9, 9, 1, -10, 8, 0, -8, 10, 0, -8, 10, 0, -10, 8, 0, -8, 8, 0]);
            this.m_geom.override_geometry(plane_blue, "Material", indices, positions_blue, false);
            this.m_geom.override_geometry(plane_red, "Material.002", indices, positions_red, false);
            this.m_obj.update_boundings(plane_blue);
            this.m_obj.update_boundings(plane_red);
        };
        return Blend4Web;
    }());
    exports.init = function () {
        var B4W = new Blend4Web();
    };
});
b4w.require("dynamic_geometry").init();
