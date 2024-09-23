import { v2 as cloudinary } from 'cloudinary';
import albumModel from '../models/albumModel.js';

const addAlbum = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgcolour = req.body.bgcolour;
        const imageFile = req.file;

        // Ensure imageFile exists
        if (!imageFile) {
            return res.status(400).json({ success: false, message: "Image file is required" });
        }

        // Use a promise to handle the stream
        const imageUpload = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
                if (error) {
                    return reject(new Error(error.message));
                }
                resolve(result);
            });

            // Pipe the image buffer to the Cloudinary stream
            stream.end(imageFile.buffer);
        });

        const albumData = {
            name,
            desc,
            bgcolour,
            image: imageUpload.secure_url
        };

        const album = new albumModel(albumData); // Use 'new' to create an instance
        await album.save();

        res.json({ success: true, message: "Album Added" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const listAlbum = async (req, res) => {
    try {
        const allAlbums = await albumModel.find({});
        res.json({ success: true, albums: allAlbums });
    } catch (error) {
        res.json({ success: false });
    }
};

const removeAlbum = async (req, res) => {
    try {
        await albumModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Album Removed" });
    } catch (error) {
        res.json({ success: false });
    }
};

export { addAlbum, listAlbum, removeAlbum };
