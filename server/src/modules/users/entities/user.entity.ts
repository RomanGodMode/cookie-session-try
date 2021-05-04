import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import * as bcrypt from 'bcryptjs'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500, unique: true })
  name: string

  @Column({ length: 500 })
  password: string


  @BeforeInsert()
  async beforeInsert() {
    this.password = await bcrypt.hash(this.password, process.env.BCRYPT_HASH_ROUND);
  }

  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password)
  }
}