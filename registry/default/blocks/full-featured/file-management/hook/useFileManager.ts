import { useState, useCallback } from 'react'
import { FileItem, } from '../types/types'
import { toast } from 'sonner'

export function useFileManager() {
  const [files, setFiles] = useState<FileItem[]>([])

  const addFiles = useCallback((newFiles: FileItem[]) => {
    setFiles((prev) => [...prev, ...newFiles])
  }, [])

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id))
    toast.success('File removed successfully')
  }, [])

  const handleDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    rejectedFiles.forEach(({ file, errors }) => {
      if (errors[0]?.code === 'file-too-large') {
        toast.error(`${file.name} is too large. Max size is 10MB`)
      } else if (errors[0]?.code === 'file-invalid-type') {
        toast.error(`${file.name} has an invalid file type. Accepted types are SVG, JPG, and PNG`)
      }
    })

    const newFiles = acceptedFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      lastModified: new Date(file.lastModified).toLocaleDateString(),
      uploadedBy: {
        name: 'Bulla',
        email: 'bulla@example.com',
        avatar: '/character/bulla.jpg'
      },
      type: file.name.split('.').pop() || ''
    }))

    addFiles(newFiles)
    toast.success(`Successfully uploaded ${acceptedFiles.length} file(s)`)
  }, [addFiles])

  return { files, addFiles, removeFile, handleDrop }
}

