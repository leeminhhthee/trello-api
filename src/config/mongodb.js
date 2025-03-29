import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'

let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

// Ket noi toi db
export const CONNECT_DB = async () => {
  // Goi ket oi toi MongoDB Atlas oi URI da khai bao trong than cua MongoClientInstance
  await mongoClientInstance.connect()

  // Ket noi thanh con thi lay ra db theo ten va gan nguoc no lai vao bien trelloDatabaseInstance
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

// Function GET_DB (không async) này có nhiệm vụ export ra cái Trello Database Instance sau khi đã connect
// thành công tới MongoDB để chúng ta sử dụng ở nhiều nơi khác nhau trong code.
// Lưu ý phải đảm bảo chỉ luôn gọi cái getDB này sau khi đã kết nối thành công tới MongoDB
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first!')
  return trelloDatabaseInstance
}

// Đóng kết nối tới DB khi cần
export const CLOSE_DB = async () => {
  console.log('Code chay vao day')
  await mongoClientInstance.close()
}

