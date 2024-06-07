import React, { useState } from 'react';
import { FileNode } from '../Config';


const FolderBrowser: React.FC<{ structure: FileNode[] }> = ({ structure }) => {
  return (
    <div>
      {structure.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

const TreeNode: React.FC<{ node: FileNode }> = ({ node }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ paddingLeft: 20 }}>
      <div onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
        {node.type === 'folder' ? (
          <>
            {collapsed ? '📁' : '📂'} {node.name}
          </>
        ) : (
          <>📄 {node.name}</>
        )}
      </div>
      {!collapsed && node.children && (
        <div>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderBrowser;