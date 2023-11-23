import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.tdo';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Res() res, @Body() authenticateDto: AuthenticateDto) {
    try {
      const respose = this.authService.authenticate(authenticateDto);
      return res.status(HttpStatus.OK).json({ respose });
    } catch (error) {
      return res.status(error.status).json(error.respose);
    }
  }
}
