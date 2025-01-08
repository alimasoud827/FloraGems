const uploadToCloud = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append('upload_preset', 'ml_default');
  console.log('uploading image:', file);
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dxv9n5lvg/image/upload';

  console.log('FormData contents:', Array.from(formData.entries()));
  
  try {
    const response = await fetch(CLOUDINARY_URL,
      {
        method: 'POST',
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error('Failed to upload image');
    }
  
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Failed to upload image:', error);
    throw error;
  }
};

export default uploadToCloud;