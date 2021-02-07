import { connector } from 'db'
import {
  v4 as uuid
} from 'uuid'

export const Posts = {
  async create (req, res) {
    let trx
    try {
      const db = connector()

      const payload = req.body

      trx = await db.transaction()

      const insertions = await trx('posts')
        .insert({
          id: uuid(),
          title: payload.title,
          description: payload.description
        })
        .returning(['id'])

      await trx.commit()

      return res.json({ id: insertions[0].id })
    } catch (err) {
      if (trx) {
        trx.rollback()
      }
      console.error(err)
      throw err
    }
  },
  async find (req, res) {
    try {
      const db = connector()

      const posts = await db('posts').select('*')

      return res.json({ posts })
    } catch (err) {
      console.error(err)
      throw err
    }
  },
  async findById (req, res) {
    try {
      const db = connector()
      const payload = req.query

      console.log(payload);

      const post = await db('posts').where({ id: payload.id }).select('*')

      return res.json({ post: post[0] })
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}
