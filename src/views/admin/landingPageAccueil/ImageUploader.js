import { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [inputId, setInputId] = useState(`imageInput-${Date.now()}`);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);
    setImageName(file.name);
  };

  const handleContainerClick = () => {
    document.getElementById(inputId).click();
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
        onClick={handleContainerClick}
      >
        <input
          type="file"
          id={inputId}
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
          Nom de l'image: {imageName}
        </Box>
      )}
    </Box>
  );
}

export default ImageUploader;
