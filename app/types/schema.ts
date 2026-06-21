type DefaultSchema = {
  id: string
  created_at: string
  updated_at: string
}

export type ISocials = DefaultSchema & {
  user_id: string
  provider: string
  provider_id: string
  name: string
  email: string
}

export type IUsers = DefaultSchema & {
  name: string
  email: string
  avatar: string
  email_verified_at: string | null
  role: string
  two_factor_enable: boolean
  socials: Array<ISocials>
}
