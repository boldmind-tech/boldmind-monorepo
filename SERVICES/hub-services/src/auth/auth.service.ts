import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    async validateToken(token: string): Promise<any> {
        try {
            const payload = await this.jwtService.verifyAsync(token);
            // Return user object based on JWT payload
            return {
                userId: payload.sub,
                email: payload.email,
                role: payload.role,
            };
        } catch (error) {
            throw new UnauthorizedException('Invalid token');
        }
    }
}
