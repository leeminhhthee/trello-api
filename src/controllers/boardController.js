import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  try {
    console.log('req.body: ', req.body)

    // Điều hướng dữ liệu sang tầng Service

    // Có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json({ message: 'POST from Controller: APIs create new board.' })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: error.message
    })
  }
}

export const boardController = {
  createNew
}
