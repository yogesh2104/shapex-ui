import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { FileItem } from '../types/types'

interface FileTableProps {
  files: FileItem[]
  onRemove: (id: string) => void
  onEdit: (id: string) => void
}

export function FileTable({ files, onRemove, onEdit }: FileTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='px-6'>File Name</TableHead>
          <TableHead className='min-w-20'>File Size</TableHead>
          <TableHead className='min-w-28'>Last Modified</TableHead>
          <TableHead>Uploaded By</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow key={file.id}>
            <TableCell>
              <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-2 px-3">
                <div className="size-7 lg:size-10 flex items-center justify-center rounded bg-primary/10">
                  <div className="text-primary text-[8px] lg:text-xs uppercase">{file.type}</div>
                </div>
                <div>
                  <div className="font-medium line-clamp-1">{file.name}</div>
                  <div className="text-xs text-muted-foreground">{file.size}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{file.size}</TableCell>
            <TableCell>{file.lastModified}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={file.uploadedBy.avatar} alt={file.uploadedBy.name} />
                  <AvatarFallback>{file.uploadedBy.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{file.uploadedBy.name}</div>
                  <div className="text-sm text-muted-foreground">{file.uploadedBy.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <Button 
                variant="ghost" 
                className="text-red-500 hover:text-red-600"
                onClick={() => onRemove(file.id)}
              >
                Delete
              </Button>
              <Button variant="ghost" className="text-primary" onClick={() => onEdit(file.id)}>
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

