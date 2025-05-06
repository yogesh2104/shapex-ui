
import { Grid, Box, Type} from 'lucide-react';

export default function DevTools() {
  const tools = [
    {
      name: 'CSS Grid Generator',
      description: 'Visual tool to create and customize CSS grid layouts',
      icon: <Grid className="h-8 w-8 text-indigo-500" />,
      slug: 'grid-generator'
    },
    {
      name: 'Box Shadow Generator',
      description: 'Create and customize box shadows with live preview',
      icon: <Box className="h-8 w-8 text-indigo-500" />,
      slug: 'box-shadow-generator'
    },
    {
      name: 'Text Shadow Generator',
      description: 'Design text shadows with real-time preview',
      icon: <Type className="h-8 w-8 text-indigo-500" />,
      slug: 'text-shadow-generator'
    },
  ];



  return (
    <div className="mt-5 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 hover:shadow-lg  border"
          >
            <div className="flex items-center mb-4">
              <div className="bg-indigo-50 p-3 rounded-lg mr-4">
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{tool.description}</p>
            <div className="flex items-center justify-end">
            
              <a 
                href={`/tools/${tool.slug}`}
                className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
              >
                Open Tool →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}