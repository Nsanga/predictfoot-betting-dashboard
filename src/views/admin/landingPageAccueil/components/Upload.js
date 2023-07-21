import { useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';

export default function Upload({ imageUrl, handleImageChange }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [inputId, setInputId] = useState(`imageInput-${Date.now()}`);

  useEffect(() => {
    if (imageUrl) {
      setSelectedImage(imageUrl);
      // Vous pouvez extraire le nom de fichier de l'URL ici si nécessaire
      const fileName = imageUrl.split('/').pop(); // Extraire le nom du fichier de l'URL
      setImageName(fileName);
    }
  }, [imageUrl]);

  const handleChangeImage = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);
    setImageName(file.name);
    handleImageChange(imageURL, event.target.files[0]);
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
          onChange={handleChangeImage}
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
      {imageName && (
        <Box mt={2} textAlign="center">
          {imageName}
        </Box>
      )}
    </Box>
  );
}
