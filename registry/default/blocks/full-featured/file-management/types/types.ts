export interface FileItem {
    id: string
    name: string
    size: string
    lastModified: string
    uploadedBy: {
      name: string
      email: string
      avatar: string
    }
    type: string
    selected?: boolean
}
  
export const MAX_FILE_SIZE = 10 * 1024 * 1024


export const ACCEPTED_FILE_TYPES = {
    'image/svg+xml': ['.svg'],
    'image/jpeg': ['.jpg', '.jpeg'],
    'image/png': ['.png']
}
  
  