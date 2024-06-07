export type FileNode = {
    name: string;
    type: 'file' | 'folder';
    children?: FileNode[];
};


export const fileStructure: FileNode[] = [
    {
      "name": "Folder Main",
      "type": "folder",
      "children": [
        {
          "name": "File Main-1",
          "type": "file"
        },
        {
          "name": "Folder SubMain",
          "type": "folder",
          "children": [
            {
              "name": "File SubMain-1",
              "type": "file"
            }
          ]
        }
      ]
    },
    {
      "name": "File 2",
      "type": "file"
    }
  ];