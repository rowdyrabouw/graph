"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        imports: [router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.AppRoutes),
            nativescript_module_1.NativeScriptModule, nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                'fa': 'assets/css/font-awesome-vendor.css'
            }),],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLHNEQUE4RjtBQUM5Riw2Q0FBeUQ7QUFFekQsaURBQStDO0FBRS9DLHVFQUE4RDtBQVk5RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUFWckIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUM1QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxDQUFTLGlDQUF3QjtZQUNwQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsdUJBQVMsQ0FBQztZQUNuRCx3Q0FBa0IsRUFBRSw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQzFDLElBQUksRUFBRSxvQ0FBb0M7YUFDM0MsQ0FBQyxFQUFFO1FBQ0osT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7S0FDNUIsQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZXMsIEFwcENvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFsgICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoQXBwUm91dGVzKSxcbk5hdGl2ZVNjcmlwdE1vZHVsZSwgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgJ2ZhJzogJ2Fzc2V0cy9jc3MvZm9udC1hd2Vzb21lLXZlbmRvci5jc3MnXG4gIH0pLF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19