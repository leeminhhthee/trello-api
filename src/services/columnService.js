import { columnModel } from '~/models/columnModel'
import { boardModel } from '~/models/boardModel'
import { cardModel } from '~/models/cardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'

const createNew = async (reqBody) => {
  try {
    // Xử lý logic dữ liệu tuỳ đặc thù dự án
    const newColumn = {
      ...reqBody
    }

    // Gọi tới tầng Model để xử lý lưu bản ghi newColumn vào trong DB
    const createdColumn = await columnModel.createNew(newColumn)

    // Lấy bản ghi column sau khi gọi (tuỳ vào mục đích dự án thì có cần làm hay không)
    const getNewColumn = await columnModel.findOneById(createdColumn.insertedId)

    if (getNewColumn) {
      //Xử lý cấu trúc data trước khi trả về dữ liệu
      getNewColumn.cards = []

      // Cập nhật mảng columnOrderIds trong collection boards
      await boardModel.pushColumnOrderIds(getNewColumn)
    }

    // Trả kết quả về, trong Service luôn phải có return
    return getNewColumn
  } catch (error) { throw error }
}

const update = async (columnId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now()
    }
    const updatedColumn = await columnModel.update(columnId, updateData)

    return updatedColumn
  } catch (error) { throw error }
}

const deleteItem = async (columnId) => {
  try {
    const targetColumn = await columnModel.findOneById(columnId)
    if (!targetColumn) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Column not found!')
    }

    // Xoa Column
    await columnModel.deleteOneById(columnId)

    // Xoa toan bo Cards thuoc Column tren
    await cardModel.deleteManyByColumnId(columnId)

    // Xoa columnId trong mang columnOrderIds cua cai Board chua no
    await boardModel.pullColumnOrderIds(targetColumn)

    return { deleteResult: 'Column and its Cards deleted succesfully!' }
  } catch (error) { throw error }
}

export const columnService = {
  createNew,
  update,
  deleteItem
}