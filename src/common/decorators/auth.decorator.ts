import { applyDecorators, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from "./../../modules/auth/guards/auth.guard";
import { RoleGuard } from "./../../modules/auth/guards/role.guard";

export function AuthDecorator() {
    return applyDecorators(
        ApiBearerAuth("Authorization"),
        UseGuards(AuthGuard, RoleGuard)
    )
}