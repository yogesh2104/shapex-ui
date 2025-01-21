'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Search, Upload, Filter, CircleHelp, Settings, ListFilter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FileTable } from './file-table'
import { useFileManager } from '../hook/useFileManager'
import { MAX_FILE_SIZE, ACCEPTED_FILE_TYPES, FileItem } from '../types/types'

export default function FileManager() {
  const { files, handleDrop, removeFile } = useFileManager()
  const [searchTerm, setSearchTerm] = useState('')
  const [allFiles] = useState<FileItem[]>([
    {
      id: "1",
      name: 'Mohini Theatre',
      size: '3.8 GB',
      lastModified: '2025/18/16',
      uploadedBy: {
        name: 'Babu Rao',
        email: 'babubhaiya@gmail.com',
        avatar: '/character/babu-rao.jpg'
      },
      type: 'video'
    },
    {
      id: "2",
      name: 'Ishika',
      size: '2 GB',
      lastModified: '2006/18/16',
      uploadedBy: {
        name: 'Majnu Bhai',
        email: 'majnubhai@gmail.com',
        avatar: '/character/majnu-bhai.jpg'
      },
      type: 'video'
    },
  ])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: ACCEPTED_FILE_TYPES,
    maxSize: MAX_FILE_SIZE,
    multiple: true
  })

  const handleEdit = useCallback((id: string) => {
    console.log(`Editing file with id: ${id}`)
  }, [])

  const filteredFiles = allFiles.filter(file => 
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
      <div className='px-4'>
        <div className='flex flex-col md:flex-row gap-1 justify-start md:justify-between md:items-center'>
          <div>
            <h1 className='font-bold text-3xl'>Upload Asset Files</h1>
            <p>Here you can manage your files & asset and other attachement</p>
          </div>
          <div className='flex gap-1'>
            <Button variant={"ghost"} size={"icon"} className='hover:bg-none border rounded-full '><CircleHelp className='size-4'/></Button>
            <Button variant={"ghost"} size={"icon"} className='hover:bg-none border rounded-full '><Settings className='size-4' /></Button>
            <Button variant={"ghost"} size={"icon"} className='hover:bg-none border rounded-full '><ListFilter className='size-4' /></Button>
          </div>
        </div>
      </div>

      <div 
        {...getRootProps()}
        className={`border-2 border-dashed border-primary/20 rounded-2xl p-8 text-center bg-primary/5 transition-colors duration-200 cursor-pointer
          ${isDragActive ? 'border-primary bg-primary/10' : 'hover:border-primary/40 hover:bg-primary/10'}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <div className="p-4 bg-primary/10 rounded-full">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-primary">
            {isDragActive ? 'Drop files here' : 'Click here'}
          </h3>
          <p className="text-sm text-muted-foreground">
            {isDragActive ? 'Drop your files to upload' : 'to upload your file or drag and drop.'}
          </p>
          <p className="text-xs text-muted-foreground">
            Supported Format: SVG, JPG, PNG (10mb each)
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="bg-background rounded-2xl border shadow-sm">
          <div className="flex flex-col gap-4">
            <FileTable files={files} onRemove={removeFile} onEdit={handleEdit} />
          </div>
          <div className='flex justify-end gap-4 py-4 px-2'>
            <Button variant={"outline"} className='rounded-full'>Cancle</Button>
            <Button className='rounded-full'>Save Changes</Button>
          </div>
        </div>
      )}

      <div className="bg-background rounded-2xl border shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="p-4 flex flex-col lg:flex-row gap-2 justify-start lg:items-center lg:justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Attached Files</h2>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">
                {filteredFiles.length} Total
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-9 w-[250px]  rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="default" className='rounded-full'>
                <Filter className="mr-2 h-4 w-4" />Filter
              </Button>
            </div>
          </div>
          <FileTable files={filteredFiles} onRemove={removeFile} onEdit={handleEdit} />
        </div>
      </div>
    </div>
  )
}



