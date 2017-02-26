using System.Web;
using System.Web.Optimization;

namespace CoSyLa
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

				bundles.Add(new ScriptBundle("~/bundles/app").Include(
					 "~/Scripts/b4w.min.js",
					 "~/Scripts/App/Render3d/Blend4Web.js",
					 "~/Scripts/App/Widgets/Widget.js",
					 "~/Scripts/App/Widgets/MainWidget.js",
					 "~/Scripts/App/Widgets/TabWidget.js", 
					 "~/Scripts/App/Widgets/ButtonWidget.js",
					 "~/Scripts/App/Widgets/ButtonGroupWidget.js",
					 "~/Scripts/App/Widgets/ToolBarWidget.js",
					 "~/Scripts/App/Widgets/ItemListWidget.js",
					 "~/Scripts/App/InstrumentEditor/InstrumentEditor.js"));

				bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/Site.css"));

				//BundleTable.EnableOptimizations = true;
		  }
    }
}
