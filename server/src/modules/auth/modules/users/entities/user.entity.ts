import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import * as bcrypt from 'bcryptjs'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 60, unique: true })
  email: string

  @Column({ length: 500 })
  password: string


  @BeforeInsert()
  async beforeInsert() {
    this.password = await bcrypt.hash(this.password, bcrypt.genSaltSync(+process.env.BCRYPT_HASH_ROUND))
  }

  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password)
  }
}