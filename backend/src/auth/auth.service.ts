import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
    
  
    return {
      token: 'placeholder-token',
      user: {
        id: user.id,
        username: user.username,
        realName: user.realName,
        avatar: user.avatar,
      },
    };
  }
}
