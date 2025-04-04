// Những domain được phép truy cập tới tài nguyên của server
export const WHITELIST_DOMAINS = [
  // 'http://localhost:5173' // Khong can localhost nua thi o fie config/cors da luon cho phep moi truong dev
  'https://trello-web-cyan.vercel.app/'
]

export const BOARD_TYPES = {
  PUBLIC: 'public',
  PRIVATE: 'private'
}
