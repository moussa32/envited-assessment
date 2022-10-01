export const createImageURL = (imageFile) => URL.createObjectURL(imageFile);
export const removeImageURL = (imageURLObject) => URL.revokeObjectURL(imageURLObject);
