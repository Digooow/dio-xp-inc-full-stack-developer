import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const url = this.configService.get<string>('SUPABASE_URL');
    const key = this.configService.get<string>('SUPABASE_ANON_KEY');
    if (!url || !key) throw new Error('Supabase credentials missing');
    this.supabase = createClient(url, key);
  }

  async register(dto: RegisterDto) {
    const { data, error } = await this.supabase.auth.signUp({
      email: dto.email,
      password: dto.password,
      options: { data: { name: dto.name } },
    });
    if (error) throw new UnauthorizedException(error.message);
    return data;
  }

  async login(dto: LoginDto) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: dto.email,
      password: dto.password,
    });
    if (error) throw new UnauthorizedException('Credenciais inválidas');
    return {
      access_token: data.session.access_token,
      user: data.user,
    };
  }

  async validateToken(token: string) {
    const { data, error } = await this.supabase.auth.getUser(token);
    if (error || !data.user) throw new UnauthorizedException('Token inválido');
    return data.user;
  }
}