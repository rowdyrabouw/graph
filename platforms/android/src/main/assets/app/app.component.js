"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        // console.log(platformModule.screen.mainScreen.widthPixels);
        this.aowAgeItem = this.aowAge.nativeElement;
        this.dragAgeItem = this.dragAge.nativeElement;
        this.dragTargetItem = this.dragTarget.nativeElement;
        this.dragGraphItem = this.draghGraph.nativeElement;
        this.dragGraphItem.setInlineStyle('margin-left: -200');
        this.positionAgeX = this.dragAgeItem.left;
        this.positionTargetY = this.dragTargetItem.top;
    };
    AppComponent.prototype.onPanGraph = function (args) {
        if (args.state === 1) {
            this.prevDeltaXaow = 0;
            this.prevDeltaXage = 0;
            this.prevDeltaXtarget = 0;
            this.prevDeltaYtarget = 0;
            this.prevDeltaXgraph = 0;
            this.prevDeltaYgraph = 0;
        }
        else if (args.state === 2) {
            // console.log(args.deltaX);
            this.dragGraphItem.translateX += args.deltaX - this.prevDeltaXgraph;
            this.dragGraphItem.translateY = 0;
            this.aowAgeItem.translateX += args.deltaX - this.prevDeltaXaow;
            this.dragAgeItem.translateX += args.deltaX - this.prevDeltaXage;
            this.dragTargetItem.translateX += args.deltaX - this.prevDeltaXtarget;
            this.prevDeltaXaow = args.deltaX;
            this.prevDeltaXage = args.deltaX;
            this.prevDeltaXgraph = args.deltaX;
            this.prevDeltaYgraph = args.deltaY;
            this.prevDeltaXtarget = args.deltaX;
            this.prevDeltaYtarget = args.deltaY;
        }
        else if (args.state === 3) {
        }
    };
    AppComponent.prototype.onPanTarget = function (args) {
        if (args.state === 1) {
            this.prevDeltaXtarget = 0;
            this.prevDeltaYtarget = 0;
        }
        if (args.state === 2) {
            // args.deltaX = 0;
            this.dragTargetItem.translateX = 0;
            this.dragTargetItem.translateY += args.deltaY - this.prevDeltaYtarget;
            // console.log(args.deltaX);
            // console.log(this.dragItemTargetLeft);
            // console.log(this.dragTargetItem.left);
            this.prevDeltaXtarget = 0;
            this.prevDeltaYtarget = args.deltaY;
        }
        else if (args.state === 3) {
            this.positionTargetY += args.deltaY;
            console.log(this.positionTargetY);
            alert('onPanTarget finished: recalculate, position: ' + this.positionTargetY);
        }
    };
    AppComponent.prototype.onPanAge = function (args) {
        if (args.state === 1) {
            this.prevDeltaXage = 0;
            this.prevDeltaYage = 0;
        }
        if (args.state === 2) {
            this.dragAgeItem.translateX += args.deltaX - this.prevDeltaXage;
            // console.log(this.prevDeltaX);
            this.dragAgeItem.translateY = 0;
            this.prevDeltaXage = args.deltaX;
            this.prevDeltaYage = args.deltaY;
        }
        else if (args.state === 3) {
            this.positionAgeX += args.deltaX;
            console.log(this.positionAgeX);
            alert('onPanAge finished: recalculate, position: ' + this.positionAgeX);
            // console.log(this.prevDeltaXage);
            // console.log(this.dragAgeItem.translateX);
        }
    };
    AppComponent.prototype.onTap = function ($event) {
        alert('onTap: show zoom dialog');
    };
    AppComponent.prototype.onTapAow = function ($event) {
        alert('onTapAow: show current aow age');
    };
    AppComponent.prototype.onTapAge = function ($event) {
        alert('onTapAge: show current pension age');
    };
    AppComponent.prototype.onTapTarget = function ($event) {
        alert('onTapTarget: show current target income');
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild("aowAge"),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "aowAge", void 0);
__decorate([
    core_1.ViewChild("dragAge"),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "dragAge", void 0);
__decorate([
    core_1.ViewChild("dragTarget"),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "dragTarget", void 0);
__decorate([
    core_1.ViewChild("dragGraph"),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "draghGraph", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./app.component.html"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxzQ0FBd0Y7QUFVeEYsSUFBYSxZQUFZO0lBQXpCO0lBaUlBLENBQUM7SUExR0MsK0JBQVEsR0FBUjtRQUNFLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO0lBQ2pELENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsSUFBeUI7UUFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUMzQixD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OzhCQUFVLGlCQUFVOzZDQUFDO0FBQ2pCO0lBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzhCQUFhLGlCQUFVO2dEQUFDO0FBQ3hCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFhLGlCQUFVO2dEQUFDO0FBTHBDLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxzQkFBc0I7S0FDcEMsQ0FBQztHQUNXLFlBQVksQ0FpSXhCO0FBaklZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7U2VnbWVudGVkQmFySXRlbX0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcblxuaW1wb3J0IHsgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInVpL3Njcm9sbC12aWV3XCI7XG5pbXBvcnQgeyBQYW5HZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN3aXNzQXJteUtuaWZlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zd2lzcy1hcm15LWtuaWZlXCI7XG5cbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKFwiYW93QWdlXCIpIGFvd0FnZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImRyYWdBZ2VcIikgZHJhZ0FnZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImRyYWdUYXJnZXRcIikgZHJhZ1RhcmdldDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImRyYWdHcmFwaFwiKSBkcmFnaEdyYXBoOiBFbGVtZW50UmVmO1xuXG4gIGFvd0FnZUl0ZW07XG4gIGRyYWdBZ2VJdGVtO1xuICBkcmFnVGFyZ2V0SXRlbTtcbiAgZHJhZ0dyYXBoSXRlbTtcblxuICBwcmV2RGVsdGFYYW93OiBudW1iZXI7XG4gIHByZXZEZWx0YVhhZ2U6IG51bWJlcjtcbiAgcHJldkRlbHRhWWFnZTogbnVtYmVyO1xuICBwcmV2RGVsdGFYdGFyZ2V0OiBudW1iZXI7XG4gIHByZXZEZWx0YVl0YXJnZXQ6IG51bWJlcjtcbiAgcHJldkRlbHRhWGdyYXBoOiBudW1iZXI7XG4gIHByZXZEZWx0YVlncmFwaDogbnVtYmVyO1xuXG4gIHBvc2l0aW9uQWdlWDogbnVtYmVyO1xuICBwb3NpdGlvblRhcmdldFk6IG51bWJlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscyk7XG4gICAgdGhpcy5hb3dBZ2VJdGVtID0gdGhpcy5hb3dBZ2UubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmRyYWdBZ2VJdGVtID0gdGhpcy5kcmFnQWdlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5kcmFnVGFyZ2V0SXRlbSA9IHRoaXMuZHJhZ1RhcmdldC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZHJhZ0dyYXBoSXRlbSA9IHRoaXMuZHJhZ2hHcmFwaC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZHJhZ0dyYXBoSXRlbS5zZXRJbmxpbmVTdHlsZSgnbWFyZ2luLWxlZnQ6IC0yMDAnKTtcbiAgICB0aGlzLnBvc2l0aW9uQWdlWCA9IHRoaXMuZHJhZ0FnZUl0ZW0ubGVmdDtcbiAgICB0aGlzLnBvc2l0aW9uVGFyZ2V0WSA9IHRoaXMuZHJhZ1RhcmdldEl0ZW0udG9wO1xuICB9XG5cbiAgb25QYW5HcmFwaChhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgaWYgKGFyZ3Muc3RhdGUgPT09IDEpIHsgLy8gZG93blxuICAgICAgdGhpcy5wcmV2RGVsdGFYYW93ID0gMDtcbiAgICAgIHRoaXMucHJldkRlbHRhWGFnZSA9IDA7XG4gICAgICB0aGlzLnByZXZEZWx0YVh0YXJnZXQgPSAwO1xuICAgICAgdGhpcy5wcmV2RGVsdGFZdGFyZ2V0ID0gMDtcbiAgICAgIHRoaXMucHJldkRlbHRhWGdyYXBoID0gMDtcbiAgICAgIHRoaXMucHJldkRlbHRhWWdyYXBoID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMikgLy8gcGFubmluZ1xuICAgIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFyZ3MuZGVsdGFYKTtcbiAgICAgIHRoaXMuZHJhZ0dyYXBoSXRlbS50cmFuc2xhdGVYICs9IGFyZ3MuZGVsdGFYIC0gdGhpcy5wcmV2RGVsdGFYZ3JhcGg7XG4gICAgICB0aGlzLmRyYWdHcmFwaEl0ZW0udHJhbnNsYXRlWSA9IDA7XG5cblxuICAgICAgdGhpcy5hb3dBZ2VJdGVtLnRyYW5zbGF0ZVggKz0gYXJncy5kZWx0YVggLSB0aGlzLnByZXZEZWx0YVhhb3c7XG4gICAgICB0aGlzLmRyYWdBZ2VJdGVtLnRyYW5zbGF0ZVggKz0gYXJncy5kZWx0YVggLSB0aGlzLnByZXZEZWx0YVhhZ2U7XG4gICAgICB0aGlzLmRyYWdUYXJnZXRJdGVtLnRyYW5zbGF0ZVggKz0gYXJncy5kZWx0YVggLSB0aGlzLnByZXZEZWx0YVh0YXJnZXQ7XG5cblxuICAgICAgdGhpcy5wcmV2RGVsdGFYYW93ID0gYXJncy5kZWx0YVg7XG4gICAgICB0aGlzLnByZXZEZWx0YVhhZ2UgPSBhcmdzLmRlbHRhWDtcbiAgICAgIHRoaXMucHJldkRlbHRhWGdyYXBoID0gYXJncy5kZWx0YVg7XG4gICAgICB0aGlzLnByZXZEZWx0YVlncmFwaCA9IGFyZ3MuZGVsdGFZO1xuICAgICAgdGhpcy5wcmV2RGVsdGFYdGFyZ2V0ID0gYXJncy5kZWx0YVg7XG4gICAgICB0aGlzLnByZXZEZWx0YVl0YXJnZXQgPSBhcmdzLmRlbHRhWTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJncy5zdGF0ZSA9PT0gMykgLy8gdXBcbiAgICB7XG4gICAgfVxuICB9XG5cbiAgb25QYW5UYXJnZXQoYXJnczogUGFuR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIGlmIChhcmdzLnN0YXRlID09PSAxKSB7IC8vZG93blxuICAgICAgdGhpcy5wcmV2RGVsdGFYdGFyZ2V0ID0gMDtcbiAgICAgIHRoaXMucHJldkRlbHRhWXRhcmdldCA9IDA7XG4gICAgfVxuICAgIGlmIChhcmdzLnN0YXRlID09PSAyKSB7IC8vIHBhbm5pbmdcbiAgICAgIC8vIGFyZ3MuZGVsdGFYID0gMDtcbiAgICAgIHRoaXMuZHJhZ1RhcmdldEl0ZW0udHJhbnNsYXRlWCA9IDA7XG4gICAgICB0aGlzLmRyYWdUYXJnZXRJdGVtLnRyYW5zbGF0ZVkgKz0gYXJncy5kZWx0YVkgLSB0aGlzLnByZXZEZWx0YVl0YXJnZXQ7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhcmdzLmRlbHRhWCk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZHJhZ0l0ZW1UYXJnZXRMZWZ0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZHJhZ1RhcmdldEl0ZW0ubGVmdCk7XG4gICAgICB0aGlzLnByZXZEZWx0YVh0YXJnZXQgPSAwO1xuICAgICAgdGhpcy5wcmV2RGVsdGFZdGFyZ2V0ID0gYXJncy5kZWx0YVk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZ3Muc3RhdGUgPT09IDMpIHsgLy8gdXBcbiAgICAgIHRoaXMucG9zaXRpb25UYXJnZXRZICs9IGFyZ3MuZGVsdGFZO1xuICAgICAgY29uc29sZS5sb2codGhpcy5wb3NpdGlvblRhcmdldFkpO1xuICAgICAgYWxlcnQoJ29uUGFuVGFyZ2V0IGZpbmlzaGVkOiByZWNhbGN1bGF0ZSwgcG9zaXRpb246ICcgKyB0aGlzLnBvc2l0aW9uVGFyZ2V0WSk7XG4gICAgfVxuICB9XG5cblxuICBvblBhbkFnZShhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgaWYgKGFyZ3Muc3RhdGUgPT09IDEpIHsgLy9kb3duXG4gICAgICB0aGlzLnByZXZEZWx0YVhhZ2UgPSAwO1xuICAgICAgdGhpcy5wcmV2RGVsdGFZYWdlID0gMDtcbiAgICB9XG4gICAgaWYgKGFyZ3Muc3RhdGUgPT09IDIpIHsgLy8gcGFubmluZ1xuICAgICAgdGhpcy5kcmFnQWdlSXRlbS50cmFuc2xhdGVYICs9IGFyZ3MuZGVsdGFYIC0gdGhpcy5wcmV2RGVsdGFYYWdlO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcmV2RGVsdGFYKTtcbiAgICAgIHRoaXMuZHJhZ0FnZUl0ZW0udHJhbnNsYXRlWSA9IDA7XG4gICAgICB0aGlzLnByZXZEZWx0YVhhZ2UgPSBhcmdzLmRlbHRhWDtcbiAgICAgIHRoaXMucHJldkRlbHRhWWFnZSA9IGFyZ3MuZGVsdGFZO1xuICAgIH1cbiAgICBlbHNlIGlmIChhcmdzLnN0YXRlID09PSAzKSB7IC8vIHVwXG4gICAgICB0aGlzLnBvc2l0aW9uQWdlWCArPSBhcmdzLmRlbHRhWDtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb25BZ2VYKTtcbiAgICAgIGFsZXJ0KCdvblBhbkFnZSBmaW5pc2hlZDogcmVjYWxjdWxhdGUsIHBvc2l0aW9uOiAnICsgdGhpcy5wb3NpdGlvbkFnZVgpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcmV2RGVsdGFYYWdlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZHJhZ0FnZUl0ZW0udHJhbnNsYXRlWCk7XG4gICAgfVxuICB9XG5cblxuICBvblRhcCgkZXZlbnQpIHtcbiAgICBhbGVydCgnb25UYXA6IHNob3cgem9vbSBkaWFsb2cnKTtcbiAgfVxuXG4gIG9uVGFwQW93KCRldmVudCkge1xuICAgIGFsZXJ0KCdvblRhcEFvdzogc2hvdyBjdXJyZW50IGFvdyBhZ2UnKTtcbiAgfVxuXG4gIG9uVGFwQWdlKCRldmVudCkge1xuICAgIGFsZXJ0KCdvblRhcEFnZTogc2hvdyBjdXJyZW50IHBlbnNpb24gYWdlJyk7XG4gIH1cblxuICBvblRhcFRhcmdldCgkZXZlbnQpIHtcbiAgICBhbGVydCgnb25UYXBUYXJnZXQ6IHNob3cgY3VycmVudCB0YXJnZXQgaW5jb21lJyk7XG4gIH1cblxufVxuIl19