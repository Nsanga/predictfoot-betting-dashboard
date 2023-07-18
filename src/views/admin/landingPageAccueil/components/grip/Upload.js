import { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';

function Upload({ imageUrl }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    if (imageUrl) {
      setSelectedImage(imageUrl);
    }
  }, [imageUrl]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);
    setImageName(file.name);
  };

  return (
    <Box>
      <Box
        p={4}
        borderWidth={2}
        borderStyle="dashed"
        borderColor="gray.300"
        borderRadius="md"
        textAlign="center"
        cursor="pointer"
        onClick={() => document.getElementById('imageInput').click()}
      >
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        {selectedImage ? (
          <Image src={selectedImage} alt="Preview" maxH={200} mx="auto" />
        ) : (
          <Box>
            <Box as="span" fontSize="lg" fontWeight="bold" display="block">
              Upload Image
            </Box>
            <Box as="span" fontSize="sm" display="block">
              (Cliquez pour sélectionner une image)
            </Box>
          </Box>
        )}
      </Box>
      {selectedImage && (
        <Box mt={2} textAlign="center">
          {imageName}
        </Box>
      )}
    </Box>
  );
}

export default Upload;
