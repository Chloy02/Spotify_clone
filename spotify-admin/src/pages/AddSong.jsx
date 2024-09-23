import React, { useState, useEffect } from 'react'; 
import { assets } from '../assets/assets';
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddSong = () => {
  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(); 
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('audio', song);
      formData.append('album', album);

      const response = await axios.post(`${url}/api/song/add`, formData);

      if (response.data.success) {
        toast.success("Song Added");
        setName("");
        setAlbum("none");
        setDesc("");
        setImage(false);
        setSong(false);
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      toast.error("Error occurred");
    }
    setLoading(false);
  };

  const loadAlbumData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setAlbumData(response.data.albums);
      } else {
        toast.error("Unable to Load Albums");
      }
    } catch (error) {
      toast.error("Error Occurred");
    }
  };

  useEffect(() => {
    loadAlbumData();
  }, []);

  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className='w-16 h-16 place-self-center border-4 border-gray-300 border-t-green-800 rounded-full animate-spin'></div>
    </div>
  ) : (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-500'>
      <div className='flex gap-8'>
        <div className='flex flex-col gap-4'>
          <p>Upload Song</p>
          <input
            onChange={(e) => setSong(e.target.files[0])}
            type='file'
            id='song'
            accept='audio/*'
            hidden
          />
          <label htmlFor='song'>
            <img
              src={song ? assets.upload_added : assets.upload_song}
              className='w-24 cursor-pointer'
              alt='Upload Song'
            />
          </label>
        </div>

        <div className='flex flex-col gap-4'>
          <p>Upload Image</p>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            accept='image/*'
            hidden
          />
          <label htmlFor='image'>
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className='w-24 cursor-pointer'
              alt='Upload Image'
            />
          </label>
        </div>
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Song Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type='text'
          className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
          placeholder='Type Here'
          required
        />
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Song Description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          type='text'
          className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
          placeholder='Type Here'
          required
        />
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Album</p>
        <select
          onChange={(e) => setAlbum(e.target.value)}
          value={album} 
          className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(150px)]'
        >
          <option value='none'>None</option>
          {albumData.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'
      >
        ADD
      </button>
    </form>
  );
};

export default AddSong;
