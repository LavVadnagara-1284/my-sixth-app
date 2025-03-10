import { CanActivate } from "@nestjs/common";

export class RoleGuard implements CanActivate {

    private rolePassed: string;
    constructor(role: string) {
        this.rolePassed = role;
    }

    canActivate(context): boolean {
        const ctx = context.switchToHttp();
        const request : any | Request = ctx.getRequest();

        return this.rolePassed == request.user.role;
    }
}