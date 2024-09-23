import multer from 'multer';

const storage = multer.memoryStorage(); // Use memory storage to keep files in memory

const upload = multer({ storage }); // Pass memory storage to multer

export default upload;
