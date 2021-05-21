import { Entity, Column, PrimaryColumn } from 'typeorm'

import { v4 as uuid } from 'uuid'

// Criando a Entidade "Books"

@Entity('books')
export default class Books {
  @PrimaryColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  author!: string

  @Column()
  category!: string

  @Column()
  quantity!: number

  @Column()
  publisher!: string

  // Definindo o ID como UUID
  constructor () {
    if (!this.id) this.id = uuid()
  }
}
