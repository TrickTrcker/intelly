import { Component, ElementRef, Input } from '@angular/core';
import { Replace } from './../shared';
var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(el) {
        this.el = el;
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        Replace(this.el);
        this.isFixed(this.fixed);
    };
    AppHeaderComponent.prototype.isFixed = function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('header-fixed');
        }
    };
    AppHeaderComponent.prototype.imgSrc = function (brand) {
        return brand.src ? brand.src : '';
    };
    AppHeaderComponent.prototype.imgWidth = function (brand) {
        return brand.width ? brand.width : 'auto';
    };
    AppHeaderComponent.prototype.imgHeight = function (brand) {
        return brand.height ? brand.height : 'auto';
    };
    AppHeaderComponent.prototype.imgAlt = function (brand) {
        return brand.alt ? brand.alt : '';
    };
    AppHeaderComponent.prototype.breakpoint = function (breakpoint) {
        //console.log(breakpoint);
        return breakpoint ? breakpoint : '';
    };
    AppHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    template: "\n    <header class=\"app-header navbar\">\n            <ng-template [ngIf]=\"navbarBrand || navbarBrandFull || navbarBrandMinimized\">\n        <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n          <img *ngIf=\"navbarBrand\"\n               [src]=\"imgSrc(navbarBrand)\"\n               [attr.width]=\"imgWidth(navbarBrand)\"\n               [attr.height]=\"imgHeight(navbarBrand)\"\n               [attr.alt]=\"imgAlt(navbarBrand)\"\n               class=\"navbar-brand\">\n          <img *ngIf=\"navbarBrandFull\"\n               [src]=\"imgSrc(navbarBrandFull)\"\n               [attr.width]=\"imgWidth(navbarBrandFull)\"\n               [attr.height]=\"imgHeight(navbarBrandFull)\"\n               [attr.alt]=\"imgAlt(navbarBrandFull)\"\n               class=\"navbar-brand-full\">\n          <img *ngIf=\"navbarBrandMinimized\"\n               [src]=\"imgSrc(navbarBrandMinimized)\"\n               [attr.width]=\"imgWidth(navbarBrandMinimized)\"\n               [attr.height]=\"imgHeight(navbarBrandMinimized)\"\n               [attr.alt]=\"imgAlt(navbarBrandMinimized)\"\n               class=\"navbar-brand-minimized\">\n        </a>\n      </ng-template>\n        <ng-content></ng-content>\n         </header>\n  "
                },] },
    ];
    /** @nocollapse */
    AppHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    AppHeaderComponent.propDecorators = {
        "fixed": [{ type: Input },],
        "navbarBrand": [{ type: Input },],
        "navbarBrandFull": [{ type: Input },],
        "navbarBrandMinimized": [{ type: Input },],
        "sidebarToggler": [{ type: Input },],
        "mobileSidebarToggler": [{ type: Input },],
        "asideMenuToggler": [{ type: Input },],
        "mobileAsideMenuToggler": [{ type: Input },],
    };
    return AppHeaderComponent;
}());
export { AppHeaderComponent };
//# sourceMappingURL=app-header.component.js.map